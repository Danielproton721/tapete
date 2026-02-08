"use client";

import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";

const RATING_DATA = {
  average: 4.8,
  total: 383,
  breakdown: [
    { stars: 5, count: 346 },
    { stars: 4, count: 12 },
    { stars: 3, count: 18 },
    { stars: 2, count: 2 },
    { stars: 1, count: 5 },
  ],
};

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= rating
              ? "fill-[#E8B524] text-[#E8B524]"
              : star - 0.5 <= rating
                ? "fill-[#E8B524]/50 text-[#E8B524]"
                : "fill-[#ddd] text-[#ddd]"
          }
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("Todas");

  const maxCount = Math.max(...RATING_DATA.breakdown.map((b) => b.count));

  const filterOptions = ["Todas", "5 estrelas", "4 estrelas", "3 estrelas", "2 estrelas", "1 estrela"];

  return (
    <section className="mt-10 border-t border-[#eee] pt-8">
      <h2 className="text-center text-xl font-bold text-[#222] mb-8">
        Avaliacoes
      </h2>

      {/* Rating Summary */}
      <div className="max-w-md mx-auto text-center mb-8">
        {/* Big number */}
        <div className="text-6xl font-bold text-[#333] mb-2">
          {RATING_DATA.average}
        </div>

        {/* Stars */}
        <div className="flex justify-center mb-2">
          <StarRating rating={RATING_DATA.average} size={24} />
        </div>

        {/* Total reviews */}
        <p className="text-[#666] text-sm mb-6">
          {RATING_DATA.total} avaliacoes
        </p>

        {/* Breakdown bars */}
        <div className="space-y-2.5 mb-6">
          {RATING_DATA.breakdown.map((item) => {
            const percentage = maxCount > 0 ? (item.count / maxCount) * 100 : 0;
            return (
              <div key={item.stars} className="flex items-center gap-2.5 text-sm">
                <span className="w-4 text-right text-[#555] font-medium">{item.stars}</span>
                <Star size={14} className="fill-[#E8B524] text-[#E8B524] shrink-0" />
                <div className="flex-1 h-3 bg-[#e8e8e8] rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-[#E8B524] rounded-sm transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right text-[#555]">{item.count}</span>
              </div>
            );
          })}
        </div>

        {/* Write Review Button */}
        <button
          type="button"
          className="bg-[#333] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#222] transition mb-4 w-full max-w-[280px]"
        >
          Escrever uma avaliacao
        </button>

        {/* Filter Dropdown */}
        <div className="relative mt-3 max-w-[180px] mx-auto">
          <button
            type="button"
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center justify-between w-full border border-[#ddd] rounded-md px-4 py-2.5 text-sm text-[#555] bg-white hover:border-[#bbb] transition"
          >
            <span>{filter}</span>
            <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
          </button>
          {filterOpen && (
            <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-[#ddd] rounded-md shadow-lg overflow-hidden">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setFilter(opt);
                    setFilterOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-[#f5f5f5] transition ${
                    filter === opt ? "bg-[#f0f0f0] font-medium text-[#222]" : "text-[#555]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
