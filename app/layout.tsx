import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMG Capas - Capas de Banco Automotivas Premium",
  description:
    "Capas de banco automotivas sob medida para proteger, renovar e trazer mais conforto para o interior do seu carro. Frete gratis para todo o Brasil.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
