/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import Cookies  from 'js-cookie';

type Role = keyof typeof roleBaseRoutes;

const AuthRoutes = ["/login", "/signup"];
const roleBaseRoutes = {
  user: [
    /^\/become-seller/,
    /^\/cart/,
    /^\/compare-products/,
    /^\/products/,
    /^\/wishlist/,
  ],
  admin: [
    /^\/admin/,
    /^\/become-seller/,
    /^\/cart/,
    /^\/compare-products/,
    /^\/products/,
    /^\/wishlist/,
    /^\/manage-categories/,
    /^\/manage-shops/,
    /^\/manage-users/,
    /^\/payment-history/
  ],
  seller: [
    /^\/seller/,
    /^\/cart/,
    /^\/compare-products/,
    /^\/products/,
    /^\/wishlist/,
    /^\/manage-categories/,
    /^\/add-product/,
  ],
};

// Middleware function
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Retrieve the token from cookies
  // const token = request.cookies.get('accessToken')?.value;
  const token = Cookies.get("accessToken");
  console.log(token)

  // If there is no token and the user is trying to access a protected route
  if (!token) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Decode the token using JWT and a secret
    const decodedToken: any = jwt.verify(token, "secret" as string);

    const userRole = decodedToken.role as Role;

    // Check if the user role has the necessary permissions for the requested route
    if (userRole && roleBaseRoutes[userRole]) {
      const routes = roleBaseRoutes[userRole];

      // Check if the current pathname matches the user's role routes
      if (routes.some((route) => route.test(pathname))) {
        return NextResponse.next();
      }
    }

    // If no match, redirect to homepage or login
    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error('Invalid or expired token:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Middleware configuration
export const config = {
  matcher: [
    "/admin", 
    "/login", 
    "/signup", 
    "/dashboard/seller", 
  ],
};
