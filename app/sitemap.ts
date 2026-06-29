import type { MetadataRoute } from "next";

const BASE = "https://visumcalc.com.br";
const SERVICE_IDS = [
  "reforma-tributaria",
  "contabilidade-personalizada",
  "gestao-tributaria",
  "holding-patrimonial",
  "calculos-judiciais",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/noticias`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...SERVICE_IDS.map((id) => ({
      url: `${BASE}/servicos/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
