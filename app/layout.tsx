import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AMG Capas - Capas de Banco Automotivas Premium",
  description:
    "Capas de banco automotivas premium com design em diamante. Material impermeavel, encaixe sob medida e frete gratis para todo o Brasil.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
