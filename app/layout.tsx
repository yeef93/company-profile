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
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
