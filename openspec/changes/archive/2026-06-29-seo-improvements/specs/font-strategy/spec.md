### Requirement: Identificar fonte atual e migrar para `next/font`

Fontes carregadas via `@import` em CSS ou `<link>` no HTML bloqueiam renderização e causam CLS (flash de fonte incorreta). `next/font` auto-hospeda as fontes e elimina ambos os problemas.

#### Scenario: Fonte atual identificada no globals.css

PREREQUISITE: Antes de implementar, ler `app/globals.css` para identificar se há `@import url('https://fonts.googleapis.com/...')` ou `font-family` declarations que referenciem fontes externas.

Se houver fonte Google Fonts importada via CSS:
- Identificar o nome da família (ex: `Montserrat`, `Inter`, `Playfair Display`)
- Identificar os `weights` e `subsets` usados
- Remover o `@import` do CSS
- Implementar via `next/font/google` no layout

#### Scenario: next/font carrega a fonte heading (usada em `font-heading`)

Dado que o projeto usa a classe Tailwind `font-heading` (visível em `About.tsx`: `font-heading text-primary`), a fonte deve ser carregada e exposta como variável CSS.

MODIFIED `app/layout.tsx`:
```tsx
import { Montserrat } from "next/font/google"; // ou a fonte identificada

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={headingFont.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

A variável `--font-heading` já deve estar referenciada no Tailwind config. Se não estiver, adicionar em `tailwind.config.ts` (ou no CSS via `@theme`):
```css
@theme {
  --font-heading: var(--font-heading);
}
```

#### Scenario: Fonte de corpo (se houver) também migrada

Se o `globals.css` também importar uma fonte para `font-body` ou `font-sans`:
- Adicionar segunda fonte ao layout com variável `--font-body` ou `--font-sans`
- Ambas as fontes são passadas como `className` concatenado no `<html>`

#### Scenario: @import de Google Fonts removido do CSS

MODIFIED `app/globals.css`:
- Remove qualquer `@import url('https://fonts.googleapis.com/...')` 
- Remove `<link rel="preconnect" href="https://fonts.googleapis.com">` se estiver em algum arquivo (não em globals.css normalmente, mas verificar layout.tsx)
- A variável CSS `--font-heading` passa a ser definida pelo `next/font` em vez de pelo `@import`

#### Scenario: Build não quebra se fonte não encontrada

Se a fonte identificada não existir exatamente com esse nome no `next/font/google`, o build falhará com erro claro. Nesse caso:
- Verificar o nome exato da família no Google Fonts
- Ajustar o import para o nome correto (ex: `PlayfairDisplay` não `Playfair Display`)

---

### Requirement: Sem regressão no estilo visual

#### Scenario: Classes Tailwind `font-heading` continuam funcionando

Após a migração, qualquer elemento com `className="... font-heading ..."` deve continuar renderizando a mesma fonte — a variável CSS `--font-heading` agora é resolvida pelo `next/font` em vez do `@import`.

UNCHANGED: qualquer arquivo que use `font-heading` como classe Tailwind — a configuração da variável CSS é transparente para os consumidores.
