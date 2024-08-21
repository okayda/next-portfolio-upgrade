import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const Particles = dynamic(() => import("@/components/animation/Particles"), {
  ssr: false,
});
import Navigation from "@/components/main/navigation/Navigation";
import Footer from "@/components/main/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jhon Queñano",
  description: "Created from my heart & curiosity by - Jhon Queñano",
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
        {/* Mobile & Tablet Particles */}
        <Particles
          className="fixed left-0 top-0 -z-10 h-full w-full lg:hidden"
          quantity={60}
        />

        {/* Destop Particles */}
        <Particles
          className="fixed left-0 top-0 -z-10 hidden h-full w-full lg:block"
          quantity={140}
        />

        <header itemScope itemType="https://schema.org/WPHeader">
          <Navigation />
        </header>

        <main
          itemScope
          itemType="https://schema.org/WebPageElement"
          className="container mx-auto px-3 md:px-8"
        >
          {children}
        </main>

        <footer
          itemScope
          itemType="https://schema.org/WPFooter"
          className="container mx-auto px-3 md:px-8"
        >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
