## Context

O site Visum Calc já usa Next.js 16 com App Router e Metadata API básica. A auditoria identificou gaps críticos de SEO: sitemap estático com slugs errados, ausência completa de JSON-LD, sem Twitter Cards, `<img>` nativo em vez de `next/image` (impacto em LCP/CLS), e fontes carregadas via CSS externo (bloqueio de render). Todas as melhorias usam APIs nativas do Next.js — zero dependências externas novas.

## Goals / Non-Goals

**Goals:**
- Implementar JSON-LD (Organization, LocalBusiness, Service, BreadcrumbList) em todas as páginas
- Migrar sitemap e robots para arquivos dinâmicos Next.js (`app/sitemap.ts`, `app/robots.ts`)
- Adicionar Twitter Cards completos no layout raiz
- Substituir `<img>` por `<Image>` do `next/image` nos 4 componentes afetados
- Implementar `next/font` para fontes sem CLS
- Criar `og-image.png` (1200×630px) para compartilhamento social

**Non-Goals:**
- Keyword research ou reescrita de conteúdo
- Implementação de analytics ou Search Console
- AMP pages
- Multilingual / hreflang
- Paid SEO tools integration

## Decisions

### D1: JSON-LD via componente reutilizável `<JsonLd>`

Criar um Server Component `components/seo/JsonLd.tsx` que recebe um objeto schema e renderiza `<script type="application/ld+json">`. Cada página importa e compõe os schemas necessários.

**Alternativa descartada**: Injetar JSON-LD via `generateMetadata` — a Metadata API do Next.js não suporta scripts arbitrários, apenas tags de meta padronizadas.

### D2: Sitemap e Robots como Route Handlers nativos do Next.js

`app/sitemap.ts` exporta uma função que retorna o array de URLs com `lastModified`. Next.js serve automaticamente em `/sitemap.xml`.
`app/robots.ts` exporta objeto com `rules` e `sitemap`. Servido em `/robots.txt`.

**Razão**: Remove a manutenção manual do XML e elimina o sitemap atual com slugs errados (`/servicos/pericias` etc. que não existem).

### D3: `next/image` com `sizes` configurado por contexto

Cada componente usa `sizes` adequado ao layout:
- `Navbar` logo: `sizes="200px"` (fixo)
- `Footer` logo: `sizes="200px"` (fixo)
- `About` foto: `sizes="(max-width: 768px) 100vw, 50vw"`
- `Services` background: `sizes="100vw"` (full-width)
- Imagens de serviço no `ServiceDetailClient`: `sizes="(max-width: 1024px) 100vw, 66vw"`

**Razão**: `next/image` gera srcset automático e aplica lazy loading, eliminando o custo de LCP para imagens above-the-fold quando `priority` é usado.

### D4: `next/font` com Google Fonts via subsets

Identificar a fonte atual (provavelmente via classe Tailwind `font-heading`) e carregá-la com `next/font/google`. A variável CSS `--font-heading` substituirá a referência externa.

**Razão**: Fontes via `next/font` são auto-hospedadas, eliminam requisição externa bloqueante e zero CLS.

### D5: Twitter Cards no layout raiz, não por página

Adicionar `twitter: { card: "summary_large_image", site: "@visumcalc" }` no metadata do `app/layout.tsx`. Páginas individuais herdam e podem sobrescrever título/descrição/imagem quando necessário.

### D6: OG Image

Criar `public/og-image.png` (1200×630px) com a identidade visual do Visum Calc. Pode ser gerada via `app/opengraph-image.tsx` (Route Handler nativo) ou arquivo estático em `public/`.

**Decisão**: Arquivo estático em `public/og-image.png` — mais simples, sem overhead de geração em runtime.

## Risks / Trade-offs

- **`next/image` em componentes com `"use client"`**: `<Image>` funciona em Client Components normalmente. Risco zero, mas precisa de `width` e `height` explícitos ou `fill` com container posicionado.
- **JSON-LD em Client Components**: `<JsonLd>` deve ser um Server Component. Se for importado de um Client Component, quebra. Solução: passá-lo como `children` do page.tsx (Server Component) e renderizar antes/depois do client.
- **Sitemap dinâmico**: como as rotas de serviço são estáticas (slugs hardcoded), o `sitemap.ts` pode simplesmente listar as URLs fixas — sem necessidade de fetch de banco de dados.
- **CLS com `next/image` no Hero**: o hero background usa `style={{ backgroundImage }}`, não `<img>`. Não precisa migrar. Apenas imagens em `<img>` tags precisam ser convertidas.

## Open Questions

- Qual é a fonte atual usada para `font-heading`? (Verificar Tailwind config ou CSS) — necessário para `next/font`
- O site tem conta no Twitter/X? (`@visumcalc` ou outro handle para Twitter Cards)
