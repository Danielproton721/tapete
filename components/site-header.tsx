"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#eee]">
      <div className="mx-auto flex items-center justify-between px-4 py-3 max-w-7xl">
        <div className="flex items-center gap-3">
          <button
            aria-label="Menu"
            className="p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-6 w-6 text-[#222]" />
          </button>
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo-amg-capas.png"
              alt="AMG Capas"
              width={140}
              height={50}
              className="h-10 w-auto object-contain"
              priority
              loading="eager"
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Buscar" className="p-1">
            <Search className="h-5 w-5 text-[#222]" />
          </button>
          <button aria-label="Carrinho" className="relative p-1">
            <ShoppingCart className="h-5 w-5 text-[#222]" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#111] text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-[#eee] bg-white px-4 py-4">
          <nav className="flex flex-col gap-3">
            <a href="#" className="text-sm text-[#222] hover:text-[#555]">Inicio</a>
            <a href="#" className="text-sm text-[#222] hover:text-[#555]">Produtos</a>
            <a href="#" className="text-sm text-[#222] hover:text-[#555]">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
}
