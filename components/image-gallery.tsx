"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/capa-preta-1.jpg",
  "/images/capa-preta-2.jpg",
  "/images/capa-preta-3.jpg",
  "/images/capa-preta-4.jpg",
  "/images/capa-preta-5.jpg",
  "/images/capa-preta-6.jpg",
];

export function ImageGallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="relative w-full aspect-square max-w-[560px] bg-white">
        {images.map((img, i) => (
          <Image
            key={img}
            src={img || "/placeholder.svg"}
            alt={`Capas de Bancos Premium - Imagem ${i + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 560px"
            className={`object-contain transition-opacity duration-200 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow hover:bg-white transition"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-5 w-5 text-[#333]" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow hover:bg-white transition"
          aria-label="Proxima imagem"
        >
          <ChevronRight className="h-5 w-5 text-[#333]" />
        </button>
      </div>

      {/* Counter */}
      <p className="mt-2 text-sm text-[#888]">
        {current + 1} / {images.length}
      </p>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setCurrent(i)}
            className={`relative h-16 w-16 flex-shrink-0 rounded border-2 overflow-hidden transition ${
              i === current ? "border-[#2EBFAC]" : "border-transparent"
            }`}
            aria-label={`Miniatura ${i + 1}`}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`Miniatura ${i + 1}`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
