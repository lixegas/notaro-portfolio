import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ThemeContextProvider} from "@/contexts/theme";
import {BASE_URL} from "@/constants/common";
import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const defaultTitle = "Peppino Notaro"
const defaultDescription = "Peppino Notaro's portfolio."

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(BASE_URL || ""),
  twitter: {
    title: defaultTitle,
    description: defaultDescription
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased bg-white dark:bg-neutral-950 duration-200`}
      >
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
