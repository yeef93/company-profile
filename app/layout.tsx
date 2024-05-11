import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bon Appétit",
  description: "Cuisine & Patisserie School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
