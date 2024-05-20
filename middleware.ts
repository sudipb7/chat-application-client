import { NextResponse } from "next/server";

import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");

  if (isApiAuthRoute) return;

  if (isLoggedIn && nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (!isLoggedIn && nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/home", nextUrl));
  }

  if (!isLoggedIn && nextUrl.pathname !== "/sign-in" && nextUrl.pathname !== "/") {
    if (nextUrl.pathname === "/home") {
      return NextResponse.redirect(new URL("/", nextUrl));
    }

    let redirectUrl = nextUrl.pathname;
    if (nextUrl.search) {
      redirectUrl += nextUrl.search;
    }

    const encodedRedirectUrl = encodeURIComponent(redirectUrl);

    return NextResponse.redirect(new URL(`/sign-in?redirectTo=${encodedRedirectUrl}`, nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
