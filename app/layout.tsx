import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuProvider from "@/context/MenuProvider";

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
      <MenuProvider>
        <body className={inter.className}>
          <Header />
          <main className=" m-0 p-0 pt-20">{children}</main>
          <Footer />
        </body>
      </MenuProvider>
    </html>
  );
}
