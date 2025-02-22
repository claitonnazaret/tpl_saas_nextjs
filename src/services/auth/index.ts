import { prisma } from '@/services/database'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { findUserAuthorization, InvalidCredentialsError } from './user'

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

        return findUserAuthorization({ email, password })
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 horas
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
