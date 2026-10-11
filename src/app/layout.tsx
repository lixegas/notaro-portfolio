import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import {ThemeContextProvider} from "@/contexts/theme";
import {SITE_ORIGIN} from "@/constants/common";
import {THEME_INIT_SCRIPT} from "@/constants/theme";
import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-clip duration-300`}
      >
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
