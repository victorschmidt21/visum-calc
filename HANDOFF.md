# Manual de Desenvolvimento & Handoff - Visum Calc

Este documento contém todas as especificações técnicas para que um desenvolvedor WordPress possa recriar o site fielmente utilizando Elementor, Divi, ou um tema customizado.

## 1. Identidade Visual

### Cores Principais
- **Primária (Verde Visum):** `#143e4b`
- **Secundária (Amarelo Ouro):** `#d18c1a`
- **Background Claro:** `#F9FAFB` (Gray 50)
- **Texto Escuro:** `#111827` (Gray 900)
- **Texto Suave:** `#4B5563` (Gray 600)

### Tipografia
- **Títulos (Headings):** `Plus Jakarta Sans` (Google Fonts)
  - Pesos: 600 (SemiBold), 700 (Bold)
- **Corpo (Body):** `Inter` (Google Fonts)
  - Pesos: 400 (Regular), 500 (Medium)

## 2. Estrutura do Site (Sitemap)

O site é uma **One Page** (Página Única) com as seguintes sessões:

1.  **Header (Menu):**
    -   Logo à esquerda.
    -   Links: Home, Sobre Nós, Serviços, Quem Atendemos, Contato.
    -   Botão CTA: "Fale com Especialista" (Cor: Secundária).
    -   *Comportamento:* Fixo no topo, transparente inicialmente, fundo branco ao rolar.

2.  **Hero (Capa):**
    -   Fundo: Imagem corporativa escura com overlay verde (`#143e4b` com 80-90% opacidade).
    -   Título Grande: Branco.
    -   Destaque: Gradiente dourado no texto "Decisões Seguras".

3.  **Sobre Nós:**
    -   Layout: 2 Colunas.
    -   Esquerda: Foto da equipe/reunião com bordas arredondadas.
    -   Direita: Texto institucional e lista de diferenciais com ícones de check.

4.  **Diferenciais (Grid):**
    -   Fundo: Cor Primária (`#143e4b`).
    -   Layout: Grid de 3 colunas.
    -   Cards: Fundo transparente com borda sutil, ícones na cor Secundária.

5.  **Serviços:**
    -   Layout: Grid de cards (4 por linha em desktop).
    -   Cards: Branco, sombra suave, efeito hover (borda ou elevação).
    -   Ícones: Lucide React (ou FontAwesome no WP).

6.  **Quem Atendemos:**
    -   Layout: 3 Colunas.
    -   Cards: Estilo minimalista, ícone circular.

7.  **Depoimentos:**
    -   Fundo: Cor Primária.
    -   Estilo: "Glassmorphism" (fundo translúcido) para os cards.

8.  **Contato:**
    -   Layout: 2 Colunas.
    -   Esquerda: Informações de contato (Tel, Email, Endereço).
    -   Direita: Formulário de contato (Nome, Tel, Email, Assunto, Mensagem).

9.  **Footer:**
    -   Fundo: Cor Primária Escura.
    -   4 Colunas: Logo/Resumo, Links Rápidos, Serviços, Contato.

## 3. Imagens e Ativos
As imagens geradas para o projeto estão disponíveis e devem ser carregadas na biblioteca de mídia do WordPress:
- `hero-bg.png`: Para o fundo da sessão Hero.
- `about-team.png`: Para a sessão Sobre Nós.
- `abstract-bg.png`: Para detalhes de fundo na sessão de Serviços.

## 4. Recomendações para Implementação WP

### Opção A: Elementor Pro (Recomendada)
1.  Configure as **Cores Globais** e **Fontes Globais** no painel do Elementor conforme a seção 1.
2.  Use o widget "Container" (Flexbox) para criar os grids.
3.  Para o formulário, use o **Elementor Forms** ou **Contact Form 7**.

### Opção B: Tema Customizado (Advanced Custom Fields)
1.  Crie um `front-page.php`.
2.  Use `get_template_part()` para separar as sessões (`hero`, `about`, `services`, etc.).
3.  Cadastre os serviços e depoimentos como **Custom Post Types** (CPT UI) se o cliente quiser editar facilmente.

---
*Documento gerado pelo Replit Agent para facilitar a migração.*
