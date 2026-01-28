"use server"

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse, NextRequest } from "next/server"

export function middleware(req: NextRequest){
    const token: RequestCookie | undefined = req.cookies.get("token"); 

    const publicRoutes: Array<string> = ["/auth"]

    const isPublic: boolean = publicRoutes.some(route => req.nextUrl.pathname.startsWith(route))

    if(!isPublic && !token){
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    return NextResponse.next(); 
}; 

export const config = {
  matcher: ["/", "/auth/:path*"]
}