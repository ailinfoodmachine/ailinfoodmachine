"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import catalog from "@/data/catalog.json";
import { useLanguage } from "@/components/LanguageProvider";

export default function CatalogPreview({ limit = 3 }) {
  const { lang } = useLanguage();
  const pages = catalog.pages.slice(1, 1 + limit);

  const title = "Product Catalog";
  const subtitle = "English catalog pages are available for quick review, with the full PDF ready to download.";
  const eyebrow = "Ailin Machinery Catalog";

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-shell">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-signal">
              <FileText size={18} /> {eyebrow}
            </p>
            <h2 className="text-3xl font-black text-graphite md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-steel">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalog"
              className="inline-flex min-h-12 items-center justify-center border border-graphite px-5 text-sm font-black uppercase text-graphite transition hover:bg-graphite hover:text-white"
            >
              View Catalog
            </Link>
            <a
              href={catalog.download}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-signal px-5 text-sm font-black uppercase text-white transition hover:bg-orange-600"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {pages.map((page) => {
            const pageTitle = page.title;
            return (
              <Link key={page.image} href="/catalog" className="group block border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:shadow-industrial">
                <div className="relative aspect-[1207/824] overflow-hidden bg-white">
                  <Image
                    src={page.image}
                    alt={pageTitle}
                    width={1207}
                    height={825}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 text-sm font-bold text-slate-700">{pageTitle}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
