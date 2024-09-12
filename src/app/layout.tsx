import "@/styles/normalize.css";
import "@/styles/globalTheme.css";
import "swiper/css";

import Nav from "@/components/Nav";
import { themeClass } from "@/styles/globalTheme.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={themeClass}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
