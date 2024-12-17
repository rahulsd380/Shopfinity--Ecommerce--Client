import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const userRole = req.cookies.get("role")?.value || "guest";

  if (pathname.startsWith("/dashboard")) {
    if (userRole === "user" && (pathname.includes("/dashboard/seller") || pathname.includes("/dashboard/admin"))) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (userRole === "guest" || userRole === "" && (pathname.includes("/dashboard/seller") || pathname.includes("/dashboard/admin"))) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (userRole === "seller" && pathname.includes("/dashboard/admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (userRole === "admin" && pathname.includes("/dashboard/seller")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Add condition to redirect for cart and place-order routes for guests
  if (pathname.startsWith("/cart") || pathname.startsWith("/cart/place-order")) {
    if (userRole === "guest" || userRole === "") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/cart", "/cart/place-order"],
};
