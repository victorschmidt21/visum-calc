## 1. Setup e Configuração Inicial

- [x] 1.1 Instalar `next` e remover `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite` e plugins Replit do `package.json`
- [x] 1.2 Criar `next.config.js` com rewrite `/api/*` → `http://localhost:5000` para proxy do Express em dev
- [x] 1.3 Atualizar `postcss.config.js` para usar `@tailwindcss/postcss` no lugar de `@tailwindcss/vite`
- [x] 1.4 Atualizar `tsconfig.json` para configuração compatível com App Router (incluir `"jsx": "preserve"`, `paths` para `@/`)
- [x] 1.5 Atualizar scripts no `package.json`: `dev` → `next dev`, `build` → `next build`, `start` → `next start`

## 2. Estrutura de Diretórios App Router

- [x] 2.1 Criar diretório `app/` na raiz do projeto
- [x] 2.2 Mover `client/src/components/` → `components/` (raiz do projeto)
- [x] 2.3 Mover `client/src/lib/` → `lib/` (raiz do projeto)
- [x] 2.4 Mover `client/src/hooks/` → `hooks/` (raiz do projeto)
- [x] 2.5 Mover `client/src/index.css` → `app/globals.css`
- [x] 2.6 Atualizar todos os imports `@/` para refletir a nova localização dos arquivos

## 3. Layout Raiz e Providers

- [x] 3.1 Criar `app/layout.tsx` com `<html>`, `<body>`, import de `globals.css` e metadados base (`title.template`, `description`, `openGraph`)
- [x] 3.2 Criar `app/providers.tsx` como Client Component com `QueryClientProvider`, `TooltipProvider` e `Toaster`
- [x] 3.3 Usar `<Providers>` no `app/layout.tsx`

## 4. Migração das Páginas

- [x] 4.1 Criar `app/page.tsx` a partir de `client/src/pages/Home.tsx` — exportar `metadata` estático, mover lógica interativa para subcomponentes com `"use client"`
- [x] 4.2 Criar `app/noticias/page.tsx` a partir de `client/src/pages/News.tsx` — exportar `metadata` e adicionar `"use client"` se necessário
- [x] 4.3 Criar `app/contato/page.tsx` a partir de `client/src/pages/ContactPage.tsx` — exportar `metadata` estático
- [x] 4.4 Criar `app/servicos/[id]/page.tsx` a partir de `client/src/pages/ServiceDetail.tsx` — implementar `generateStaticParams` e `generateMetadata` com dados do serviço
- [x] 4.5 Criar `app/not-found.tsx` a partir de `client/src/pages/not-found.tsx`

## 5. Metadata API (substituir react-helmet-async)

- [x] 5.1 Adicionar `export const metadata` ou `export async function generateMetadata` em cada página com `title`, `description`, `openGraph.url` e `openGraph.title`
- [x] 5.2 Remover todas as referências a `<MetaHead>` dos componentes de página
- [x] 5.3 Deletar `components/seo/MetaHead.tsx` (antigo `client/src/components/seo/MetaHead.tsx`)
- [x] 5.4 Remover `react-helmet-async` do `package.json`

## 6. Client Components

- [x] 6.1 Auditar cada componente em `components/` e adicionar `"use client"` onde houver `useState`, `useEffect`, event handlers ou hooks de terceiros
- [x] 6.2 Verificar componentes de animação (Framer Motion) — adicionar `"use client"` onde necessário
- [x] 6.3 Verificar componentes Radix UI com estado interno — garantir `"use client"` nos wrappers

## 7. Remoção de Código Legado

- [x] 7.1 Remover `client/src/App.tsx` e `client/src/main.tsx`
- [x] 7.2 Remover `wouter` do `package.json`
- [x] 7.3 Deletar `vite.config.ts`, `vite-plugin-meta-images.ts` e `script/build.ts` atualizado (removida dependência Vite)
- [ ] 7.4 Remover diretório `client/` após confirmação de que todos os arquivos foram migrados

## 8. Validação

- [x] 8.1 Executar `next build` e confirmar que não há erros de TypeScript ou build
- [x] 8.2 Verificar com `curl -s http://localhost:3000/ | grep -i "visum"` que o conteúdo está presente no HTML inicial (sem JS)
- [x] 8.3 Verificar com `curl -s http://localhost:3000/ | grep -i "og:title"` que Open Graph está no HTML
- [ ] 8.4 Testar navegação entre todas as rotas: `/`, `/noticias`, `/contato`, `/servicos/[id]`
- [ ] 8.5 Testar o formulário de contato (garantir que a chamada de API chega ao Express)
- [ ] 8.6 Verificar que não há erros de hidratação no console do browser
