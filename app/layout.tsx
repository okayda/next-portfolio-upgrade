import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navigation from "@/components/main/navigation/Navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jhon Queñano",
  description:
    "Created with heart and passion, my portfolio showcases a range of different projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#030014] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <header>
          <Navigation />
        </header>

        <main className="container mx-auto text-white">{children}</main>
      </body>
    </html>
  );
}
