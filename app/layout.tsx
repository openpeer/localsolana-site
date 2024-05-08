import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LocalSolana",
  description: "Crypto P2P made easy",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-ls-dark">
        <div className="container mx-auto px-4 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
