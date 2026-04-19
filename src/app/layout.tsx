import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Pandey | v3 Engineering Portfolio",
  description: "Full-Stack Platform Engineer specializing in scalable architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200`}
      >
        <Navbar />
        <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}