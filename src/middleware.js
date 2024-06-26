import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  //check for cookie with name 'yash-portfolio-auth'
  //if cookie is not present then redirect to /authorize
  const url = request.nextUrl;

  const authToken = cookies().get("yash-portfolio-auth")?.value;
  if (authToken === undefined) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_WEB_URL}/authorize`
    );
  } else if (authToken === process.env.AUTH_TOKEN) {
    if (url.pathname === "/admin") {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_WEB_URL}/admin/blogs`
      );
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
