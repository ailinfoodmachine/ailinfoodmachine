import { getProducts } from "@/lib/data";
import settings from "@/data/settings.json";

export default function sitemap() {
  const staticRoutes = [
    { route: "", lastModified: "2026-10-12" },
    { route: "/products", lastModified: "2026-06-30" },
    { route: "/catalog", lastModified: "2026-10-21" },
    { route: "/about", lastModified: "2026-06-30" },
    { route: "/contact", lastModified: "2026-10-21" },
    { route: "/resources", lastModified: "2026-10-12" },
    { route: "/resources/how-to-choose-commercial-vegetable-cutting-machine", lastModified: "2026-08-29" },
    { route: "/resources/commercial-potato-peeling-machine-buying-guide", lastModified: "2026-08-29" },
    { route: "/resources/commercial-dough-mixer-buying-guide", lastModified: "2026-09-05" },
    { route: "/resources/commercial-meat-grinder-buying-guide", lastModified: "2026-09-07" },
    { route: "/resources/commercial-meat-cutter-selection-guide", lastModified: "2026-09-08" },
    { route: "/resources/commercial-dumpling-machine-rfq-guide", lastModified: "2026-09-10" },
    { route: "/resources/commercial-vegetable-dicer-rfq-guide", lastModified: "2026-10-04" },
    { route: "/resources/potato-peeling-machine-saudi-arabia", lastModified: "2026-10-04" },
    { route: "/resources/vegetable-cutting-machine-saudi-arabia", lastModified: "2026-10-04" },
    { route: "/resources/vegetable-cutting-machine-vietnam", lastModified: "2026-10-10" }
  ];
  const productRoutes = getProducts().map((product) => ({
    route: `/products/${product.id}`,
    lastModified: "2026-06-30"
  }));

  return [...staticRoutes, ...productRoutes].map(({ route, lastModified }) => ({
    url: `${settings.siteUrl}${route}`,
    lastModified: new Date(`${lastModified}T00:00:00.000Z`),
    changeFrequency: route.startsWith("/products/") || route.startsWith("/resources/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.8 : route.startsWith("/resources/") ? 0.75 : 0.7
  }));
}
