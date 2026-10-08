"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import catalog from "@/data/catalog.json";
import { useLanguage } from "@/components/LanguageProvider";

export default function CatalogPage() {
  const { lang } = useLanguage();

  return (
    <>
      <PageHero
        title="Product Catalog"
        subtitle="The following English pages provide a quick review of machine series and catalog parameters. Confirm the final configuration in your quotation."
      />
      <section className="py-12 md:py-16">
        <div className="section-shell">
          <div className="mb-8 flex justify-end">
            <a
              href={catalog.download}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-signal px-5 text-sm font-black uppercase text-white transition hover:bg-orange-600"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
          <div className="grid gap-6">
            {catalog.pages.map((page, index) => {
              const pageTitle = page.title;
              return (
                <article key={page.image} className="border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h2 className="text-base font-black text-graphite">{pageTitle}</h2>
                    <span className="text-sm font-bold text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative aspect-[1207/824] overflow-hidden bg-slate-100">
                    <Image
                      src={page.image}
                      alt={pageTitle}
                      width={1207}
                      height={825}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
