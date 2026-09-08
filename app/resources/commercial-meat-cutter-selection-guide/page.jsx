import Link from "next/link";
import settings from "@/data/settings.json";

const slug = "/resources/commercial-meat-cutter-selection-guide";
const url = `${settings.siteUrl}${slug}`;
const title = "Commercial Meat Cutter Selection Guide for Food Factories";
const description = "Compare commercial meat cutters by raw material, cut format, feed preparation, useful output, hygiene, safety, utilities and acceptance testing.";
const faqs = [
  ["What should a meat cutter RFQ include?", "State the meat type and condition, incoming dimensions and temperature, required cut format, hourly and shift demand, voltage, cleaning method, destination and supply scope."],
  ["Why is a sample cutting trial important?", "Texture, fat, connective tissue, temperature and feed orientation can affect cut quality and output. A representative trial gives both parties a clearer acceptance basis."],
  ["How should buyers compare capacity?", "Use the same raw material, feed preparation, target cut and operating period, then include loading, adjustment, inspection and cleaning time rather than comparing peak figures alone."]
];

export const metadata = { title, description, alternates: { canonical: slug }, openGraph: { type: "article", title, description, url } };

export default function Page() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: "2026-09-08", dateModified: "2026-09-08", mainEntityOfPage: url, author: { "@type": "Organization", name: settings.brand.name } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><article className="py-14 md:py-20"><div className="section-shell max-w-5xl"><p className="text-sm font-black uppercase text-signal">Procurement Guide · September 8, 2026</p><h1 className="mt-3 text-4xl font-black text-graphite md:text-6xl">Commercial Meat Cutter Selection Guide</h1><p className="mt-6 text-lg leading-8 text-steel">Choose equipment around the real product, target cut and working shift—not a model name or headline output alone.</p><div className="prose-content mt-10 space-y-9 text-base leading-8 text-steel">
    <section><h2 className="text-3xl font-black text-graphite">Define the material condition</h2><p>Record species, boneless status, fresh or chilled condition, incoming temperature, fat and connective tissue range, and maximum feed dimensions. Confirm whether pre-cutting or controlled orientation is required.</p></section>
    <section><h2 className="text-3xl font-black text-graphite">Specify the finished cut</h2><p>Provide target thickness, strip or slice dimensions, acceptable variation and product photographs where useful. Explain how the cut will be cooked, packed or processed downstream.</p></section>
    <section><h2 className="text-3xl font-black text-graphite">Compare useful output</h2><p>State kilograms per hour and per shift. Ask suppliers to describe the material, temperature, feed preparation and target cut used for any capacity statement. Include loading, adjustment, inspection and sanitation in the production estimate.</p></section>
    <section><h2 className="text-3xl font-black text-graphite">Review hygiene and operator safety</h2><p>Request the cleaning and disassembly procedure, food-contact material description, access to cutting areas and safe isolation steps. Confirm local workplace and food-contact requirements with the responsible buyer team.</p></section>
    <section><h2 className="text-3xl font-black text-graphite">Plan a representative acceptance trial</h2><p>Agree on sample condition, batch size, feed method, target cut, inspection points and cleaning review. Record output appearance, usable yield, operating time and any retained material.</p></section>
    <section><h2 className="text-3xl font-black text-graphite">RFQ checklist</h2><ul className="list-disc pl-5"><li>Material type, condition, temperature and feed size</li><li>Target cut and acceptance method</li><li>Hourly and shift demand</li><li>Voltage, installation area and workflow</li><li>Cleaning, spares, documentation and delivery scope</li></ul></section>
    <section><h2 className="text-3xl font-black text-graphite">Frequently asked questions</h2>{faqs.map(([q,a]) => <div key={q}><h3 className="text-xl font-black text-graphite">{q}</h3><p>{a}</p></div>)}</section>
    <section className="border border-slate-200 bg-slate-50 p-6"><h2 className="text-2xl font-black text-graphite">Request an application review</h2><p>Compare the checklist with the <Link className="font-bold text-signal" href="/products/dk300-multi-function-meat-cutter">DK300 meat cutter</Link>, then <Link className="font-bold text-signal" href="/contact">send your product and production details</Link>.</p></section>
  </div></div></article></>;
}
