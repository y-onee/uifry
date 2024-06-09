import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local"

const inter = Inter({ subsets: ["latin"] });

const clash = localfont({
  src: [
    {
      path: "../public/Fonts/ClashDisplay-Variable.ttf",
    },
  ],
  variable: "--font-clash",
})

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
    <html lang="en">
      <body className={`${inter.className} ${clash.variable}`}>{children}</body>
    </html>
  );
}
