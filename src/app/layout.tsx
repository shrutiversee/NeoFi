import type { Metadata } from "next";
import {Alexandria } from "next/font/google";
import "./globals.css";


const alexandira = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "NeoFi",
  description: "Generated for NeoFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alexandira.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
