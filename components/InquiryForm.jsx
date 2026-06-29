"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { productCategories } from "@/lib/data";

export default function InquiryForm({ mode = "simple", productName = "" }) {
  const { lang, t } = useLanguage();
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log("Inquiry submitted:", { productName, ...payload });
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="field" name="name" placeholder={t.form.name} required minLength={2} />
        <input className="field" name="email" type="email" placeholder={t.form.email} required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {mode === "full" && (
          <input className="field" name="phone" placeholder={t.form.phone} required />
        )}
        {mode === "full" && (
          <input className="field" name="company" placeholder={t.form.company} required />
        )}
        <input className="field" name="country" placeholder={t.form.country} required />
        {mode === "full" && (
          <select className="field" name="category" required defaultValue="">
            <option value="" disabled>{t.form.category}</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {t.products.categories[category]}
              </option>
            ))}
          </select>
        )}
      </div>
      <textarea
        className="field min-h-36 resize-y"
        name="message"
        placeholder={t.form.message}
        required
        minLength={10}
        defaultValue={productName ? (lang === "zh" ? `我想咨询 ${productName}。` : `I am interested in ${productName}. `) : ""}
      />
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-signal px-6 text-sm font-black uppercase text-white transition hover:bg-orange-600 md:w-fit"
      >
        <Send size={18} />
        {t.form.submit}
      </button>
      {sent && <p className="text-sm font-semibold text-green-700">{t.form.success}</p>}
    </form>
  );
}
