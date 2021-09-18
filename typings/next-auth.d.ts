import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

/** Example on how to extend the built-in session types */
declare module 'next-auth' {
  interface Session {
    user: {
      email: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    idToken?: string
  }
}
