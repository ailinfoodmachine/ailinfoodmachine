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
      {productName && <input type="hidden" name="product" value={productName} />}

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
            <option value="" disabled>
              {t.form.category}
            </option>
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
        defaultValue={defaultMessage}
      />
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
