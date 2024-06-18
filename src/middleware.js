import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //redirect to /gallery instead of about of localhost:3000
  console.log("Middleware");
  //   return NextResponse.redirect("http://localhost:3000/gallery");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/gallery/blogs/create",
};
