## Why

O projeto Visum Calc possui metadados básicos configurados após a migração para Next.js, mas carece de técnicas essenciais de SEO técnico documentadas no guia de referência: structured data (JSON-LD), sitemap dinâmico atualizado, Twitter Cards, otimização de imagens com `next/image`, e font strategy — lacunas que comprometem ranking orgânico, compartilhamento em redes sociais e Core Web Vitals.

## What Changes

- **Adicionar JSON-LD / Structured Data** em todas as páginas: `Organization`, `LocalBusiness`, `Service` e `BreadcrumbList` via `<script type="application/ld+json">` no `<head>`
- **Substituir sitemap.xml estático** (com slugs errados) por `app/sitemap.ts` gerado dinamicamente pelo Next.js com todas as rotas corretas
- **Substituir robots.txt estático** por `app/robots.ts` gerenciado nativamente
- **Adicionar Twitter Cards** completos (`card`, `title`, `description`, `images`) no layout raiz e em todas as páginas
- **Criar og-image** — o arquivo `/public/og-image.png` está referenciado mas não existe
- **Substituir `<img>` por `next/image`** nos 4 componentes que ainda usam tag nativa: `Navbar`, `Footer`, `About`, `Services` (ganho de LCP/CLS)
- **Adicionar `next/font`** para carregamento de fontes sem CLS e sem requisição externa bloqueante
- **Exportar `viewport` metadata** separado (padrão Next.js 13+)
- **Adicionar meta robots** explícito (`index, follow`) via metadata API

## Capabilities

### New Capabilities
- `structured-data`: JSON-LD com schemas Organization, LocalBusiness, Service e BreadcrumbList em todas as páginas
- `dynamic-sitemap`: `app/sitemap.ts` substituindo o `public/sitemap.xml` estático e desatualizado
- `image-optimization`: migração de `<img>` para `next/image` nos componentes identificados + alt text adequado
- `font-strategy`: implementação de `next/font` para eliminar CLS e bloqueio de render por fontes externas

### Modified Capabilities
<!-- Sem capabilities existentes no openspec/specs/ que precisem de delta spec -->

## Impact

- **`app/layout.tsx`**: Twitter Cards, viewport export, JSON-LD Organization/LocalBusiness, next/font
- **`app/page.tsx`**: JSON-LD BreadcrumbList
- **`app/servicos/[id]/page.tsx`**: JSON-LD Service + BreadcrumbList por serviço
- **`app/noticias/page.tsx`**: Twitter Card, JSON-LD BreadcrumbList
- **`app/contato/page.tsx`**: Twitter Card, JSON-LD BreadcrumbList
- **`app/sitemap.ts`** (novo): substitui `public/sitemap.xml`
- **`app/robots.ts`** (novo): substitui `public/robots.txt`
- **`components/layout/Navbar.tsx`** e **`Footer.tsx`**: `<img>` → `<Image>`
- **`components/sections/About.tsx`** e **`Services.tsx`**: `<img>` → `<Image>`
- **`public/og-image.png`**: precisa ser criado (1200×630px)
- **Dependências**: nenhuma nova — tudo nativo Next.js (`next/image`, `next/font`, Metadata API)
