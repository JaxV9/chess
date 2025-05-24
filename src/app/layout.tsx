import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextsProvider from "@/contexts/contextsProvider";
import { PopupUi } from "@/components/ui/popUp/popup";
import { PlayerStatus } from "@/components/ui/playerStatus/playerStatus";


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
        <ContextsProvider>
          {children}
          <PopupUi />
          <PlayerStatus />
        </ContextsProvider>
      </body>
    </html>
  );
}
