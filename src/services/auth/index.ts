import { prisma } from '@/services/database'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compareSync } from 'bcryptjs'
import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

class InvalidCredentialsError extends CredentialsSignin {
  code = 'Invalid credentials'
}

class UserNotFoundError extends CredentialsSignin {
  code = 'User not found'
}

class PasswordMismatchError extends CredentialsSignin {
  code = 'Invalid password'
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    newUser: '/dashboard',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          placeholder: 'Digite seu email',
          value: 'claitonnazaret@gmail.com',
        },
        password: { label: 'Password', type: 'password', value: 'admin123' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        if (!email || !password) {
          throw new InvalidCredentialsError('Email and password are required')
        }

        // Try to find the user in the database
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
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    session({ session, token }) {
      session.user.roles = token.roles
      return session
    },
    jwt({ token, user }) {
      if (user) {
        token.roles = user.roles
      }
      return token
    },
  },
})
