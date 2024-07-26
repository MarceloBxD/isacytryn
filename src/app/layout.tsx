import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora, Raleway } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import MetaTags from "../../components/MetaTags";
import SmoothScrolling from "../../components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isa Cytryn",
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

export const HEAD = <MetaTags />;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="pt-br">
      <AppProvider>
        {HEAD}
        <body className={raleway.className}>
          <SmoothScrolling>{children}</SmoothScrolling>
        </body>
      </AppProvider>
    </html>
  );
}
