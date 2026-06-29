"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CertificateGallery from "@/components/CertificateGallery";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

const timeline = [
  { year: "2009", en: "Started cookware forming machine development.", zh: "开始研发炊具成形设备。" },
  { year: "2013", en: "Expanded hydraulic press and spinning machine production.", zh: "扩展液压拉伸机与旋压机生产。" },
  { year: "2018", en: "Delivered integrated polishing and punching lines overseas.", zh: "向海外交付抛光与冲压成套产线。" },
  { year: "2026", en: "Focused on automated cookware production solutions.", zh: "持续专注炊具自动化生产解决方案。" }
];

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const countries = t.about.countries.split(/[\u3001,]/).map((item) => item.trim()).filter(Boolean);

  return (
    <>
      <PageHero title={t.about.title} subtitle={t.about.intro} />
      <section className="py-14 md:py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image
            src="/images/factory/workshop.svg"
            alt="Cookware machinery factory workshop"
            width={1200}
            height={800}
            className="w-full border border-slate-200 object-cover"
          />
          <div>
            <h2 className="text-3xl font-black text-graphite md:text-4xl">{t.about.timelineTitle}</h2>
            <div className="mt-8 grid gap-5">
              {timeline.map((item) => (
                <div key={item.year} className="grid grid-cols-[72px_1fr] gap-4">
                  <div className="text-xl font-black text-signal">{item.year}</div>
                  <div className="border-l-2 border-slate-200 pb-5 pl-5">
                    <p className="text-base font-semibold leading-7 text-graphite">
                      {lang === "zh" ? item.zh : item.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-graphite md:text-4xl">{t.about.exportTitle}</h2>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {countries.map((country) => (
                <span key={country} className="flex items-center gap-2 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                  <CheckCircle2 size={16} className="text-signal" />
                  {country}
                </span>
              ))}
            </div>
          </div>
          <Image
            src="/images/factory/world-map.svg"
            alt="Export country distribution"
            width={1200}
            height={620}
            className="w-full border border-slate-200 object-cover"
          />
        </div>
      </section>

      <CertificateGallery />
    </>
  );
}
