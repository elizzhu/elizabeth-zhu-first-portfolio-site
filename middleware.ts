import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/_next') || url.pathname === '/lock') {
    return NextResponse.next()
  }

  const unlocked = req.cookies.get('site-unlocked')
  if (!unlocked) {
    url.pathname = '/lock'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
