import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: "Test App",
  description: "Test for ellty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <main className="min-h-screen p-8">{children}</main>
      </body>
    </html>
  );
}
