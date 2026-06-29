import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import ProductGallery from "@/components/ProductGallery";
import ProductDetailClient from "@/components/ProductDetailClient";
import { getProductById, getProducts } from "@/lib/data";

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }) {
  const product = getProductById(params.id);
  return {
    title: product ? `${product.name} | Ailin Machinery` : "Product Detail"
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  return (
    <ProductDetailClient product={product}>
      <ProductGallery product={product} />
      <InquiryForm productName={product.name} />
    </ProductDetailClient>
  );
}
