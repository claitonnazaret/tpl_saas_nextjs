import { auth } from '@/services/auth'
import { NextResponse } from 'next/server'

const PRIVATE_URL = '/dashboard'
const publicRoutes = ['/', '/login', '/register']

export default auth((req) => {
  const { pathname } = req.nextUrl

  const isPublic = publicRoutes.includes(pathname)

  if (!req.auth && isPublic) {
    return NextResponse.next()
  }

  if (!req.auth && !isPublic) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }

  if (req.auth && isPublic) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = PRIVATE_URL
    return NextResponse.redirect(redirectUrl)
  }

  if (req.auth && !isPublic) {
    return NextResponse.next()
  }
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
