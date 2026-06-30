"use client";

import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import settings from "@/data/settings.json";

export default function ThankYouPage() {
  const { lang } = useLanguage();

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl border border-slate-200 bg-white p-8 shadow-industrial md:p-12">
          <div className="mb-6 grid h-16 w-16 place-items-center bg-green-50 text-green-700">
            <CheckCircle2 size={34} />
          </div>
          <p className="mb-3 text-sm font-black uppercase text-signal">
            {lang === "zh" ? "询盘已提交" : "Inquiry Submitted"}
          </p>
          <h1 className="text-3xl font-black text-graphite md:text-5xl">
            {lang === "zh" ? "感谢您的询盘" : "Thank You For Your Inquiry"}
          </h1>
          <p className="mt-5 text-base leading-8 text-steel">
            {lang === "zh"
              ? "我们已经收到您的需求信息，会尽快通过邮箱或 WhatsApp 与您联系。请保持联系方式畅通。"
              : "We have received your request and will contact you by email or WhatsApp as soon as possible."}
          </p>
          <div className="mt-8 grid gap-3 text-sm text-slate-700">
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-signal" />
              {settings.contact.email}
            </p>
            <p className="flex items-center gap-3">
              <MessageCircle size={18} className="text-signal" />
              {settings.contact.whatsapp}
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/products">
              {lang === "zh" ? "继续查看产品" : "Continue Browsing Products"}
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              {lang === "zh" ? "返回首页" : "Back To Home"}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
