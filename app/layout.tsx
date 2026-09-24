import type { Metadata, Viewport } from "next";
import { Caveat, Karla, Protest_Strike } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const display = Protest_Strike({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PromptMika — knowledge packs for coding agents",
  description:
    "An MCP server that gives coding agents curated design, engineering, security, testing, web-research, and debugging context. 37 tools, 58 design styles, one endpoint.",
};

export const viewport: Viewport = {
  themeColor: "#f0e4c6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>{children}<Analytics /></body>
    </html>
  );
}
