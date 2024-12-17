import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const userRole = req.cookies.get("role")?.value || "guest";

  if (pathname.startsWith("/dashboard")) {
    if (userRole === "user" && (pathname.includes("/dashboard/seller") || pathname.includes("/dashboard/admin"))) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (userRole === "seller" && pathname.includes("/dashboard/admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (userRole === "admin" && pathname.includes("/dashboard/seller")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
