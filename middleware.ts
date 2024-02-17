import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/register' || path === '/verify'

    const token = request.cookies.get('token')?.value || ''

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/shop', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/shop',
        '/login',
        '/register',
    ]
}