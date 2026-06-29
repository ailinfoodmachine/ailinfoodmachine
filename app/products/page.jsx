"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { getProducts, productCategories } from "@/lib/data";

export default function ProductsPage() {
  const { t } = useLanguage();
  const [category, setCategory] = useState("all");
  const products = getProducts();
  const filtered = useMemo(
    () => (category === "all" ? products : products.filter((product) => product.category === category)),
    [category, products]
  );

  return (
    <>
      <PageHero title={t.products.title} subtitle={t.products.subtitle} />
      <section className="py-14 md:py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit border border-slate-200 bg-white p-4 lg:sticky lg:top-24">
            <div className="mb-4 border-b border-slate-200 pb-4">
              <p className="text-xs font-black uppercase text-signal">
                {t.products.directory || "Product Directory"}
              </p>
              <p className="mt-2 text-sm leading-6 text-steel">
                {t.products.available.replace("{count}", filtered.length)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`mb-2 w-full px-4 py-3 text-left text-sm font-black ${
                category === "all" ? "bg-graphite text-white" : "bg-slate-50 text-graphite"
              }`}
            >
              {t.products.all}
            </button>
            <div className="grid gap-2">
              {productCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`w-full px-4 py-3 text-left text-sm font-black ${
                    category === item ? "bg-graphite text-white" : "bg-slate-50 text-graphite"
                  }`}
                >
                  {t.products.categories[item]}
                </button>
              ))}
            </div>
          </aside>
          <div>
            <div className="mb-6 grid gap-4 border border-slate-200 bg-slate-50 p-5 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-black text-graphite">{products.length}</p>
                <p className="text-xs font-bold uppercase text-steel">{t.products.models}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-graphite">4</p>
                <p className="text-xs font-bold uppercase text-steel">{t.products.series}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-graphite">PDF</p>
                <p className="text-xs font-bold uppercase text-steel">{t.products.catalogReady}</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => <ProductCard key={product.id} product={product} compact />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
