import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/context/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newYork = localFont({
  src: "../../public/fonts/NewYork.ttf",
  variable: "--font-newYork",
});

export const metadata: Metadata = {
  title: "Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newYork.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
