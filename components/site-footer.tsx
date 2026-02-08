"use client";

import React from "react"

import { ChevronDown, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[#ddd] lg:border-0">
      {/* Mobile: clickable header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 lg:hidden"
      >
        <span className="text-sm font-bold uppercase tracking-wide text-[#333]">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#666] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {/* Desktop: always visible title */}
      <h3 className="hidden lg:block text-sm font-bold uppercase tracking-wide text-[#333] mb-4">{title}</h3>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${
          open ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        } lg:pb-0`}
      >
        {children}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#f5f5f5] text-[#555]">
      {/* Mobile: centered logo */}
      <div className="flex justify-center pt-8 pb-2 lg:hidden">
        <Image
          src="/images/logo-amg-capas.png"
          alt="AMG Capas"
          width={160}
          height={56}
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-6 lg:py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Column 1: About */}
          <div>
            {/* Desktop logo */}
            <div className="hidden lg:block mb-6">
              <Image
                src="/images/logo-amg-capas.png"
                alt="AMG Capas"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </div>

            <AccordionSection title="Sobre a AMG Capas">
              <div className="space-y-4 text-sm leading-relaxed text-[#555]">
                <p>
                  A AMG Capas nasceu para facilitar o dia a dia de quem cuida e valoriza o interior do carro.
                </p>
                <p>
                  Reunimos em um so lugar capas de banco automotivas pensadas para proteger, renovar e trazer mais
                  conforto para a rotina, seja no transito, no trabalho ou em viagens.
                </p>
                <p>
                  Aqui voce encontra capas desenvolvidas sob medida para cada modelo de carro, com foco em encaixe
                  preciso, acabamento de qualidade e praticidade no uso.
                </p>
                <p>
                  Tudo para manter os bancos protegidos e o interior sempre com aparencia de novo.
                </p>
              </div>
            </AccordionSection>
          </div>

          {/* Column 2: Contacts */}
          <div>
            <AccordionSection title="Nossos Contatos">
              <div className="text-sm leading-relaxed text-[#555] space-y-4">
                <div>
                  <p className="font-bold text-[#333] mb-2">Vendas e Informacoes:</p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-600">&#9742;</span> WhatsApp: (48) 98402-5725
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[#333] mb-2">Suporte ao Cliente:</p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-600">&#9742;</span> WhatsApp: (48) 98417-5864
                  </p>
                </div>
                <div className="border-t border-dashed border-[#ccc] pt-4">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-500">&#9993;</span> E-mail: suporte@amgcapas.com
                  </p>
                </div>
                <p>Acompanhamento de pedidos, trocas e devolucoes</p>
                <p>Atendimento de segunda a sabado, das 8h as 19h</p>
              </div>
            </AccordionSection>
          </div>

          {/* Column 3: Company Info */}
          <div>
            <AccordionSection title="Informacoes da Empresa">
              <ul className="space-y-3 text-sm text-[#555]">
                <li>
                  <a href="/contato" className="hover:text-[#111] transition">
                    Entrar em contato
                  </a>
                </li>
                <li>
                  <a href="/politica-de-privacidade" className="hover:text-[#111] transition">
                    Politica de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/politica-de-seguranca" className="hover:text-[#111] transition">
                    Politica de Seguranca
                  </a>
                </li>
                <li>
                  <a href="/politica-de-troca-e-devolucao" className="hover:text-[#111] transition">
                    Politica de Troca e Devolucao
                  </a>
                </li>
                <li>
                  <a href="/termos-de-uso" className="hover:text-[#111] transition">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </AccordionSection>
          </div>

          {/* Column 4: VIP Newsletter */}
          <div>
            <AccordionSection title="Lista de Clientes VIP" defaultOpen>
              <div className="text-sm text-[#555]">
                <p className="mb-4 leading-relaxed">
                  Cadastre seu e-mail para receber todas as ofertas e novidades em primeira mao.
                </p>
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full rounded-full border border-[#ccc] bg-white px-5 py-3 text-sm text-[#333] outline-none focus:border-[#999] transition"
                  />
                  <button
                    type="button"
                    className="w-full rounded-full bg-[#333] py-3 text-sm font-bold text-white hover:bg-[#111] transition"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>
      </div>

      {/* Social + Payments */}
      <div className="border-t border-[#ddd]">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col items-center gap-6">
          {/* Social */}
          <div className="text-center">
            <p className="text-sm text-[#777] mb-3">Siga-nos</p>
            <div className="flex items-center gap-3 justify-center">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#999] text-white hover:bg-[#666] transition"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#999] text-white hover:bg-[#666] transition"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Payments */}
          <div className="text-center">
            <p className="text-sm text-[#777] mb-3">Nos aceitamos</p>
            <div className="flex items-center gap-2 justify-center">
              <img src="/images/payment-1.svg" alt="Visa" className="h-7" />
              <img src="/images/payment-2.svg" alt="Elo" className="h-7" />
              <img src="/images/payment-3.svg" alt="Mastercard" className="h-7" />
              <img src="/images/payment-4.svg" alt="Amex" className="h-7" />
              <img src="/images/payment-5.svg" alt="Pix" className="h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#ddd] bg-[#eee]">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center">
          <p className="text-xs text-[#888]">
            &copy; 2019 AMG Capas - CNPJ: 71.477.367/0001-49 - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
