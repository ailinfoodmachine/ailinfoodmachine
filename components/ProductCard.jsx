"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductCard({ product, compact = false }) {
  const { lang, t } = useLanguage();
  const name = lang === "zh" ? product.nameZh || product.name : product.name;
  const summary = lang === "zh" ? product.summaryZh || product.summary : product.summary;
  const coreParam = lang === "zh" ? product.coreParamZh || product.coreParam : product.coreParam;

  return (
    <article className="group border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={name}
          width={900}
          height={650}
          className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="mb-2 text-xs font-black uppercase text-signal">
          {t.products.categories[product.category]}
        </p>
        <h3 className="min-h-14 text-lg font-black leading-snug text-graphite">
          {name}
        </h3>
        {!compact && <p className="mt-3 text-sm leading-6 text-steel">{summary}</p>}
        <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
          <span className="text-sm font-bold text-slate-600">{coreParam}</span>
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-2 text-sm font-black text-graphite transition hover:text-signal"
          >
            {compact ? t.products.viewDetails : t.products.learnMore}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
