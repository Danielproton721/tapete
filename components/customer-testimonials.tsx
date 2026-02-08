"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Diogo Zagalo",
    stars: 5,
    image: "/images/review-1.jpg",
    text: "Comprei achando que era so estetica mas o material e grosso encaixou certinho e o banco parece outro carro",
  },
  {
    name: "Li Veiga",
    stars: 5,
    image: "/images/review-2.jpg",
    text: "Logo que instalei deu pra ver que nao e aquelas capas finas nao o acabamento e bonito e bem firme",
  },
  {
    name: "Salvador Conceicao",
    stars: 5,
    image: "/images/review-3.jpg",
    text: "Ja usei outras capas antes e essa foi a primeira que nao fica sambando no banco ficou bem presa",
  },
  {
    name: "Gui Aguiar",
    stars: 5,
    image: "/images/review-4.jpg",
    text: "O visual muda demais o interior do carro parece carro novo e ainda protege bem o banco original",
  },
  {
    name: "Malaquias Furtado",
    stars: 4,
    image: "/images/review-5.jpg",
    text: "No comeco fiquei na duvida na causa do preco mas quando chegou vi que a qualidade justifica",
  },
  {
    name: "Carmine Souza",
    stars: 5,
    image: "/images/review-6.jpg",
    text: "Uso todo dia pro trabalho e da pra sentir que e confortavel mesmo nao esquenta e nao escorrega",
  },
  {
    name: "Eduardo Xavier",
    stars: 5,
    image: "/images/review-7.jpg",
    text: "Tenho filho pequeno e cachorro e resolveu meu problema facil limpa rapido e nao marca",
  },
  {
    name: "Lourival Garcia",
    stars: 5,
    image: "/images/review-8.jpg",
    text: "O encaixe e melhor do que eu imaginava nao atrapalha air bag nem regulagem do banco",
  },
  {
    name: "Mimi Silva",
    stars: 5,
    image: "/images/review-9.jpg",
    text: "Da outra cara pro carro fica mais bonito e ainda passa sensacao de carro mais caro",
  },
  {
    name: "Talita Cunha",
    stars: 5,
    image: "/images/review-10.jpg",
    text: "Achei que ia dar trabalho pra instalar mas foi tranquilo em poucos minutos ja tava pronto",
  },
  {
    name: "Beatriz Fogaca",
    stars: 5,
    image: "/images/review-11.jpg",
    text: "Ja derramei agua e nao passou nada pro banco isso pra mim ja valeu a compra",
  },
  {
    name: "Vera Guedes",
    stars: 5,
    image: "/images/review-12.jpg",
    text: "Fica confortavel ate em viagem longa nao fica escorregando nem dobrando",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#E8B524]" : "text-[#ddd]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function CustomerTestimonials() {
  // Split into columns for masonry layout
  const col1 = [testimonials[0], testimonials[4], testimonials[8]];
  const col2 = [testimonials[1], testimonials[5], testimonials[9]];
  const col3 = [testimonials[2], testimonials[6], testimonials[10]];
  const col4 = [testimonials[3], testimonials[7], testimonials[11]];

  const renderCard = (t: (typeof testimonials)[0], idx: number) => (
    <div
      key={idx}
      className="bg-white rounded-xl border border-[#eee] overflow-hidden break-inside-avoid mb-4"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-[#f5f5f5]">
        <Image
          src={t.image || "/placeholder.svg"}
          alt={`Avaliacao de ${t.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      {/* Content */}
      <div className="p-3">
        <StarRating count={t.stars} />
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-sm font-semibold text-[#222]">{t.name}</span>
          <BadgeCheck className="w-4 h-4 text-[#1a8cff] fill-[#1a8cff] stroke-white" />
        </div>
        <p className="text-xs text-[#555] leading-relaxed mt-1.5">{t.text}</p>
      </div>
    </div>
  );

  return (
    <section className="mt-12 pt-8 border-t border-[#eee]">
      <h2 className="text-xl font-bold text-[#222] text-center mb-8">
        O que nossos clientes dizem
      </h2>

      {/* Desktop: 4 columns */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        <div className="flex flex-col">{col1.map((t, i) => renderCard(t, i))}</div>
        <div className="flex flex-col">{col2.map((t, i) => renderCard(t, i))}</div>
        <div className="flex flex-col">{col3.map((t, i) => renderCard(t, i))}</div>
        <div className="flex flex-col">{col4.map((t, i) => renderCard(t, i))}</div>
      </div>

      {/* Tablet: 3 columns */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
        {[
          [...col1, testimonials[3]],
          [...col2, testimonials[7]],
          [...col3, testimonials[11]],
        ].map((col, ci) => (
          <div key={ci} className="flex flex-col">
            {col.map((t, i) => renderCard(t, i))}
          </div>
        ))}
      </div>

      {/* Mobile: 2 columns masonry */}
      <div className="grid md:hidden grid-cols-2 gap-3">
        <div className="flex flex-col">
          {[testimonials[0], testimonials[2], testimonials[4], testimonials[6], testimonials[8], testimonials[10]].map(
            (t, i) => renderCard(t, i),
          )}
        </div>
        <div className="flex flex-col">
          {[testimonials[1], testimonials[3], testimonials[5], testimonials[7], testimonials[9], testimonials[11]].map(
            (t, i) => renderCard(t, i),
          )}
        </div>
      </div>
    </section>
  );
}
