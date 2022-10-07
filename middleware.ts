import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/static") ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }
    
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    
    const login = req.nextUrl.clone();
    login.pathname = "/login";
    
    // Allow the requests if the following is true
    // 1) Its a request for next-auth session & provider fetching
    // 2) the token exists
    if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
    }

    // redirect to login if they dont have token
    if (!token && pathname !== "/login") {
    return NextResponse.redirect(login);
    }
}
