import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WealthTrack Pro Documentation",
  description: "Documentation for WealthTrack Pro - The ultimate financial tracking spreadsheet for consultants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider>
            <Header />
            {children}
            <MobileNav />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
