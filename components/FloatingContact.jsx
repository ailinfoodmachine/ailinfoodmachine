"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import settings from "@/data/settings.json";
import { useLanguage } from "@/components/LanguageProvider";

export default function FloatingContact() {
  const { lang, t } = useLanguage();

  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 overflow-hidden border border-slate-200 bg-white shadow-industrial md:left-auto md:right-5 md:w-auto md:translate-x-0">
      <a
        href={settings.contact.whatsappUrl}
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-graphite px-4 text-xs font-black uppercase text-white transition hover:bg-slate-800"
      >
        <MessageCircle size={17} />
        {lang === "zh" ? "WhatsApp" : "WhatsApp"}
      </a>
      <Link
        href="/contact"
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-signal px-4 text-xs font-black uppercase text-white transition hover:bg-orange-600"
      >
        <Mail size={17} />
        {t.nav.quote}
      </Link>
    </div>
  );
}
