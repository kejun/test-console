import { NextResponse } from 'next/server';

export function middleware(request) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.') ||
    request.nextUrl.pathname === '/'
  ) {
    return NextResponse.next();
  }
  return NextResponse.rewrite(new URL('/', request.url));
}

export const config = {
  matcher: '/:path*',
};
