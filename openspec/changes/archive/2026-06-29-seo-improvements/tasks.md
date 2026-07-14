## 1. Identificar fonte atual

- [x] 1.1 Ler `app/globals.css` e identificar se há `@import` de Google Fonts e qual a família usada
- [x] 1.2 Confirmar o nome exato da fonte no catálogo `next/font/google`

## 2. Componente JsonLd

- [x] 2.1 Criar `components/seo/JsonLd.tsx` — Server Component que recebe `schema` e renderiza `<script type="application/ld+json">`

## 3. Layout raiz (app/layout.tsx)

- [x] 3.1 Adicionar `next/font` — importar a fonte identificada, definir variável `--font-heading`, aplicar no `<html className>`
- [x] 3.2 Remover `@import` de Google Fonts do `app/globals.css` (se existir)
- [x] 3.3 Adicionar `twitter` ao objeto `metadata` (card, title, description, images)
- [x] 3.4 Exportar `viewport` separado do `metadata` (importar `Viewport` de `"next"`)
- [x] 3.5 Adicionar `robots: { index: true, follow: true }` ao `metadata`
- [x] 3.6 Adicionar `<JsonLd>` com schema `Organization` + `LocalBusiness` dentro do `<body>`

## 4. Sitemap e Robots dinâmicos

- [x] 4.1 Criar `app/sitemap.ts` com todas as rotas válidas (home, noticias, contato, 5 serviços)
- [x] 4.2 Criar `app/robots.ts` apontando para `https://visumcalc.com.br/sitemap.xml`
- [x] 4.3 Remover `public/sitemap.xml` (substituído por sitemap.ts)
- [x] 4.4 Remover `public/robots.txt` (substituído por robots.ts)

## 5. JSON-LD nas páginas internas

- [x] 5.1 Adicionar `<JsonLd>` BreadcrumbList em `app/noticias/page.tsx`
- [x] 5.2 Adicionar `<JsonLd>` BreadcrumbList em `app/contato/page.tsx`
- [x] 5.3 Adicionar `<JsonLd>` BreadcrumbList + Service schema em `app/servicos/[id]/page.tsx` (usando dados de `servicesData`)

## 6. Otimização de imagens com next/image

- [x] 6.1 Substituir `<img>` por `<Image>` no `components/layout/Navbar.tsx` (ambos os logos, com `priority`)
- [x] 6.2 Substituir `<img>` por `<Image>` no `components/layout/Footer.tsx` (logo do footer)
- [x] 6.3 Substituir `<img>` por `<Image>` no `components/sections/About.tsx` (foto da equipe, padrão `fill` + `aspect-[4/3]`)
- [x] 6.4 Verificar `components/sections/Services.tsx` — se houver `<img>`, substituir por `<Image>`; se for CSS backgroundImage, não alterar

## 7. Verificação e build

- [x] 7.1 Rodar `npm run build` e confirmar que não há erros de TypeScript ou Next.js
- [x] 7.2 Verificar `/sitemap.xml` e `/robots.txt` acessíveis no browser com conteúdo correto
- [x] 7.3 Verificar JSON-LD via `curl http://localhost:3000/ | grep -o 'application/ld+json.*'` ou DevTools
- [x] 7.4 Verificar Twitter Card via `<meta name="twitter:card">` no HTML renderizado
