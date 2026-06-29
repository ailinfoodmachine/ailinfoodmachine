"use client";

import Link from "next/link";
import { CheckCircle2, Download, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import catalog from "@/data/catalog.json";
import settings from "@/data/settings.json";

export default function ProductDetailClient({ product, children }) {
  const { lang, t } = useLanguage();
  const [gallery, form] = Array.isArray(children) ? children : [children, null];
  const name = lang === "zh" ? product.nameZh || product.name : product.name;
  const summary = lang === "zh" ? product.summaryZh || product.summary : product.summary;
  const servicePoints =
    lang === "zh"
      ? ["物料测试与刀具选型", "产量需求与车间布局沟通", "包装发货与远程技术支持"]
      : [
          "Material testing and cutter selection",
          "Output and workshop layout discussion",
          "Packing, shipping, and remote support"
        ];

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          {gallery}
          <div>
            <p className="mb-3 text-sm font-black uppercase text-signal">
              {t.products.categories[product.category]}
            </p>
            <h1 className="text-3xl font-black leading-tight text-graphite md:text-5xl">
              {name}
            </h1>
            <p className="mt-5 text-base leading-8 text-steel">{summary}</p>
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-black text-graphite">{t.detail.parameters}</h2>
              <div className="overflow-hidden border border-slate-200">
                {Object.entries(product.parameters).map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[0.9fr_1.1fr] border-b border-slate-200 last:border-b-0">
                    <div className="bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">{label}</div>
                    <div className="px-4 py-3 text-sm font-semibold text-graphite">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-black text-graphite">{t.detail.description}</h2>
              <p className="text-base leading-8 text-steel">{t.detail.descriptionText}</p>
            </div>
            <div className="mt-8 grid gap-3 border border-slate-200 bg-slate-50 p-5">
              {servicePoints.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <CheckCircle2 size={18} className="text-signal" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={settings.contact.whatsappUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-graphite px-5 text-sm font-black uppercase text-white transition hover:bg-slate-800"
              >
                <MessageCircle size={18} />
                {lang === "zh" ? "WhatsApp 咨询" : "WhatsApp"}
              </a>
              <Link
                href={catalog.download}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-graphite px-5 text-sm font-black uppercase text-graphite transition hover:bg-graphite hover:text-white"
              >
                <Download size={18} />
                {lang === "zh" ? "下载画册" : "Catalog PDF"}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="section-shell">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-2xl font-black text-graphite">{t.detail.quoteTitle}</h2>
            {form}
          </div>
        </div>
      </section>
    </>
  );
}
