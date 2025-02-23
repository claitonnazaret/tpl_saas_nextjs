import { prisma } from '@/services/database'
import { User } from '@prisma/client'
import { compareSync } from 'bcryptjs'
import { CredentialsSignin } from 'next-auth'

class InvalidCredentialsError extends CredentialsSignin {
  code = 'Credenciais inválidas'
}

class DatabaseError extends CredentialsSignin {
  code = 'Erro ao conectar com banco de dados'
  cause?: (Record<string, unknown> & { err?: Error }) | undefined
}

class UserNotFoundError extends CredentialsSignin {
  code = 'Usuário não encontrado'
}

class PasswordMismatchError extends CredentialsSignin {
  code = 'Senha inválida'
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
  try {
    await prisma.$connect()
  } catch (error) {
    throw new DatabaseError(`Failed to connect to the database: ${error}`)
  }

  const user = await prisma.user
    .findUnique({
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
    .catch(() => {
      throw new UserNotFoundError()
    })

  if (!user) {
    throw new UserNotFoundError()
  }

  const passwordMatch = compareSync(password, user.password as string)

  if (!passwordMatch) {
    throw new PasswordMismatchError()
  }

  const { userRoles, ...userWithoutRoles } = user
  return {
    ...userWithoutRoles,
    roles: userRoles.map((userRole) => userRole.role.name),
  }
}

export { findUserAuthorization, InvalidCredentialsError }
