"use client";

import Image from "next/image";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { useLanguage } from "@/components/LanguageProvider";
import settings from "@/data/settings.json";

const contactCards = [
  { icon: Mail, label: "Email", labelZh: "邮箱", valueKey: "email" },
  { icon: Phone, label: "Phone", labelZh: "电话", valueKey: "phone" },
  { icon: MessageCircle, label: "WhatsApp", labelZh: "WhatsApp", valueKey: "whatsapp" }
];

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const address = lang === "zh" ? settings.contact.addressZh : settings.contact.address;

  return (
    <>
      <section className="relative overflow-hidden bg-graphite text-white">
        <Image
          src="/images/catalog/page-02.png"
          alt={lang === "zh" ? "艾霖梓瑞产品画册" : "Allen Green machinery catalog"}
          width={1207}
          height={825}
          priority
          className="absolute inset-0 h-full w-full object-cover object-right opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#101418_0%,rgba(16,20,24,0.94)_50%,rgba(16,20,24,0.72)_100%)]" />
        <div className="section-shell relative z-10 grid min-h-[460px] items-center gap-10 py-20 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="mb-5 inline-flex border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-normal text-white">
              {lang === "zh" ? "全球询盘中心" : "Global Inquiry Center"}
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              {t.contact.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              {t.contact.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={settings.contact.whatsappUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-signal px-6 text-sm font-black uppercase text-white transition hover:bg-orange-600"
              >
                <MessageCircle size={18} />
                {lang === "zh" ? "WhatsApp 咨询" : "WhatsApp"}
              </a>
              <a
                href={`mailto:${settings.contact.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/70 bg-white/10 px-6 text-sm font-black uppercase text-white transition hover:bg-white hover:text-graphite"
              >
                <Send size={18} />
                {lang === "zh" ? "发送邮件" : "Email Us"}
              </a>
            </div>
          </div>
          <div className="border border-white/15 bg-white/10 p-6 backdrop-blur">
            <div className="grid grid-cols-[96px_1fr] gap-5">
              <Image
                src={settings.contact.wechatQr}
                alt={lang === "zh" ? "微信二维码" : "WeChat QR code"}
                width={900}
                height={1100}
                className="h-28 w-24 bg-white object-cover"
              />
              <div>
                <p className="text-sm font-black uppercase text-slate-200">
                  {lang === "zh" ? "微信联系" : "WeChat"}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {lang === "zh"
                    ? "扫码添加微信，发送物料、产量和切割效果要求。"
                    : "Scan to add WeChat and send material, output, and cutting requirements."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="section-shell grid gap-4 md:grid-cols-3">
          {contactCards.map((item) => {
            const Icon = item.icon;
            const value = settings.contact[item.valueKey];
            return (
              <div key={item.label} className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 grid h-12 w-12 place-items-center bg-orange-50 text-signal">
                  <Icon size={22} />
                </div>
                <p className="text-xs font-black uppercase text-steel">
                  {lang === "zh" ? item.labelZh : item.label}
                </p>
                <p className="mt-2 break-words text-lg font-black text-graphite">{value}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="grid gap-6">
            <div className="border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-graphite">{t.contact.infoTitle}</h2>
              <div className="mt-6 grid gap-5 text-sm text-slate-700">
                <p className="flex gap-3 leading-7">
                  <MapPin className="mt-1 shrink-0 text-signal" size={20} />
                  {address}
                </p>
                <p className="flex gap-3">
                  <Clock3 className="shrink-0 text-signal" size={20} />
                  {lang === "zh" ? "海外询盘 24 小时在线响应" : "24h online response for overseas inquiries"}
                </p>
                <p className="flex gap-3">
                  <ShieldCheck className="shrink-0 text-signal" size={20} />
                  {lang === "zh"
                    ? "支持画册、资质文件和设备选型沟通"
                    : "Catalog, certificates, and model selection support"}
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <div className="aspect-[5/3]">
                <iframe
                  title="Google Maps"
                  src={settings.contact.mapEmbedUrl}
                  loading="lazy"
                  className="h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </aside>

          <div className="border border-slate-200 bg-white p-6 shadow-industrial md:p-8">
            <div className="mb-7 border-b border-slate-200 pb-6">
              <p className="mb-3 text-sm font-black uppercase text-signal">
                {lang === "zh" ? "项目询盘" : "Project Inquiry"}
              </p>
              <h2 className="text-3xl font-black text-graphite">{t.contact.formTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-steel">
                {lang === "zh"
                  ? "请尽量填写物料名称、每小时产量、切割规格和目标市场，我们会更快给出选型建议。"
                  : "Please include material type, hourly output, cutting size, and target market so we can recommend suitable models faster."}
              </p>
            </div>
            <InquiryForm mode="full" />
          </div>
        </div>
      </section>
    </>
  );
}
