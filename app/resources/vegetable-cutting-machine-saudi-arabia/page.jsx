import Image from "next/image";
import Link from "next/link";
import settings from "@/data/settings.json";

const slug = "/resources/vegetable-cutting-machine-saudi-arabia";
const canonicalUrl = `${settings.siteUrl}${slug}`;
const title = "Vegetable Cutting Machine in Saudi Arabia: Procurement Guide";
const description =
  "A practical guide for Saudi buyers comparing commercial vegetable cutting machines by produce, cut size, workflow, site utilities, cleaning, testing and RFQ scope.";

const faqs = [
  {
    question: "What should a Saudi buyer include in a vegetable cutter RFQ?",
    answer:
      "Provide the produce list, normal input dimensions and condition, required cut types and sizes, quantity per shift, operating hours, measured voltage, frequency and phase, installation city, delivery destination, photos, and the test result you want to review."
  },
  {
    question: "Can one machine cut leafy and root vegetables?",
    answer:
      "Some listed machines are intended for more than one vegetable group, but feeding and cutting behavior differs. Identify every material and cut, then ask the supplier to confirm the proposed feed path, cutter set, changeover and representative test."
  },
  {
    question: "How should buyers compare supplier capacity claims?",
    answer:
      "Use the same produce, preparation condition, cut specification and acceptance criteria. Include loading, changeover, rejected output, cleaning and downstream constraints when estimating useful shift output."
  },
  {
    question: "What must be checked before shipment to Saudi Arabia?",
    answer:
      "Confirm the final model, electrical configuration, included cutters and spares, packing, documents, delivery term, consignee and destination. The buyer or importer should verify the Saudi import, conformity, installation, food-hygiene and workplace requirements that apply to the final configuration."
  }
];

export const metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "/images/products/ailin/yqc801-vegetable-cutter.png",
        width: 900,
        height: 650,
        alt: "Commercial vegetable cutting machine for Saudi food preparation"
      }
    ]
  }
};

export default function VegetableCuttingMachineSaudiArabiaGuide() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${settings.siteUrl}/images/products/ailin/yqc801-vegetable-cutter.png`,
    datePublished: "2026-10-04",
    dateModified: "2026-10-04",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    author: { "@type": "Organization", name: settings.brand.name, url: settings.siteUrl },
    publisher: { "@type": "Organization", name: settings.brand.name, url: settings.siteUrl },
    about: ["Commercial vegetable cutting machine", "Food processing equipment", "Saudi Arabia"]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article className="py-14 md:py-20">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-steel">
            <Link href="/" className="hover:text-signal">Home</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/products" className="hover:text-signal">Products</Link> <span aria-hidden="true">/</span>{" "}
            <span>Vegetable Cutting Machines for Saudi Arabia</span>
          </nav>

          <header className="mt-8 max-w-4xl">
            <p className="text-sm font-black uppercase text-signal">Saudi Arabia Buyer Resource</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-graphite md:text-6xl">
              Vegetable Cutting Machine in Saudi Arabia: Procurement Guide
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              Central kitchens, catering operations, hotels, restaurants, and food processors need
              a cutter matched to their actual vegetables and finished products. A useful quotation
              begins with produce, cut dimensions, workflow, site utilities, cleaning, and test evidence.
            </p>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="prose-content max-w-4xl space-y-10 text-base leading-8 text-steel">
              <Image
                src="/images/products/ailin/yqc801-vegetable-cutter.png"
                alt="YQC801 commercial vegetable cutting machine"
                width={900}
                height={650}
                priority
                className="w-full border border-slate-200 bg-slate-50 object-contain"
              />

              <section>
                <h2 className="text-3xl font-black text-graphite">Specify the produce before selecting a model</h2>
                <p className="mt-4">List the vegetables used during a normal week, their size range, firmness, temperature, and whether they arrive washed or trimmed. Separate leafy vegetables, long vegetables, and firm roots because their feeding and cutting behavior can differ.</p>
                <p className="mt-4">Send photos of representative batches. If a machine must handle several product groups, ask the supplier to explain the proposed feeding method and cutter set for each one rather than relying on a general “multifunction” description.</p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-graphite">Turn menu descriptions into measurable cuts</h2>
                <p className="mt-4">State whether the required output is a slice, strip, dice, segment, or cube, followed by the target dimensions and acceptable variation. Add close photographs of the finished product used by the kitchen or factory.</p>
                <p className="mt-4">The current range includes the <Link className="font-bold text-signal hover:underline" href="/products/yqc801-multifunctional-vegetable-cutter">YQC801 multifunctional vegetable cutter</Link>, the <Link className="font-bold text-signal hover:underline" href="/products/yqc501-double-head-vegetable-cutter">YQC501 double-head vegetable cutter</Link>, the <Link className="font-bold text-signal hover:underline" href="/products/chd20-vegetable-dicer">CHD20 vegetable dicer</Link>, and the <Link className="font-bold text-signal hover:underline" href="/products/chd100-vegetable-slicer">CHD100 vegetable slicer</Link>. Selection should follow the agreed application and test.</p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-graphite">Calculate useful output for the Saudi operation</h2>
                <p className="mt-4">Provide kilograms needed per shift, peak service periods, operating hours, batch sizes, and the number of product or cut changes. Explain whether washing, sorting, cooking, packing, or cold storage limits the line.</p>
                <p className="mt-4">Ask what produce, preparation condition, cutter and test duration support any quoted capacity. Useful output should account for loading, changeover, rejected cuts, operator breaks and cleaning instead of multiplying a short demonstration rate across a full shift.</p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-graphite">Confirm the electrical and installation conditions</h2>
                <p className="mt-4">Send the measured site voltage, frequency, phase and connection preference. Do not assume the configuration from the destination country alone. Ask the supplier to repeat the proposed electrical specification in the final quotation and machine documents.</p>
                <p className="mt-4">Measure doorways, aisles, operating space, worktable and container heights, drainage, and service access. If the cutter connects to washing or packing equipment, include the relevant layout and inlet or discharge heights.</p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-graphite">Review cleaning, cutter changes, and operator work</h2>
                <p className="mt-4">Ask which parts contact food, which components are removable, whether tools are needed, and how operators inspect areas where product may collect. Share the facility’s wash method and cleaning chemicals for compatibility review.</p>
                <p className="mt-4">For frequent menu changes, request a demonstration of cutter replacement, adjustment, safe handling, and restart. Record which cutter assemblies are included, which are optional, and how replacements are identified when ordering spares.</p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-graphite">Use a written sample-test plan</h2>
                <p className="mt-4">Agree on the raw material, input preparation, target cut, cutter set, run duration, and acceptance criteria before the test. Request continuous video showing the incoming produce, feeding, discharge, and close views of accepted and rejected output.</p>
                <p className="mt-4">If the same Saudi produce is unavailable at the supplier’s location, record the substitute and its differences. A test is evidence for the specified sample and setup; it should not be presented as a guarantee for every future batch.</p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-graphite">Compare complete quotations and responsibilities</h2>
                <p className="mt-4">Normalize offers to the same model scope, cutter sets, spare and wear parts, packing, documents, delivery term, training, warranty and after-sales communication. Confirm the consignee, destination, and who handles freight, customs clearance, local conformity, installation and commissioning.</p>
                <p className="mt-4">The Saudi buyer or importer should verify the requirements that apply to the final machine, electrical configuration, food-contact use, workplace and installation site. Do not treat a general supplier statement as confirmation of local compliance.</p>
              </section>

              <section className="border border-slate-200 bg-slate-50 p-6 md:p-8">
                <h2 className="text-3xl font-black text-graphite">Saudi vegetable cutter RFQ checklist</h2>
                <ul className="mt-5 grid list-disc gap-3 pl-5">
                  <li>Produce list, normal dimensions, condition, temperature, and photos</li>
                  <li>Cut types, target dimensions, accepted variation, and output photos</li>
                  <li>Kilograms per shift, peak demand, operating hours, and changeovers</li>
                  <li>Upstream and downstream process, room layout, and installation city</li>
                  <li>Measured voltage, frequency, phase, connection, and site conditions</li>
                  <li>Cleaning method, chemicals, cutter-change workflow, and operator needs</li>
                  <li>Test material, acceptance criteria, video evidence, cutters, and spares</li>
                  <li>Destination, trade term, packing, documents, warranty, and responsibilities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-black text-graphite">Frequently asked questions</h2>
                <div className="mt-5 grid gap-5">
                  {faqs.map((item) => (
                    <div key={item.question} className="border border-slate-200 p-6">
                      <h3 className="text-xl font-black text-graphite">{item.question}</h3>
                      <p className="mt-3">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="h-fit border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
              <h2 className="text-xl font-black text-graphite">Request a Saudi Arabia quotation</h2>
              <p className="mt-3 leading-7 text-steel">Send your produce photos, required cuts, shift demand, site power, installation city, destination, and preferred delivery term for an application review.</p>
              <Link href="/contact" className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-signal px-5 text-sm font-black uppercase text-white hover:bg-orange-600">Request a Quote</Link>
              <Link href="/products" className="mt-3 inline-flex min-h-12 w-full items-center justify-center border border-graphite px-5 text-sm font-black uppercase text-graphite hover:bg-white">Compare Cutters</Link>
              <Link href="/resources/how-to-choose-commercial-vegetable-cutting-machine" className="mt-3 inline-flex min-h-12 w-full items-center justify-center border border-slate-300 px-5 text-center text-sm font-black uppercase text-graphite hover:bg-white">General Buying Guide</Link>
              <Link href="/resources/potato-peeling-machine-saudi-arabia" className="mt-3 inline-flex min-h-12 w-full items-center justify-center border border-slate-300 px-5 text-center text-sm font-black uppercase text-graphite hover:bg-white">Saudi Potato Peeler Guide</Link>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
