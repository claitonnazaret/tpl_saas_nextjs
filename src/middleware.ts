import { auth } from '@/services/auth'
import { NextResponse } from 'next/server'

const PRIVATE_URL = '/dashboard'
const protectedRoutes = [PRIVATE_URL]

export default auth((req) => {
  const { pathname } = req.nextUrl

  const isProtectedRoute = protectedRoutes.includes(pathname)

  if (isProtectedRoute && !req.auth) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  if (!isProtectedRoute && req.auth) {
    return NextResponse.redirect(new URL(PRIVATE_URL, req.nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
