import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./app/serverActions/auth";

export async function middleware(req: NextRequest) {
  const session = await getSession();
  const privatePaths = ["/account/history", "/account/accountSetting"];
  const loggedOutPaths = ["/login", "/signup", "/findPw"];

  const isLoggedOutPahts = loggedOutPaths.includes(req.nextUrl.pathname);
  const isPrivatePath = privatePaths.includes(req.nextUrl.pathname);

  const isFile = req.nextUrl.pathname.match(/\.(.*)$/);

  if (isFile) {
    return NextResponse.next();
  }

  if (session?.accessToken && isLoggedOutPahts) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isPrivatePath && !session?.accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
