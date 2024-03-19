import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fitbod Demo",
  description: "Fitbod Demo - Thomas Toan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col justify-between min-h-[100vh] ${inter.variable}`}>
      <div className="h-[60px] bg-[#0085BF]">fitbod layout header</div>
        <div className="grow bg-gradient-to-b from-[#C4F7E8] to-[#A5CCF9]">
        {children}
        </div>
        <div className="h-[150px] bg-[#0085BF]">fitbod layout footer</div>
      </body>
    </html>
  );
}
