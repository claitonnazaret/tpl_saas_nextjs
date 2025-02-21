import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

class InvalidLoginError extends CredentialsSignin {
  code = 'Invalid identifier or password'
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    newUser: '/dashboard',
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', placeholder: '' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const admin = {
          name: 'Admin User',
          username: 'admin',
          email: 'admin@gmail.com',
          roles: ['admin', 'client'],
        }
        const client = {
          name: 'Client User',
          username: 'client',
          email: 'client@gmail.com',
          roles: ['client'],
        }

        const user = [admin, client].find(
          ({ username }) => username === credentials.username,
        )
        return user || new InvalidLoginError()
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
