import type { Metadata } from "next";
import { GeistSans } from "geist/font";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Twitch Mod View",
  description: "Implementation of Twitch View Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
