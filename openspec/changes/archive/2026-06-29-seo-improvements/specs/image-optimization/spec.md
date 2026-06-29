### Requirement: Substituir `<img>` por `next/image` nos componentes identificados

Tags `<img>` nativas não têm lazy loading automático, não geram srcset, e causam CLS quando sem dimensões explícitas. Os 4 componentes identificados na auditoria devem usar `<Image>` do `next/image`.

#### Scenario: Navbar usa `next/image` para logo

MODIFIED `components/layout/Navbar.tsx`:
- Adiciona `import Image from "next/image"` no topo
- Remove `const logo = "/logo.png"` e `const logo2 = "/logo2.png"` (constantes redundantes)
- Substitui ambos os `<img src={logo...} alt="Logo" width={200} height={100} />` por:
  ```tsx
  <Image src="/logo.png" alt="Visum Calc" width={200} height={100} priority />
  // e para logo2:
  <Image src="/logo2.png" alt="Visum Calc" width={200} height={100} priority />
  ```
- `priority` porque o logo está above-the-fold e participa do LCP.

#### Scenario: Footer usa `next/image` para logo

MODIFIED `components/layout/Footer.tsx`:
- Adiciona `import Image from "next/image"`
- Localiza `<img>` do logo no footer e substitui por `<Image>` com dimensões equivalentes e `priority={false}` (below-the-fold).

#### Scenario: About usa `next/image` para foto da equipe

MODIFIED `components/sections/About.tsx`:
- Adiciona `import Image from "next/image"`
- Remove `const aboutImg = "/generated_images/..."` (constante inline é suficiente)
- O `<img src={aboutImg} ...>` está dentro de `<div className="relative rounded-2xl overflow-hidden shadow-2xl">` com altura não-fixa.
- Substitui por padrão `fill` com container posicionado:
  ```tsx
  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
    <Image
      src="/generated_images/professional_business_meeting_for_about_us_section.png"
      alt="Equipe Visum Calc em reunião de negócios"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover hover:scale-105 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
  </div>
  ```
- Remove `className="w-full h-auto"` do `<img>` original pois `fill` gerencia isso.
- Adiciona `aspect-[4/3]` ao container para manter proporção sem CLS.

#### Scenario: Services section usa `next/image` para imagem de fundo

MODIFIED `components/sections/Services.tsx` (se houver `<img>` tag — verificar):
- Se houver `<img>` de background ou decorativa, substituir por `<Image>` com `fill` e `sizes="100vw"`.
- Se a imagem for usada como CSS `backgroundImage` string (como no Hero), não alterar — CSS backgroundImage não é `<img>`.

---

### Requirement: Alt text descritivo em todas as imagens

Alt text vazio ou genérico ("Logo", "image") prejudica acessibilidade e SEO.

#### Scenario: Alt texts são descritivos

- Navbar logos: `alt="Visum Calc"` (nome da empresa, não "Logo")
- Footer logo: `alt="Visum Calc"`  
- About: `alt="Equipe Visum Calc em reunião de negócios"`
- Imagens de serviço no ServiceDetailClient: verificar se já têm alt adequado; se não, adicionar descrição do serviço.

---

### Requirement: Configurar domínios permitidos no next.config.js

`next/image` requer que domínios externos sejam listados. Como todas as imagens são locais (`public/`), não há necessidade de configuração adicional no `next.config.js` para este caso.

#### Scenario: Imagens locais não requerem configuração de domínio

UNCHANGED `next.config.js` — imagens servidas de `public/` são locais e não precisam de `images.remotePatterns`. Nenhuma alteração necessária.
