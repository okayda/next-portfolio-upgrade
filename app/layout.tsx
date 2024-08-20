import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navigation from "@/components/main/navigation/Navigation";
import Footer from "@/components/main/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jhon Queñano",
  description: "Created with heart & passion by - Jhon Queñano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#030014] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <header>
          <Navigation />
        </header>

        <main className="container mx-auto px-3 md:px-8">{children}</main>

        <footer className="container mx-auto px-3 md:px-8">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
