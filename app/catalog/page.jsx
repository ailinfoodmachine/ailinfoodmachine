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
        title={lang === "zh" ? "产品画册" : "Product Catalog"}
        subtitle={
          lang === "zh"
            ? "以下内容来自艾霖梓瑞产品手册，可用于快速了解设备系列和基础参数。"
            : "The following pages are from the Allen Green product manual for a quick review of machine series and basic parameters."
        }
      />
      <section className="py-12 md:py-16">
        <div className="section-shell">
          <div className="mb-8 flex justify-end">
            <a
              href={catalog.download}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-signal px-5 text-sm font-black uppercase text-white transition hover:bg-orange-600"
            >
              <Download size={18} />
              {lang === "zh" ? "下载完整 PDF" : "Download PDF"}
            </a>
          </div>
          <div className="grid gap-6">
            {catalog.pages.map((page, index) => {
              const pageTitle = lang === "zh" ? page.titleZh : page.title;
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
