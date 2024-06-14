import "@/styles/globals.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle className="absolute top-4 right-4 md:top-8 md:right-8" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
