import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import MetaTags from "../../components/MetaTags";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isa Cytryn",
  description: "Isa Cytryn - Psicóloga",
};

export const HEAD = <MetaTags />;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <AppProvider>
        <Head>{HEAD}</Head>
        <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>
  );
}
