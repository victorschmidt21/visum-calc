## ADDED Requirements

### Requirement: Metadados exportados via `generateMetadata` ou `metadata`
Cada página SHALL exportar metadados usando a Metadata API do Next.js (objeto `metadata` estático ou função `generateMetadata`), substituindo o componente `<MetaHead>` / `react-helmet-async`.

#### Scenario: Página raiz tem title e description no HTML
- **WHEN** qualquer cliente faz GET em `/`
- **THEN** o HTML SHALL conter `<title>` e `<meta name="description">` no `<head>` sem depender de JavaScript

#### Scenario: Página dinâmica tem metadados específicos
- **WHEN** qualquer cliente faz GET em `/servicos/consultoria`
- **THEN** o `<title>` SHALL conter o nome do serviço específico (não um título genérico)

### Requirement: Open Graph e canonical URL presentes em todas as páginas
Cada página SHALL incluir `openGraph.url` com a URL canônica absoluta e `openGraph.title` nos metadados.

#### Scenario: Open Graph disponível sem JS
- **WHEN** um crawler de redes sociais (Facebook, LinkedIn) acessa qualquer página
- **THEN** os `<meta property="og:title">` e `<meta property="og:url">` SHALL estar presentes no HTML inicial

### Requirement: Remoção de `react-helmet-async` e `<MetaHead>`
O componente `client/src/components/seo/MetaHead.tsx` e a dependência `react-helmet-async` SHALL ser removidos após a migração.

#### Scenario: Build sem react-helmet-async
- **WHEN** o build do Next.js é executado após a migração
- **THEN** o bundle de produção SHALL não conter `react-helmet-async`

#### Scenario: Nenhuma página usa `<MetaHead>`
- **WHEN** o codebase é analisado após a migração
- **THEN** nenhum arquivo SHALL importar ou usar o componente `MetaHead` ou `Helmet`

### Requirement: Metadados base no layout raiz
O `app/layout.tsx` SHALL definir um objeto `metadata` base com `title.template`, `description` padrão e `openGraph` padrão que as páginas filhas possam sobrescrever.

#### Scenario: Página sem metadados próprios herda do layout
- **WHEN** uma página não exporta `metadata` ou `generateMetadata`
- **THEN** o `<title>` SHALL usar o template definido no layout raiz
