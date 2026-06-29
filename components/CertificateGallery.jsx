"use client";

import Image from "next/image";
import { Download, ShieldCheck } from "lucide-react";
import certificates from "@/data/certificates.json";
import { useLanguage } from "@/components/LanguageProvider";

export default function CertificateGallery() {
  const { lang } = useLanguage();
  const title = lang === "zh" ? "资质证书" : "Qualifications";
  const subtitle =
    lang === "zh"
      ? "根据现有资质文件整理，包含营业执照、商标、海关备案、信用证书和 CE 认证等。"
      : "Organized from the current qualification file, including license, trademark, customs filing, credit certificates, and CE certification.";

  return (
    <section className="py-14 md:py-16">
      <div className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-signal">
              <ShieldCheck size={18} /> {lang === "zh" ? "真实资质资料" : "Verified Materials"}
            </p>
            <h2 className="text-3xl font-black text-graphite md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-steel">{subtitle}</p>
          </div>
          <a
            href={certificates.download}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-graphite px-5 text-sm font-black uppercase text-white transition hover:bg-slate-800"
          >
            <Download size={18} />
            {lang === "zh" ? "下载 PDF" : "PDF"}
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.items.slice(2).map((item) => (
            <article key={item.image} className="border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[595/842] overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={595}
                  height={842}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-sm font-black text-graphite">{lang === "zh" ? item.titleZh || item.title : item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
