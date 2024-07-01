import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoadingLogo from "@/components/LoadingLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EducSmart",
  description: "Votre logiciel de gestion des écoles et de suivi parental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LoadingLogo>
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
        </LoadingLogo>
      </body>
    </html>
  );
}
