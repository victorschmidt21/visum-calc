## ADDED Requirements

### Requirement: Estrutura de diretórios App Router
O projeto SHALL adotar a convenção de diretórios do Next.js App Router: `app/` para rotas, `components/` para componentes compartilhados, `lib/` para utilitários e `hooks/` para hooks customizados — todos na raiz do projeto.

#### Scenario: Rota raiz acessível
- **WHEN** o usuário acessa `/`
- **THEN** o servidor SHALL renderizar o conteúdo do arquivo `app/page.tsx` com HTML completo (não apenas `<div id="root"></div>`)

#### Scenario: Rota dinâmica de serviço acessível
- **WHEN** o usuário acessa `/servicos/consultoria`
- **THEN** o servidor SHALL renderizar o conteúdo do arquivo `app/servicos/[id]/page.tsx` com o `id` correto resolvido

#### Scenario: Página não encontrada
- **WHEN** o usuário acessa uma rota inexistente
- **THEN** o servidor SHALL retornar status HTTP 404 e renderizar `app/not-found.tsx`

### Requirement: Layout raiz com providers
O `app/layout.tsx` SHALL envolver todas as páginas com os providers necessários: `QueryClientProvider`, `TooltipProvider` e `Toaster`.

#### Scenario: Providers disponíveis em todas as páginas
- **WHEN** qualquer página é renderizada
- **THEN** TanStack Query, TooltipProvider e Toaster SHALL estar disponíveis sem importação adicional na página

### Requirement: Configuração de proxy da API em desenvolvimento
O `next.config.js` SHALL configurar rewrites para redirecionar `/api/*` para o servidor Express em `http://localhost:5000`.

#### Scenario: Chamada de API em desenvolvimento
- **WHEN** o frontend chama `/api/contato` em ambiente de desenvolvimento
- **THEN** a requisição SHALL ser encaminhada para `http://localhost:5000/api/contato` transparentemente

### Requirement: Path alias `@/` funcional
O projeto SHALL manter o alias `@/` apontando para a raiz do projeto (ou `src/` se houver), configurado no `tsconfig.json`.

#### Scenario: Import com alias resolve corretamente
- **WHEN** um componente importa `@/components/ui/button`
- **THEN** o TypeScript e o Next.js SHALL resolver para o arquivo correto sem erro de módulo
