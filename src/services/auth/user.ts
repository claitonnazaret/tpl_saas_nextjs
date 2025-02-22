import { prisma } from '@/services/database'
import { User } from '@prisma/client'
import { compareSync } from 'bcryptjs'
import { CredentialsSignin } from 'next-auth'

class InvalidCredentialsError extends CredentialsSignin {
  code = 'Invalid credentials'
}

class UserNotFoundError extends CredentialsSignin {
  code = 'User not found'
}

class PasswordMismatchError extends CredentialsSignin {
  code = 'Invalid password'
}

type CredentialsRequest = {
  email: string
  password: string
}

type UserWithRoles = User & { roles: string[] }

const findUserAuthorization = async ({
  email,
  password,
}: CredentialsRequest): Promise<UserWithRoles | null> => {
  const user = await prisma.user.findUnique({
    where: { email: email as string },
    include: {
      userRoles: {
        include: {
          role: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  if (!user) {
    throw new UserNotFoundError('User not found with the provided email')
  }

  const passwordMatch = compareSync(password, user.password as string)

  if (!passwordMatch) {
    throw new PasswordMismatchError('The password provided is incorrect')
  }

  const { userRoles, ...userWithoutRoles } = user
  return {
    ...userWithoutRoles,
    roles: userRoles.map((userRole) => userRole.role.name),
  }
}

export { findUserAuthorization, InvalidCredentialsError }
