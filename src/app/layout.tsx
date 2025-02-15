import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chess game",
  description: "Let's to capture the king",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.variable].join(" ")}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
