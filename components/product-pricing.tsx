"use client";

import { CreditCard } from "lucide-react";

export function ProductPricing() {
  return (
    <div className="mb-5">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-sm text-[#999]">Preco:</span>
      </div>
      <div className="flex items-center gap-3 mb-1">
        <span className="text-base text-[#999] line-through">R$ 500,00</span>
        <span className="rounded bg-[#e74c3c] px-2 py-0.5 text-xs font-bold text-white">
          41%
        </span>
      </div>
      <p className="text-3xl font-bold text-[#111]">R$ 293,10</p>
      <div className="flex items-center gap-1.5 mt-1.5 text-sm text-[#555]">
        <CreditCard className="h-4 w-4" />
        <span>
          Em ate 12x de <strong>R$ 34,58</strong>
        </span>
      </div>
      <p className="text-sm text-[#2EBFAC] font-medium mt-1">
        Economia de R$ 206,90
      </p>
    </div>
  );
}
