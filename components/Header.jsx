"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { languages, useLanguage } from "@/components/LanguageProvider";
import settings from "@/data/settings.json";

const navItems = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/catalog", key: "catalog" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" }
];

function LanguageSelect({ lang, setLang, className }) {
  return (
    <select
      aria-label="Language"
      className={className}
      value={lang}
      onChange={(event) => setLang(event.target.value)}
    >
      {languages.map((item) => (
        <option key={item.code} value={item.code}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center bg-graphite text-sm font-black text-white">
            AG
          </span>
          <span className="text-lg font-black tracking-normal text-graphite">
            {settings.brand.logoText}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase text-slate-700 transition hover:text-signal"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelect
            lang={lang}
            setLang={setLang}
            className="border border-slate-300 bg-white px-3 py-2 text-sm font-semibold"
          />
          <Link
            href="/contact"
            className="bg-signal px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-orange-600"
          >
            {t.nav.quote}
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-slate-300 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell grid gap-3 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-bold uppercase text-slate-700"
                onClick={() => setOpen(false)}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <LanguageSelect
                lang={lang}
                setLang={setLang}
                className="min-h-11 flex-1 border border-slate-300 bg-white px-3 text-sm font-semibold"
              />
              <Link
                href="/contact"
                className="grid min-h-11 flex-1 place-items-center bg-signal px-4 text-sm font-black uppercase text-white"
                onClick={() => setOpen(false)}
              >
                {t.nav.quote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
