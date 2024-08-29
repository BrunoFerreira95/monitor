// middleware.js
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const allowedIp = '177.8.48.89';
  const clientIp = req.headers.get('x-forwarded-for') || req.ip;

  if (clientIp !== allowedIp) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return NextResponse.next();
}

// Especifique as rotas que devem usar este middleware
export const config = {
  matcher: '/api/:path*', // Aplica o middleware a todas as rotas dentro de /api
};
