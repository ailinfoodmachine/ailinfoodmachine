import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import ProductGallery from "@/components/ProductGallery";
import ProductDetailClient from "@/components/ProductDetailClient";
import { getProductById, getProducts } from "@/lib/data";
import settings from "@/data/settings.json";

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }) {
  const product = getProductById(params.id);
  if (!product) {
    return {
      title: "Product Detail",
      robots: { index: false, follow: false }
    };
  }

  const title = `${product.name} Manufacturer`;
  const description = `${product.summary} Request price, parameters, catalog, and machine selection support from Jinan Ailin Machinery.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.id}`
    },
    openGraph: {
      title: `${product.name} | Jinan Ailin Machinery`,
      description,
      url: `/products/${product.id}`,
      images: [
        {
          url: product.image,
          width: 900,
          height: 650,
          alt: product.name
        }
      ],
      type: "website"
    }
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${settings.siteUrl}${product.image}`,
    description: product.summary,
    brand: {
      "@type": "Brand",
      name: settings.brand.name
    },
    manufacturer: {
      "@type": "Organization",
      name: settings.brand.name,
      url: settings.siteUrl
    },
    category: product.category,
    additionalProperty: Object.entries(product.parameters).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value
    })),
    offers: {
      "@type": "Offer",
      url: `${settings.siteUrl}/products/${product.id}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Request quotation"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient product={product}>
        <ProductGallery product={product} />
        <InquiryForm productName={product.name} />
      </ProductDetailClient>
    </>
  );
}
