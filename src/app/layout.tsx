import "@/styles/normalize.css";
import "@/styles/globalTheme.css";
import "swiper/css";

import Nav from "@/components/Nav/";
import { themeClass } from "@/styles/globalTheme.css";
import Script from "next/script";
import Toast from "@/components/Toast";
import { SessionProvider } from "next-auth/react";
import { getSession } from "../serverActions/auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <html lang="ko-kr" className={themeClass}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <Script
          strategy="beforeInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          <Nav />
          <main>{children}</main>
        </SessionProvider>

        <Toast />
      </body>
    </html>
  );
}
