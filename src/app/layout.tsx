import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
