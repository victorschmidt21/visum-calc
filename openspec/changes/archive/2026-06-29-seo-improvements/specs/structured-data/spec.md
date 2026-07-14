### Requirement: JSON-LD Organization no layout raiz

O site deve incluir um schema `Organization` renderizado em todas as páginas, embutido no `<head>` via `<script type="application/ld+json">`.

#### Scenario: Layout raiz renderiza Organization schema

ADDED `components/seo/JsonLd.tsx` — Server Component que recebe `schema: Record<string, unknown>` e renderiza `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`.

MODIFIED `app/layout.tsx` — importa `<JsonLd>` e adiciona dentro do `<body>`, antes do `<Providers>`, com o seguinte schema:
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Visum Calc",
  "url": "https://visumcalc.com.br",
  "logo": "https://visumcalc.com.br/logo2.png",
  "description": "Soluções personalizadas em perícias bancárias, cálculos, contabilidade e tributário.",
  "telephone": "+554599117803",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "sameAs": []
}
```

---

### Requirement: JSON-LD BreadcrumbList nas páginas internas

Páginas com hierarquia de navegação (serviços, notícias, contato) devem incluir `BreadcrumbList` para exibição de breadcrumbs no resultado de busca.

#### Scenario: Página de serviço renderiza BreadcrumbList + Service schema

MODIFIED `app/servicos/[id]/page.tsx` — adiciona dois schemas via `<JsonLd>` no Server Component:

1. `BreadcrumbList`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visumcalc.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://visumcalc.com.br/#servicos" },
    { "@type": "ListItem", "position": 3, "name": "<service.title>", "item": "https://visumcalc.com.br/servicos/<id>" }
  ]
}
```

2. `Service`:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "<service.title>",
  "description": "<service.description>",
  "provider": {
    "@type": "Organization",
    "name": "Visum Calc",
    "url": "https://visumcalc.com.br"
  },
  "url": "https://visumcalc.com.br/servicos/<id>"
}
```

#### Scenario: Página de notícias renderiza BreadcrumbList

MODIFIED `app/noticias/page.tsx` — adiciona `<JsonLd>` com:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visumcalc.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Notícias", "item": "https://visumcalc.com.br/noticias" }
  ]
}
```

#### Scenario: Página de contato renderiza BreadcrumbList

MODIFIED `app/contato/page.tsx` — adiciona `<JsonLd>` com:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visumcalc.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Contato", "item": "https://visumcalc.com.br/contato" }
  ]
}
```

---

### Requirement: Twitter Cards no layout raiz

Todas as páginas devem ter meta tags Twitter Card para pré-visualização quando compartilhadas no X/Twitter.

#### Scenario: Layout exporta twitter metadata

MODIFIED `app/layout.tsx` — adiciona ao objeto `metadata`:
```ts
twitter: {
  card: "summary_large_image",
  title: "Visum Calc — Precisão Contábil e Pericial",
  description: "Soluções personalizadas em perícias bancárias, cálculos, contabilidade e tributário.",
  images: ["/og-image.png"],
}
```

#### Scenario: Viewport exportado separadamente

MODIFIED `app/layout.tsx` — exporta `viewport` como export nomeado separado do `metadata` (padrão Next.js 13+):
```ts
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}
```
Importa `Viewport` de `"next"`.

---

### Requirement: Meta robots explícito

#### Scenario: Páginas públicas têm index/follow explícito

MODIFIED `app/layout.tsx` — adiciona ao objeto `metadata`:
```ts
robots: {
  index: true,
  follow: true,
}
```
