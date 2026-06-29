"use client";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-graphite py-16 text-white md:py-20">
      <div className="section-shell">
        <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
