import settings from "@/data/settings.json";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${settings.siteUrl}/sitemap.xml`,
    host: settings.siteUrl
  };
}
