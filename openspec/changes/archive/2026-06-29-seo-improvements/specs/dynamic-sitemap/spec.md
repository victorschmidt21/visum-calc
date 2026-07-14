### Requirement: Sitemap dinâmico substituindo o estático

O arquivo `public/sitemap.xml` atual contém slugs de serviço incorretos (`/servicos/pericias`, `/servicos/calculos` etc.) que retornam 404. Deve ser substituído por `app/sitemap.ts` gerenciado pelo Next.js.

#### Scenario: Sitemap gerado pelo Next.js cobre todas as rotas válidas

ADDED `app/sitemap.ts` — exporta função default que retorna `MetadataRoute.Sitemap`:

```ts
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
```

Next.js serve automaticamente em `/sitemap.xml`.

REMOVED `public/sitemap.xml` — arquivo estático substituído pela geração dinâmica.

---

### Requirement: Robots.txt dinâmico

O `public/robots.txt` estático deve ser substituído por `app/robots.ts` para que o sitemap URL seja gerenciado automaticamente.

#### Scenario: Robots.txt gerado pelo Next.js referencia o sitemap correto

ADDED `app/robots.ts` — exporta função default que retorna `MetadataRoute.Robots`:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://visumcalc.com.br/sitemap.xml",
  };
}
```

Next.js serve automaticamente em `/robots.txt`.

REMOVED `public/robots.txt` — substituído pela geração dinâmica.
