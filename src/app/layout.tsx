import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";
import Header from "@/sections/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shreya | Personal Portfolio",
  description: "Shreya is a Frontend Developer based in Dublin with 4 years of experience",
};

export default function RootLayout({
  className,
  children,
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <html lang="en" className="!scrool-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans", className)}
      >
       <ActiveSectionContextProvider> 
        
      <Header />
        {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
