## ADDED Requirements

### Requirement: HTML server-rendered nas páginas principais
As páginas `/`, `/servicos/[id]`, `/noticias` e `/contato` SHALL ser renderizadas no servidor, de modo que o HTML retornado contenha o conteúdo visível (não apenas scripts JS).

#### Scenario: Crawler recebe conteúdo HTML completo
- **WHEN** um bot de busca (sem JS) faz GET em `/`
- **THEN** a resposta HTTP SHALL conter o texto do conteúdo da home page no corpo HTML (não apenas `<div id="root">`)

#### Scenario: Página de serviço renderizada no servidor
- **WHEN** qualquer cliente faz GET em `/servicos/consultoria`
- **THEN** a resposta SHALL conter o HTML renderizado do componente `ServiceDetail` com os dados do serviço correspondente

### Requirement: Geração estática das rotas de serviço
A rota `/servicos/[id]` SHALL usar `generateStaticParams` para pré-gerar todas as variações conhecidas em build time.

#### Scenario: Rota de serviço pré-gerada
- **WHEN** o build do Next.js é executado
- **THEN** cada ID de serviço retornado por `generateStaticParams` SHALL gerar um arquivo HTML estático correspondente

#### Scenario: Rota de serviço desconhecida retorna 404
- **WHEN** o usuário acessa `/servicos/id-inexistente`
- **THEN** o servidor SHALL retornar status 404 (comportamento `notFound()` ou `dynamicParams: false`)

### Requirement: Componentes interativos marcados como Client Components
Todo componente que usa `useState`, `useEffect`, event handlers ou hooks de terceiros SHALL ter a diretiva `"use client"` no topo do arquivo.

#### Scenario: Componente interativo hidrata sem erro
- **WHEN** a página carrega no browser com JS habilitado
- **THEN** componentes com `"use client"` SHALL hidratar sem erros de hidratação no console

#### Scenario: Server Component não usa hooks React
- **WHEN** um arquivo de página sem `"use client"` tenta importar `useState`
- **THEN** o build SHALL falhar com erro claro, impedindo deploy de código incorreto
