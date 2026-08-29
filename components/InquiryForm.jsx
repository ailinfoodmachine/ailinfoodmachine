"use client";

import { Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { productCategories } from "@/lib/data";

export default function InquiryForm({ mode = "simple", productName = "" }) {
  const { lang, t } = useLanguage();
  const defaultMessage = productName
    ? lang === "zh"
      ? `我想咨询 ${productName}。`
      : `I am interested in ${productName}. `
    : "";

  return (
    <form
      action="https://formsubmit.co/814611970@qq.com"
      method="POST"
      className="grid gap-4"
    >
      <input type="hidden" name="_subject" value="New inquiry from ailinfoodmachine.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.ailinfoodmachine.com/thank-you" />
      <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
      {productName && <input type="hidden" name="product" value={productName} />}

      <div className="grid gap-4 md:grid-cols-2">
        <label>
          <span className="sr-only">{t.form.name}</span>
          <input className="field w-full" name="name" placeholder={t.form.name} autoComplete="name" required minLength={2} />
        </label>
        <label>
          <span className="sr-only">{t.form.email}</span>
          <input className="field w-full" name="email" type="email" placeholder={t.form.email} autoComplete="email" required />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {mode === "full" && (
          <label><span className="sr-only">{t.form.phone}</span><input className="field w-full" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={t.form.phone} required /></label>
        )}
        {mode === "full" && (
          <label><span className="sr-only">{t.form.company}</span><input className="field w-full" name="company" autoComplete="organization" placeholder={t.form.company} required /></label>
        )}
        <label><span className="sr-only">{t.form.country}</span><input className="field w-full" name="country" autoComplete="country-name" placeholder={t.form.country} required /></label>
        {mode === "full" && (
          <label><span className="sr-only">{t.form.category}</span><select className="field w-full" name="category" required defaultValue="">
            <option value="" disabled>
              {t.form.category}
            </option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {t.products.categories[category]}
              </option>
            ))}
          </select></label>
        )}
      </div>
      <label>
        <span className="sr-only">{t.form.message}</span>
        <textarea
          className="field min-h-36 w-full resize-y"
          name="message"
          placeholder={t.form.message}
          required
          minLength={10}
          defaultValue={defaultMessage}
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-signal px-6 text-sm font-black uppercase text-white transition hover:bg-orange-600 md:w-fit"
      >
        <Send size={18} />
        {t.form.submit}
      </button>
    </form>
  );
}
