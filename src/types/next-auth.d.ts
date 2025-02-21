import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  export interface Session {
    user: {
      id: string
      roles?: string[]
    }
  }

  export interface User {
    id: string
    roles?: string[]
  }
}

declare module 'next-auth/jwt' {
  export interface JWT {
    id: string
    roles?: string[]
  }
}
