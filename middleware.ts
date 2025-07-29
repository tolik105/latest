import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  
  // Redirect URLs with trailing slashes to URLs without trailing slashes
  // Exception: Keep trailing slash for the root path "/"
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const newUrl = new URL(url)
    newUrl.pathname = newUrl.pathname.slice(0, -1)
    return NextResponse.redirect(newUrl, 301) // 301 permanent redirect
  }
  
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Match all pathnames except for:
    // - api routes
    // - _next (Next.js internals)
    // - static files (images, fonts, etc.)
    '/((?!api|_next|.*\\.).*)',
  ],
}