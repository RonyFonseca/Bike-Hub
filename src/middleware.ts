import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  const publicRoutes = ["/auth"];
  const isPublicRoute = publicRoutes.some(route =>
    pathname.startsWith(route)
  );

  // 🔒 Se não tem token e não é rota pública → login
  if (!cookie && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Se tem token → verifica tipo
  if (cookie) {
    const token = JSON.parse(cookie.value);

    // 🚫 Locador tentando acessar rota de locatário
    if (
      token.typeCount === "locador" &&
      pathname.startsWith("/locatario")
    ) {
      return NextResponse.redirect(new URL("/locador", req.url));
    }

    // 🚫 Locatário tentando acessar rota de locador
    if (
      token.typeCount === "locatario" &&
      pathname.startsWith("/locador")
    ) {
      return NextResponse.redirect(new URL("/locatario", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/locador/:path*", "/locatario/:path*", "/auth/:path*", "/"],
};