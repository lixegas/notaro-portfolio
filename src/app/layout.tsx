import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ThemeContextProvider} from "@/contexts/theme";
import {SITE_ORIGIN} from "@/constants/common";
import {THEME_INIT_SCRIPT} from "@/constants/theme";
import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const defaultTitle = "Peppino Notaro"
const defaultDescription = "Portfolio di Peppino Notaro, sviluppatore Fullstack."

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(SITE_ORIGIN),
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
    <html lang="it" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: THEME_INIT_SCRIPT}}/>
      </head>
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
