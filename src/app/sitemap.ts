import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { categories, products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now },
    ...categories.map((c) => ({ url: `${site.url}/category/${c.slug}`, lastModified: now })),
    ...products.map((p) => ({ url: `${site.url}/products/${p.slug}`, lastModified: now })),
  ];
}
