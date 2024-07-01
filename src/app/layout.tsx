import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import NavBar from "~/app/(components)/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#051937] to-[#020202] text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
