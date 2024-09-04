import Nav from "@/components/Nav";
import ClientProviders from "@/components/ClientProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientProviders>
          <header>
            <Nav />
          </header>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
