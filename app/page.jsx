"use client";

import Image from "next/image";
import { Award, Factory, Globe2, Headphones, ShieldCheck } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CatalogPreview from "@/components/CatalogPreview";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { getFeaturedProducts } from "@/lib/data";

const icons = [ShieldCheck, Globe2, Award, Headphones];
const stats = [
  { value: "200+", label: "Machines", labelZh: "设备储备" },
  { value: "5000m2", label: "Factory Area", labelZh: "厂区面积" },
  { value: "50+", label: "Technicians", labelZh: "技术人员" },
  { value: "4", label: "Product Series", labelZh: "产品系列" }
];
const customerTypes = [
  { en: "Central Kitchen", zh: "中央厨房" },
  { en: "Food Factory", zh: "食品工厂" },
  { en: "Catering Chain", zh: "餐饮连锁" },
  { en: "Vegetable Processor", zh: "净菜加工" },
  { en: "Meat Workshop", zh: "肉类加工" },
  { en: "Dough Products", zh: "面食工厂" }
];

export default function HomePage() {
  const { lang, t } = useLanguage();
  const products = getFeaturedProducts();

  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-graphite text-white">
        <Image
          src="/images/catalog/page-02.png"
          alt="Allen Green food processing machinery catalog"
          width={1207}
          height={825}
          priority
          className="absolute inset-0 h-full w-full object-cover object-right opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#101418_0%,rgba(16,20,24,0.92)_42%,rgba(16,20,24,0.58)_100%)]" />
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-80px)] items-center py-20">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex border border-white/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-normal text-white">
              {lang === "zh" ? "艾霖梓瑞食品加工机械" : "Allen Green Food Machinery"}
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-xl">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/products">{t.home.viewProducts}</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">{t.home.getQuote}</ButtonLink>
            </div>
            <div className="mt-12 grid max-w-4xl grid-cols-2 border border-white/15 bg-white/10 backdrop-blur md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="border-b border-r border-white/15 p-5 last:border-r-0 md:border-b-0">
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-xs font-bold uppercase text-slate-300">
                    {lang === "zh" ? item.labelZh : item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-shell">
          <h2 className="text-3xl font-black text-graphite md:text-4xl">{t.home.advantagesTitle}</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.advantages.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.title} className="border border-slate-200 bg-white p-6">
                  <div className="mb-5 grid h-12 w-12 place-items-center bg-orange-50 text-signal">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-graphite">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="section-shell">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-3xl font-black text-graphite md:text-4xl">{t.home.productsTitle}</h2>
            <ButtonLink href="/products">{t.home.viewProducts}</ButtonLink>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <CatalogPreview />

      <section className="py-16 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-signal">
              <Factory size={18} /> {lang === "zh" ? "生产与服务能力" : "Manufacturing Capability"}
            </p>
            <h2 className="text-3xl font-black text-graphite md:text-4xl">{t.home.strengthTitle}</h2>
            <p className="mt-5 text-base leading-8 text-steel">{t.home.strengthText}</p>
          </div>
          <Image
            src="/images/factory/workshop.svg"
            alt="Factory workshop"
            width={1200}
            height={800}
            className="w-full border border-slate-200 object-cover"
          />
        </div>
      </section>

      <section className="border-t border-slate-200 py-14">
        <div className="section-shell">
          <h2 className="mb-7 text-center text-2xl font-black text-graphite">{t.home.logosTitle}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {customerTypes.map((item) => (
              <div
                key={item.en}
                className="grid h-20 place-items-center border border-slate-200 bg-slate-50 px-3 text-center text-sm font-black uppercase text-slate-600"
              >
                {lang === "zh" ? item.zh : item.en}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
