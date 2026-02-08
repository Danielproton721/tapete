"use client";

import Image from "next/image";

export function AnnouncementBar() {
  const items = [
    "Satisfacao Garantida ou dinheiro de volta",
    "Trocas e Devolucoes em ate 7 dias",
    "Frete Gratis para todo o Brasil",
  ];

  const renderBlock = (keyPrefix: string) => (
    <>
      {items.map((item, i) => (
        <span key={`${keyPrefix}-${i}`} className="mx-6 text-sm font-medium flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo-amg-capas.png"
            alt="AMG Capas"
            width={60}
            height={22}
            className="h-5 w-auto object-contain"
          />
          {item}
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full bg-[#111] text-white overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {renderBlock("a")}
        {renderBlock("b")}
        {renderBlock("c")}
        {renderBlock("d")}
      </div>
    </div>
  );
}
