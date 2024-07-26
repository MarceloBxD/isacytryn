import "./globals.css";
import type { Metadata } from "next";
import { Sora, Raleway } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import MetaTags from "../../components/MetaTags";
import SmoothScrolling from "../../components/SmoothScrolling";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "Psicóloga - Isa Cytryn",
  description: "Isa Cytryn - Psicóloga",
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos desejados
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos desejados
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <AppProvider>
        <MetaTags />
        <body className={raleway.className}>
          <SmoothScrolling>{children}</SmoothScrolling>
        </body>
      </AppProvider>
    </html>
  );
}
