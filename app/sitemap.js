import { getProducts } from "@/lib/data";
import settings from "@/data/settings.json";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    "",
    "/products",
    "/catalog",
    "/about",
    "/contact",
    "/resources/how-to-choose-commercial-vegetable-cutting-machine",
    "/resources/commercial-potato-peeling-machine-buying-guide"
  ];
  const productRoutes = getProducts().map((product) => `/products/${product.id}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${settings.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/products/") || route.startsWith("/resources/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.8 : route.startsWith("/resources/") ? 0.75 : 0.7
  }));
}
