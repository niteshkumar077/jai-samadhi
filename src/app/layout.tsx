import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { LazyMotion, domMax } from "framer-motion";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jai Samadhi - Baba Garib Das Temple, Kashmore",
  description: "Official website of Baba Garib Das Temple in Kashmore (Ghouspur). Discover the sacred heritage, spiritual lineage, and divine bhajans of Sindh's prestigious Hindu temple.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg" },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        <style dangerouslySetInnerHTML={{
          __html: `
          :root { --saffron-500: #ffc107; --saffron-600: #ffb300; }
          body { 
            background-color: #ffffff; 
            margin: 0; 
            font-family: var(--font-inter), system-ui, sans-serif; 
            overflow-x: hidden;
          }
          @media (prefers-color-scheme: dark) { body { background-color: #0a0a0a; } }
          h1 { margin: 0; }
          .min-h-screen { min-height: 100vh; }
        `}} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <LazyMotion features={domMax}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
