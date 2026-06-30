export const metadata = {
  title: "Food Processing Machinery Catalog",
  description:
    "View and download the Ailin food processing machinery catalog with vegetable cutting, peeling, meat processing, and dough equipment.",
  alternates: {
    canonical: "/catalog"
  },
  openGraph: {
    title: "Ailin Food Processing Machinery Catalog",
    description:
      "Browse catalog pages and download PDF materials for Ailin food processing machinery.",
    url: "/catalog"
  }
};

export default function CatalogLayout({ children }) {
  return children;
}
