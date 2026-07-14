## Context

O projeto é um site institucional (Visum) com 4 páginas principais (`/`, `/servicos/:id`, `/noticias`, `/contato`), atualmente servido como SPA React via Vite. O SEO é feito no cliente via `react-helmet-async`, o que significa que crawlers recebem HTML vazio. O backend é um servidor Express em `server/` com Drizzle ORM, autenticação Passport, sessions e WebSockets.

Estado atual:
- Bundler: Vite 7
- Roteamento: wouter (client-side)
- SEO: react-helmet-async (client-side, sem SSR)
- UI: Radix UI + Tailwind CSS v4
- Data fetching: TanStack Query
- Backend: Express + Passport + Drizzle ORM (PostgreSQL)

## Goals / Non-Goals

**Goals:**
- Migrar o frontend para Next.js 15 (App Router) com SSR/SSG por página
- Substituir react-helmet-async pela Metadata API nativa do Next.js
- Substituir wouter pelo file-based routing do App Router
- Manter todos os componentes de UI existentes (Radix, Tailwind, TanStack Query, Framer Motion)
- Preservar o servidor Express como backend separado (mantendo auth, Drizzle, WebSockets intactos)

**Non-Goals:**
- Migrar o backend Express para Next.js Route Handlers neste escopo
- Reescrever componentes de UI (apenas adicionar `"use client"` onde necessário)
- Mudar o banco de dados ou a lógica de autenticação
- Implementar ISR ou cache avançado de dados

## Decisions

### D1: Manter Express como backend separado (não migrar para Route Handlers)

O servidor Express tem Passport, sessions com `express-session`, WebSockets e Drizzle ORM. Migrar tudo isso para Route Handlers do Next.js seria complexo (sessions via cookies JWT, WebSockets precisam de setup extra) e foge do objetivo da migração, que é SEO/performance.

**Decisão**: Next.js serve apenas o frontend. As chamadas de API continuam apontando para o backend Express, que roda em porta separada em dev (proxied pelo `next.config.js`) e no mesmo domínio em produção via reverse proxy.

**Alternativa considerada**: Migrar API para Route Handlers — descartada porque adiciona risco sem benefício imediato para SEO.

### D2: Estratégia de renderização por página

| Rota | Estratégia | Razão |
|------|-----------|-------|
| `/` | SSG (static) | Conteúdo estático, máxima performance |
| `/servicos/[id]` | SSG com `generateStaticParams` | Rotas conhecidas em build time |
| `/noticias` | SSR ou ISR | Conteúdo pode mudar com frequência |
| `/contato` | SSG (static) | Formulário client-side, sem dados do servidor |

**Alternativa considerada**: Tudo SSR — descartada por desnecessário para conteúdo majoritariamente estático.

### D3: Estrutura de diretórios

```
app/
  layout.tsx          ← root layout (providers, Toaster, TooltipProvider)
  page.tsx            ← Home
  noticias/
    page.tsx          ← News
  contato/
    page.tsx          ← ContactPage
  servicos/
    [id]/
      page.tsx        ← ServiceDetail
  not-found.tsx       ← 404 global
components/           ← mover de client/src/components/ para raiz
lib/                  ← mover de client/src/lib/
hooks/                ← mover de client/src/hooks/
```

**Razão**: Segue a convenção do App Router. Elimina o prefixo `client/src/` que não faz sentido em Next.js.

### D4: Tratamento de `"use client"` 

Componentes com hooks React (`useState`, `useEffect`, `useLocation`, event handlers, TanStack Query) precisam de `"use client"`. A estratégia é:
- Pages são Server Components por padrão (exportam `generateMetadata`)
- Componentes interativos mantêm `"use client"` no topo
- `QueryClientProvider`, `TooltipProvider`, `Toaster`, `ThemeProvider` ficam em um `<Providers>` client component no layout raiz

### D5: Proxy da API em desenvolvimento

O `next.config.js` configura `rewrites` para `/api/*` → `http://localhost:5000/*` em dev, replicando o comportamento atual onde Vite faz proxy para o Express.

## Risks / Trade-offs

- **`"use client"` propagation**: Componentes que usam hooks de terceiros (Framer Motion, Radix com estado) precisam ser marcados — risco de erro de hidratação se esquecido. Mitigação: revisar cada componente de página ao mover.
- **Tailwind CSS v4 + Next.js**: A v4 usa `@tailwindcss/vite` — em Next.js, trocar para `@tailwindcss/postcss`. Mitigação: atualizar `postcss.config.js` conforme documentação.
- **Quebra de imports `@/`**: O path alias `@/` precisa ser reconfigurado no `tsconfig.json` e `next.config.js`. Mitigação: Next.js suporta nativamente via `compilerOptions.paths`.
- **Deploy**: SPA podia ser servida por qualquer CDN estático. Next.js requer Node.js server ou plataforma compatível (Vercel, Railway). Mitigação: definir plataforma de deploy antes de migrar.

## Migration Plan

1. Instalar `next`, remover `vite` e plugins Vite
2. Criar `next.config.js` com proxy `/api` → Express
3. Criar estrutura `app/` com `layout.tsx` e providers
4. Mover páginas uma a uma, adicionando `generateMetadata` e `"use client"` onde necessário
5. Mover `components/`, `lib/`, `hooks/` para raiz do projeto
6. Atualizar `tsconfig.json` para App Router
7. Atualizar `postcss.config.js` para Tailwind v4 com Next.js
8. Remover `react-helmet-async`, `wouter`, plugins Replit
9. Testar todas as rotas e validar metadados com `curl` (verificar HTML server-rendered)

**Rollback**: A branch `main` permanece no Vite até merge. Reverter = deletar branch.

## Open Questions

- Qual plataforma de deploy será usada? (Vercel, Railway, VPS com Nginx?) — impacta configuração de `output` no `next.config.js`
- As páginas `/noticias` precisam de ISR com revalidação? Se sim, qual intervalo?
