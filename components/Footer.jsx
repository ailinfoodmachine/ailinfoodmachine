"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import settings from "@/data/settings.json";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-graphite text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-signal text-sm font-black">
              AG
            </span>
            <span className="text-lg font-black">{settings.brand.logoText}</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-300">{t.footer.brief}</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase">{t.footer.quickLinks}</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <Link href="/">{t.nav.home}</Link>
            <Link href="/products">{t.nav.products}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase">{t.footer.contact}</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <span className="flex gap-3"><Mail size={18} />{settings.contact.email}</span>
            <span className="flex gap-3"><Phone size={18} />{settings.contact.whatsapp}</span>
            <span className="flex gap-3"><MapPin size={18} />{settings.contact.address}</span>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase">{lang === "zh" ? "微信" : "WeChat"}</h3>
          <Image
            src={settings.contact.wechatQr}
            alt={lang === "zh" ? "微信二维码" : "WeChat QR code"}
            width={900}
            height={1100}
            className="mb-5 h-auto w-32 border border-slate-600 bg-white object-contain p-1"
          />
          <h3 className="mb-4 text-sm font-black uppercase">{lang === "zh" ? "社交媒体" : "Social"}</h3>
          <div className="flex gap-3">
            <a aria-label="LinkedIn" className="grid h-10 w-10 place-items-center border border-slate-600" href={settings.social.linkedin}><Linkedin size={18} /></a>
            <a aria-label="YouTube" className="grid h-10 w-10 place-items-center border border-slate-600" href={settings.social.youtube}><Youtube size={18} /></a>
            <a aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-slate-600" href={settings.social.facebook}><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 py-5 text-center text-xs text-slate-400">
        (c) 2026 {lang === "zh" ? settings.brand.nameZh : settings.brand.name}. {lang === "zh" ? "版权所有。" : "All rights reserved."}
      </div>
    </footer>
  );
}
