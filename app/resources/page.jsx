import Link from "next/link";
import settings from "@/data/settings.json";

const resources = [
  {
    href: "/resources/how-to-choose-commercial-vegetable-cutting-machine",
    title: "How to Choose a Commercial Vegetable Cutting Machine",
    description: "Compare produce, cut formats, useful output, cleaning, utilities and supplier testing before ordering.",
    tag: "Vegetable Cutting"
  },
  {
    href: "/resources/commercial-vegetable-dicer-rfq-guide",
    title: "Commercial Vegetable Dicer RFQ Guide",
    description: "Define input preparation, target cube sizes, acceptance limits, changeover and test evidence.",
    tag: "Vegetable Dicing"
  },
  {
    href: "/resources/commercial-potato-peeling-machine-buying-guide",
    title: "Commercial Potato Peeling Machine Buying Guide",
    description: "Evaluate raw material, peel quality, batch workflow, yield, cleaning and the complete quotation scope.",
    tag: "Cleaning & Peeling"
  },
  {
    href: "/resources/commercial-meat-grinder-buying-guide",
    title: "Commercial Meat Grinder Buying Guide",
    description: "Prepare a model-specific RFQ around meat condition, grind result, workflow, sanitation and utilities.",
    tag: "Meat Processing"
  },
  {
    href: "/resources/commercial-meat-cutter-selection-guide",
    title: "Commercial Meat Cutter Selection Guide",
    description: "Compare cutting applications, finished product, useful output, blade changes and acceptance testing.",
    tag: "Meat Processing"
  },
  {
    href: "/resources/commercial-dough-mixer-buying-guide",
    title: "Commercial Dough Mixer Buying Guide",
    description: "Specify recipes, working batch, complete cycle, operator workflow, power and supplier tests.",
    tag: "Dough Processing"
  },
  {
    href: "/resources/commercial-dumpling-machine-rfq-guide",
    title: "Commercial Dumpling Machine RFQ Guide",
    description: "Define wrapper dough, filling, product shape, accepted output, cleaning and test conditions.",
    tag: "Dough Processing"
  },
  {
    href: "/resources/potato-peeling-machine-saudi-arabia",
    title: "Potato Peeling Machine in Saudi Arabia",
    description: "A country-focused procurement checklist covering site conditions, testing, delivery and responsibilities.",
    tag: "Saudi Arabia"
  },
  {
    href: "/resources/vegetable-cutting-machine-saudi-arabia",
    title: "Vegetable Cutting Machine in Saudi Arabia",
    description: "Plan a Saudi vegetable cutter RFQ using actual produce, cuts, shift demand, utilities and delivery scope.",
    tag: "Saudi Arabia"
  },
  {
    href: "/resources/vegetable-cutting-machine-vietnam",
    title: "Vegetable Cutting Machine in Vietnam",
    description: "A Vietnam buyer checklist for produce, cuts, useful output, power, cleaning, testing and shipping.",
    tag: "Vietnam"
  }
];

export const metadata = {
  title: "Food Processing Machinery Buyer Guides",
  description: "Practical procurement guides for vegetable cutting, peeling, meat processing and dough machinery, including RFQ checklists and supplier testing.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Food Processing Machinery Buyer Guides",
    description: "RFQ checklists and machine selection guides for commercial kitchens and food processors.",
    url: `${settings.siteUrl}/resources`,
    type: "website"
  }
};

export default function ResourcesPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: metadata.title,
    description: metadata.description,
    url: `${settings.siteUrl}/resources`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: resources.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: resource.title,
        url: `${settings.siteUrl}${resource.href}`
      }))
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <section className="bg-graphite py-16 text-white md:py-20">
        <div className="section-shell max-w-5xl">
          <p className="text-sm font-black uppercase text-orange-400">Buyer Resources</p>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">Food Processing Machinery Buyer Guides</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Use these practical RFQ checklists to define raw materials, finished results, useful
            output, site conditions, cleaning, supplier tests and commercial scope before comparing machines.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <article key={resource.href} className="flex flex-col border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase text-signal">{resource.tag}</p>
                <h2 className="mt-3 text-2xl font-black leading-tight text-graphite">
                  <Link href={resource.href} className="hover:text-signal">{resource.title}</Link>
                </h2>
                <p className="mt-4 flex-1 leading-7 text-steel">{resource.description}</p>
                <Link href={resource.href} className="mt-6 text-sm font-black uppercase text-signal hover:underline">
                  Read Guide →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5 border border-slate-200 bg-slate-50 p-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-black text-graphite">Need a model-specific quotation?</h2>
              <p className="mt-3 leading-7 text-steel">Send your material, required result, shift demand, utilities, destination and test request.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-signal px-6 text-sm font-black uppercase text-white hover:bg-orange-600">
              Contact Ailin Machinery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
