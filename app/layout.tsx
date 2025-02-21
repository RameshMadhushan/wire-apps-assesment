import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-roboto", 
})

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} overflow-x-hidden  antialiased`}
      >

        <Header />

        {children}
      </body>
    </html>
  );
}
