"use client";

import Image from "next/image";
import { useState } from "react";

const cores = [
  {
    id: "preto",
    label: "Preto",
    price: "R$ 293,10",
    color: "#111111",
    image: "/images/capa-preta-1.jpg",
  },
  {
    id: "caramelo",
    label: "Caramelo",
    price: "R$ 293,10",
    color: "#C68B59",
    image: "/images/capa-caramelo.jpg",
  },
  {
    id: "preto-cinza",
    label: "Preto/Cinza",
    price: "R$ 293,10",
    color: "#777777",
    image: "/images/capa-preto-cinza.jpg",
  },
  {
    id: "preto-branco",
    label: "Preto/Branco",
    price: "R$ 293,10",
    color: "#EEEEEE",
    image: "/images/capa-preto-branco.jpg",
  },
  {
    id: "preto-vermelho",
    label: "Preto/Vermelho",
    price: "R$ 293,10",
    color: "#CC2222",
    image: "/images/capa-preto-vermelho.jpg",
  },
];

export function ProductOptions() {
  const [selectedCor, setSelectedCor] = useState("preto");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* Collapsible Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 mb-3 cursor-pointer bg-transparent border-none"
      >
        <p className="text-sm font-semibold text-[#222]">Variante</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Collapsible Content */}
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: isOpen ? "2000px" : "0px" }}
      >
        <div className="flex flex-col gap-2">
          {cores.map((cor) => (
            <button
              key={cor.id}
              onClick={() => setSelectedCor(cor.id)}
              className={`flex items-center gap-3 rounded-lg border-2 p-3 text-left transition ${
                selectedCor === cor.id
                  ? "border-[#111] bg-[#fafafa]"
                  : "border-[#e5e7eb] bg-transparent hover:border-[#ccc]"
              }`}
            >
              {/* Color swatch */}
              <div
                className="h-6 w-6 rounded-full border border-[#ddd] flex-shrink-0"
                style={{ backgroundColor: cor.color }}
              />

              {/* Thumbnail */}
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={cor.image || "/placeholder.svg"}
                  alt={cor.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Label */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#222]">{cor.label}</p>
              </div>

              <p className="text-sm font-bold text-[#222]">{cor.price}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Buy Button - always visible */}
      <button className="w-full rounded-lg bg-[#111] py-4 text-base font-bold uppercase tracking-wide text-white hover:bg-[#333] transition mt-5">
        Fabricar Meu Modelo
      </button>

      {/* Loading message */}
      <p className="text-center text-xs text-[#999] mt-2">Carregando, aguarde...</p>
    </div>
  );
}
