import "@/styles/globals.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Weeks Left: Countdown to Doom",
  description: "Calculate your remaining life years!",
  authors: [{ name: "Leandro Vilanova", url: "https://leandro-vilanova.com/" }],
  keywords: [
    "life expectancy calculator",
    "weeks left to live",
    "life span calculation",
    "life duration estimator",
    "life expectancy tracker",
    "years to weeks converter",
    "healthspan estimation",
    "longevity calculator",
    "time remaining calculator",
    "personal life expectancy",
  ],
  themeColor: "#c5ff48",
  colorScheme: "dark light",
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
