import type { Metadata } from "next";

import "./globals.css";

//👇 Import Open Sans font
import { Wix_Madefor_Text } from "next/font/google";

//👇 Configure our font object
const wixMadeforText = Wix_Madefor_Text({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={wixMadeforText.className}>{children}</body>
    </html>
  );
}
