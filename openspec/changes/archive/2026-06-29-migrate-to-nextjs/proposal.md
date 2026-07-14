## Why

O projeto atual usa React + Vite com roteamento client-side (wouter) e SEO manual via `react-helmet-async`, o que impede rastreamento eficiente por motores de busca e aumenta o tempo de carregamento inicial. Migrar para Next.js (App Router) entrega SSR/SSG nativos, Metadata API integrada e melhor performance de carregamento — sem adicionar uma camada de infra extra.

## What Changes

- **Remoção** do Vite e seus plugins (`@vitejs/plugin-react`, plugins Replit) como bundler principal
- **Remoção** do `wouter` como roteador — substituído pelo file-based routing do Next.js App Router
- **Remoção** do `react-helmet-async` — substituído pela Metadata API nativa do Next.js
- **Migração** da estrutura `client/src/pages/` para `app/` directory (App Router)
- **Migração** dos componentes React existentes para Client/Server Components conforme necessário
- **Migração** das rotas da API Express para Next.js Route Handlers (`app/api/`) **OU** manutenção do servidor Express como backend separado (decisão de design)
- **BREAKING**: estrutura de diretórios muda de `client/src/` para `app/` e `components/` na raiz
- **BREAKING**: scripts de build e dev mudam (`next dev`, `next build`, `next start`)

## Capabilities

### New Capabilities
- `nextjs-app-router`: Configuração do Next.js com App Router, incluindo estrutura de diretórios, `layout.tsx` raiz, providers e migração das páginas existentes
- `server-rendering`: SSR/SSG por página — `generateStaticParams`, `generateMetadata`, e escolha de estratégia de renderização por rota
- `nextjs-metadata-api`: Substituição do `react-helmet-async` pela Metadata API do Next.js para títulos, descrições, Open Graph e canonical URLs

### Modified Capabilities
<!-- Nenhuma spec existente em openspec/specs/ — sem modificações de capabilities existentes -->

## Impact

- **Frontend**: toda a árvore `client/src/` é reorganizada; componentes Radix UI, Framer Motion e TanStack Query permanecem, mas componentes interativos precisam de diretiva `"use client"`
- **Backend**: servidor Express em `server/` pode ser mantido separado ou migrado para Route Handlers do Next.js — escopo definido no design
- **Dependências removidas**: `vite`, `@vitejs/plugin-react`, `wouter`, `react-helmet-async` e plugins Replit
- **Dependências adicionadas**: `next`
- **Infraestrutura**: deploy muda de SPA estática para Node.js server (ou Vercel/similar com suporte a Next.js)
- **Auth/Sessions**: Express session + Passport permanecem no backend; se migrar para Route Handlers, precisam de adaptação
