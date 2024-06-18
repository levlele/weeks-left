import "@/styles/globals.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "The Scare Jump Procrastinator Calculator",
  description: "Calculate your remaining life years!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${GeistMono.variable} min-h-screen bg-background font-mono antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
