import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/dashboard", req.url));
}

export const config = {
  matcher: ["/"],
};
