import { getProducts } from "@/lib/data";
import settings from "@/data/settings.json";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", "/products", "/catalog", "/about", "/contact", "/thank-you"];
  const productRoutes = getProducts().map((product) => `/products/${product.id}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${settings.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/products/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.8 : 0.7
  }));
}
