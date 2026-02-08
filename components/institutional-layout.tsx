import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function InstitutionalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AnnouncementBar />
      <SiteHeader />

      <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-8 lg:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#333] transition mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a loja
        </Link>

        <h1 className="text-2xl lg:text-3xl font-bold text-[#111] mb-8">{title}</h1>

        <div className="prose prose-sm lg:prose-base max-w-none text-[#444] leading-relaxed space-y-6">
          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
