---
name: Transcom Transportes & Comércio
description: Sistema de design minimalista Bento & Pill SaaS com a paleta oficial da Transcom (Vermelho, Laranja, Preto, Branco e Cinza).
colors:
  primary-red: "#E30613"
  secondary-orange: "#FF7300"
  carbon-black: "#0D0D0F"
  carbon-elevated: "#18181B"
  canvas-white: "#FFFFFF"
  bento-surface: "#F7F8FA"
  bento-card: "#F8F9FB"
  border-subtle: "#ECEEF2"
  border-pill: "#E4E7EC"
  text-muted: "#6E717A"
  text-subtle: "#9CA3AF"
typography:
  display:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  title:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
rounded:
  sm: "12px"
  md: "16px"
  lg: "24px"
  bento: "28px"
  hero: "36px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "80px"
components:
  button-dark-pill:
    backgroundColor: "{colors.carbon-black}"
    textColor: "{colors.canvas-white}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-pill:
    backgroundColor: "{colors.primary-red}"
    textColor: "{colors.canvas-white}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-ghost-pill:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.carbon-black}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  bento-card-light:
    backgroundColor: "{colors.bento-surface}"
    textColor: "{colors.carbon-black}"
    rounded: "{rounded.bento}"
    padding: "32px"
  bento-card-dark:
    backgroundColor: "{colors.carbon-black}"
    textColor: "{colors.canvas-white}"
    rounded: "{rounded.bento}"
    padding: "32px"
---

# Design System: Transcom Transportes & Comércio

## Overview

**Creative North Star: "Precision Bento & High-Contrast Editorial"**

Toda a arquitetura estrutural, espacial, tipográfica e de componentes deste sistema foi extraída da referência visual (`public/brand/referencia-visual.jpg`), porém **substituindo 100% das cores originais da referência pela paleta oficial da Transcom** (Vermelho, Laranja, Preto, Branco e Cinza).

A interface combina superfícies suaves em formato Bento (`28px` a `36px` de raio), respiro generoso em fundo branco puro (`#FFFFFF`), tipografia geométrica (`DM Sans`) enriquecida com pequenos selos gráficos inseridos diretamente entre as palavras dos títulos, e um jogo de contraste cirúrgico onde **1 card preto profundo (`#0D0D0F`)** ancora visualmente um conjunto de cards claros (`#F7F8FA`).

**Key Characteristics:**
- **Títulos com Selos Inline (Inline Icon Badges):** Pequenos ícones em formato squircle ou circular coloridos em Vermelho (`#E30613`) e Laranja (`#FF7300`) inseridos no meio das frases de destaque.
- **Navegação e Controles em Pílula (`9999px`):** Menu superior centralizado em pílula flutuante, tags de seção em pílula com borda fina e botões principais em formato cápsula.
- **Botões Pareados (Pill + Círculo `↗`):** Chamadas de ação que combinam uma pílula em Vermelho Transcom (`#E30613`) colada a um botão circular sólido em Preto (`#0D0D0F`) com seta diagonal `↗`.
- **Assimetria Editorial (`/01`, `/02`, `/03` + Bloco de Texto):** Três colunas estreitas numeradas à esquerda contrabalançadas por um bloco editorial à direita com palavra emoldurada por caixa de seleção gráfica.
- **Grid Bento 2x2 com Card Invertido:** Quatro grandes cards quadrados onde três usam superfície cinza-gelo (`#F7F8FA`) e o card superior direito é invertido em preto carbono (`#0D0D0F`).

---

## Colors

A paleta utiliza exclusivamente as cores oficiais da marca **Transcom** (extraídas do velocímetro oficial: Vermelho, Laranja, Preto, Branco e Cinza), aplicadas nas proporções de contraste da referência visual.

### Primary
- **Transcom Official Red** (`#E30613`): Cor de destaque primária da marca. Usada no ícone do card `/01`, no botão pílula de ação principal (ex: pareado com o círculo preto `↗`), no ícone de busca do card flutuante da Hero, na caixa de seleção de palavras destacadas e no primeiro selo inline dos títulos.

### Secondary
- **Speedometer Orange** (`#FF7300`): Cor de destaque secundária do arco externo do velocímetro. Usada no segundo selo inline dos títulos (ex: selo circular ou squircle com ícone/símbolo entre palavras) e em micro-indicadores de destaque.

### Neutral
- **Canvas White** (`#FFFFFF`): Plano de fundo principal da página, fundo do card flutuante de busca/filtro na Hero, fundo das pílulas de seção e superfície do ícone dentro do card Bento escuro.
- **Bento Surface Light** (`#F7F8FA`): Superfície padrão dos cards Bento claros (3 dos 4 cards do grid 2x2) e do container arredondado da Hero.
- **Vertical Feature Card Gray** (`#F8F9FB`): Superfície dos 3 cards verticais numerados (`/01`, `/02`, `/03`).
- **Carbon Black** (`#0D0D0F`): Cor de alto contraste usada na tipografia principal, nos botões primários da Hero e da barra de busca, nos círculos de ícone dos cards `/02` e `/03`, no botão circular `↗` pareado e no **card Bento invertido** (canto superior direito do grid 2x2).
- **Carbon Elevated** (`#18181B`): Usado em bordas internas sutis e botões circulares dentro do card Bento escuro.
- **Muted Gray** (`#6E717A`): Textos descritivos de parágrafos, legendas laterais e placeholders de filtros.
- **Subtle Index Gray** (`#9CA3AF`): Numeração `/01`, `/02`, `/03` no topo dos cards verticais.
- **Subtle Border** (`#ECEEF2` e `#E4E7EC`): Bordas de `1px` em pílulas de seção, divisórias de filtros e botões circulares de seta.

### Named Rules
- **The Zero-Blue Rule.** Nenhuma cor azul ou roxa da imagem de referência original deve ser usada; todo destaque cromático pertence exclusivamente ao Vermelho (`#E30613`) e ao Laranja (`#FF7300`) da Transcom.
- **The 3-to-1 Dark Anchor Rule.** Em grids Bento de 4 cards (2x2), exatamente 3 cards usam superfície clara (`#F7F8FA`) e 1 card (posição superior direita) usa superfície preta (`#0D0D0F`) para criar ponto focal imediato.

---

## Typography

**Display Font:** `DM Sans` (com fallback `system-ui, sans-serif`)
**Body Font:** `DM Sans` (com fallback `system-ui, sans-serif`)

**Character:** Geométrica, limpa e contemporânea, com kerning fechado (`-0.03em`) nos títulos e pesos médios (`500` e `600`) que evitam aspecto pesado, deixando os selos gráficos inline e o contraste das superfícies falarem mais alto.

### Hierarchy
- **Display Hero** (`600`, `3.25rem` a `3.75rem`, `line-height: 1.12`, `letter-spacing: -0.03em`): Título centralizado de 2 linhas na Hero, intercalado por 2 selos gráficos inline (`.inline-heading-badge`).
- **Section Headline** (`600`, `2rem` a `2.5rem`, `line-height: 1.18`, `letter-spacing: -0.025em`): Títulos das seções principais (bloco editorial à direita dos cards `/01–/03` e título da seção Bento 2x2).
- **Bento Card Title** (`500`, `1.5rem` a `1.75rem`, `line-height: 1.25`, `letter-spacing: -0.02em`): Títulos dentro dos 4 cards grandes do grid 2x2, posicionados logo abaixo do ícone circular superior.
- **Feature Card Title** (`600`, `1.0625rem`, `line-height: 1.3`): Títulos compactos em 2 linhas dentro dos cards verticais `/01`, `/02`, `/03`.
- **Body & Descriptions** (`400`, `0.875rem` a `0.9375rem`, `line-height: 1.55`): Subtítulo da Hero, descrições na base dos cards Bento e legenda alinhada à direita no cabeçalho do grid 2x2.
- **Index & Pill Labels** (`500`, `0.75rem`, `letter-spacing: -0.01em`): Marcadores `/01`, `/02`, `/03` e pílulas de categoria (`Feature`, `Talent`, etc.).

### Named Rules
- **The Inline-Badge Typography Rule.** Títulos principais (Hero e cabeçalho do Grid 2x2) incorporam pequenos selos gráficos (`36px–44px`, bordas arredondadas `12px` ou circulares, levemente rotacionados `-6deg` a `+6deg`) diretamente entre as palavras, como parte do fluxo do texto.
- **The Bounding-Box Highlight Rule.** No título editorial da seção de diferenciais, uma palavra-chave recebe cor de destaque (`#E30613`) envolvida por uma moldura retangular fina (`1px solid #E30613`) com 4 pequenos quadrados nos cantos (simulando uma caixa de seleção vetorial de design).

---

## Layout

A página é estruturada sobre um container centralizado (`max-w-[1200px]`, padding horizontal `24px` a `40px`) dividido em **3 grandes blocos arquiteturais** com espaçamento vertical generoso (`80px` a `112px` entre seções):

1. **Bloco 1 — Moldura Hero Contida (`rounded-[36px]`):**
   - Ao contrário de uma Hero que ocupa 100% da largura da tela sem margens, a Hero inteira (incluindo a barra de navegação no topo) fica dentro de um grande container arredondado (`margin: 16px`, `border-radius: 36px`, padding interno `24px 40px 48px`) com gradiente radial suave do cinza-gelo (`#F4F5F8`) nas bordas para branco puro no centro.
   - **Topo da Hero:** Barra de navegação distribuída em 3 colunas (Logo à esquerda | Pílula de links no centro | 2 botões pílula à direita).
   - **Centro da Hero:** Grupo de 3 avatares circulares sobrepostos (`-space-x-2`) → Título Display centralizado em 2 linhas com selos inline → Subtítulo curto centralizado → Botão pílula preto centralizado com ícone de seta em círculo branco.
   - **Base da Hero:** Grande card branco flutuante (`rounded-[28px]`, `padding: 28px 32px`) contendo cabeçalho de busca/filtro e uma linha horizontal com 3 seletores dropdown separados por espaço e 1 botão pílula preto à direita.

2. **Bloco 2 — Seção Assimétrica de Diferenciais (Grid 12 Colunas):**
   - **Lado Esquerdo (7 colunas — 3 Cards Verticais Iguais):** Grid de 3 colunas (`gap-5`) com cards verticais altos (`min-height: 300px`, `border-radius: 24px`, `padding: 24px`). Cada card tem `/01`, `/02`, `/03` no topo, espaço vazio no meio, e na metade inferior: ícone circular (`44px`), título em negrito e texto curto.
   - **Lado Direito (5 colunas — Bloco Editorial):** Alinhado verticalmente ao centro dos cards da esquerda, contendo: pílula de seção (`Feature`) no topo → título de 4 linhas com palavra destacada na caixa de seleção → par de botões na base (pílula vermelha `#E30613` + círculo preto `#0D0D0F` com seta `↗`).

3. **Bloco 3 — Seção Bento 2x2:**
   - **Cabeçalho da Seção:** Pílula de seção no topo esquerdo; abaixo dela, uma linha flexível com o título Display de 2 linhas (com selo inline) à esquerda e um parágrafo curto de 3 linhas alinhado à direita (`text-right`, `max-w-[260px]`).
   - **Grid 2x2 (`grid-cols-1 md:grid-cols-2 gap-6`):** 4 grandes cards quadrados (`min-height: 360px` a `400px`, `border-radius: 28px`, `padding: 36px`), distribuídos em layout flex vertical (`justify-between`):
     - **Topo do Card:** Ícone circular (`48px`) no canto superior esquerdo + Título grande logo abaixo (`mt-6`).
     - **Base do Card:** Parágrafo descritivo de 2 linhas (`max-w-[340px]`) + Linha inferior contendo pilha de 4 avatares sobrepostos à esquerda e botão circular `↗` (`44px`) à direita.

---

## Elevation & Depth

O sistema adota **Tonal Layering (Camadas Tonais)** como mecanismo primário de profundidade, reservando sombras projetadas apenas para elementos flutuantes dentro da Hero (a pílula de navegação e o card de busca/filtro).

### Shadow Vocabulary
- **Hero Search Card Shadow** (`0 20px 50px -12px rgba(13, 13, 15, 0.07)`): Sombra ampla e ultra-difusa que destaca o card branco de busca/cotação sobre o fundo cinza-claro da Hero.
- **Floating Nav Pill Shadow** (`0 4px 20px -2px rgba(13, 13, 15, 0.05)`): Sombra sutil sob a pílula central de links do cabeçalho e os botões do topo.
- **Inline Badge Shadow** (`0 6px 16px -4px rgba(227, 6, 19, 0.28)`): Sombra suave sob os pequenos selos gráficos inseridos nos títulos.

### Named Rules
- **The Flat Bento Rule.** Os cards `/01–/03` e os 4 cards do grid Bento 2x2 não usam `box-shadow` em repouso; sua separação do fundo branco da página ocorre puramente pelo contraste de superfície (`#F7F8FA` e `#0D0D0F` contra `#FFFFFF`).

---

## Shapes

Toda a linguagem formal é construída sobre **super-elipses suaves (squircle / large rounded rectangles)** combinadas com **pílulas perfeitas (`9999px`)** e **círculos puros (`50%`)**:

- **Moldura da Hero:** `36px` (`rounded-[36px]`).
- **Cards do Grid Bento 2x2 e Card de Busca:** `28px` (`rounded-[28px]`).
- **Cards Verticais `/01`, `/02`, `/03`:** `24px` (`rounded-[24px]`).
- **Selos Inline nos Títulos:** Squircle de `14px` (`rounded-[14px]`) ou círculo perfeito (`rounded-full`).
- **Botões, Tags e Barra de Navegação:** Pílula completa (`9999px`).
- **Ícones de Card e Botões de Seta `↗`:** Círculo perfeito (`w-11 h-11 rounded-full` ou `w-12 h-12 rounded-full`).

---

## Components

### 1. Floating Pill Navigation Header
- **Estrutura:** 3 zonas horizontais dentro do topo da Hero.
- **Esquerda:** Ícone circular preto/marca + nome da empresa em peso `600`.
- **Centro:** Pílula única (`bg-white/85 backdrop-blur-md rounded-full px-7 py-3 shadow-pill border border-white`) contendo 5 links (`Home`, `Feature`, `Talent`, `Pricing`, `Contact`) em `13px`, cor `#0D0D0F` para o ativo e `#6E717A` para os demais.
- **Direita:** Dois botões pílula lado a lado (`gap-2.5`): o primeiro sólido em `#0D0D0F` com texto branco (`padding: 10px 20px`, `13px`), e o segundo em branco `#FFFFFF` com texto `#0D0D0F` e borda `#ECEEF2`.

### 2. Hero Action Pill Button (with Inner Circle Arrow)
- **Formato:** Cápsula preta (`bg-[#0D0D0F] text-white rounded-full pl-6 pr-2 py-2`) centralizada abaixo do subtítulo da Hero.
- **Detalhe Assinatura:** À direita do texto do botão, dentro da pílula, há um pequeno círculo branco (`w-7 h-7 rounded-full bg-white text-[#0D0D0F]`) contendo uma seta `→`.

### 3. Hero Floating Search / Filter Bar Card
- **Container:** Card branco (`bg-white rounded-[28px] p-7 shadow-card border border-[#F0F1F5]`) posicionado na metade inferior da Hero.
- **Cabeçalho do Card:** Ícone circular (`w-7 h-7 rounded-full bg-[#E30613] text-white`) ao lado do título em negrito (`15px`), com subtítulo explicativo (`12px`, `#6E717A`) logo abaixo.
- **Linha de Controles (Base):** Grid de 4 colunas (`mt-6 pt-4 border-t border-[#F4F5F7]`): 3 campos seletores limpos (texto à esquerda + chevron `⌄` à direita em `#6E717A`) e 1 botão pílula sólido em `#0D0D0F` (`text-white rounded-full px-6 py-3 text-xs font-semibold`) na extremidade direita.

### 4. Numbered Vertical Cards (`/01`, `/02`, `/03`)
- **Container:** 3 cards verticais (`bg-[#F8F9FB] rounded-[24px] p-6 flex flex-col justify-between min-h-[290px]`).
- **Topo:** Índice `/01`, `/02`, `/03` em `12px`, cor `#9CA3AF`.
- **Corpo Inferior:**
  - Círculo de ícone (`w-12 h-12 rounded-full flex items-center justify-center mb-5`): no card `/01`, o círculo é Vermelho Transcom (`#E30613`) com anel externo suave (`ring-4 ring-[#E30613]/15`); nos cards `/02` e `/03`, o círculo é Preto (`#0D0D0F`) com anel (`ring-4 ring-black/5`).
  - Título em 2 linhas (`17px`, `font-semibold`, `#0D0D0F`).
  - Descrição curta em 2 linhas (`12.5px`, `#6E717A`, `mt-2`).

### 5. Paired CTA Button (Primary Pill + Detached Circle Arrow)
- **Composição:** Dois elementos colados horizontalmente (`inline-flex items-center gap-1.5`):
  1. Pílula principal em Vermelho Transcom (`bg-[#E30613] text-white rounded-full px-7 py-3.5 text-sm font-medium`).
  2. Botão circular independente em Preto (`w-12 h-12 rounded-full bg-[#0D0D0F] text-white flex items-center justify-center`) contendo o ícone de seta diagonal `↗`.

### 6. 2x2 Bento Showcase Cards (Light & Dark Variants)
- **Variante Clara (Cards 1, 3 e 4):**
  - Fundo `#F7F8FA`, borda `1px solid #ECEEF2`, raio `28px`, padding `36px`.
  - Topo: Círculo de ícone (`w-12 h-12 rounded-full bg-[#ECEEF2]/80 text-[#0D0D0F]`) + Título (`26px`, `font-medium`, `#0D0D0F`, `mt-5`).
  - Base: Descrição (`13.5px`, `#6E717A`, `mb-6`) + Linha rodapé com 4 avatares circulares sobrepostos (`w-10 h-10 rounded-full border-2 border-[#F7F8FA] -space-x-2.5`) à esquerda e botão circular `↗` (`w-11 h-11 rounded-full border border-[#E2E4E9] text-[#0D0D0F]`) à direita.
- **Variante Escura Invertida (Card 2 — Canto Superior Direito):**
  - Fundo `#0D0D0F`, texto branco `#FFFFFF`, raio `28px`, padding `36px`.
  - Topo: Círculo de ícone branco puro (`w-12 h-12 rounded-full bg-white text-[#0D0D0F]`) + Título (`26px`, `font-medium`, `#FFFFFF`, `mt-5`).
  - Base: Descrição (`13.5px`, `#A1A1AA`, `mb-6`) + Linha rodapé com 4 avatares sobrepostos (`border-2 border-[#0D0D0F]`) à esquerda e botão circular `↗` (`w-11 h-11 rounded-full border border-zinc-800 text-white`) à direita.

---

## Do's and Don'ts

### Do:
- **Do** manter exclusivamente a paleta da Transcom (`#E30613`, `#FF7300`, `#0D0D0F`, `#FFFFFF`, `#F7F8FA`, `#6E717A`) em todos os componentes extraídos da referência.
- **Do** usar pequenos selos gráficos inline (`.inline-heading-badge`) entre as palavras dos títulos principais da Hero e das seções Bento.
- **Do** aplicar a caixa de seleção vetorial (borda fina `#E30613` + 4 quadradinhos nos cantos) para destacar uma palavra-chave no título editorial.
- **Do** parear o botão pílula principal com um botão circular `↗` adjacente nas seções editoriais.
- **Do** inverter exatamente o card superior direito do grid Bento 2x2 para `#0D0D0F` enquanto os outros 3 permanecem em `#F7F8FA`.

### Don't:
- **Don't** usar azul, roxo ou lilás da imagem de referência original.
- **Don't** usar sombras pesadas nos cards Bento ou nos cards `/01–/03`; mantenha-os planos com contraste tonal sobre o fundo branco.
- **Don't** colar a Hero nas bordas da janela; mantenha a Hero dentro de sua moldura arredondada (`rounded-[36px]`) com margem externa branca.

2. **Bloco 2 — Seção Assimétrica de Diferenciais (Grid 12 Colunas):**
   - **Lado Esquerdo (7 colunas — 3 Cards Verticais Iguais):** Grid de 3 colunas (`gap-5`) com cards verticais altos (`min-height: 300px`, `border-radius: 24px`, `padding: 24px`). Cada card tem `/01`, `/02`, `/03` no topo, espaço vazio no meio, e na metade inferior: ícone circular (`44px`), título em negrito e texto curto.
   - **Lado Direito (5 colunas — Bloco Editorial):** Alinhado verticalmente ao centro dos cards da esquerda, contendo: pílula de seção (`Feature`) no topo → título de 4 linhas com palavra destacada na caixa de seleção → par de botões na base (pílula vermelha `#E30613` + círculo preto `#0D0D0F` com seta `↗`).

3. **Bloco 3 — Seção Bento 2x2:**
   - **Cabeçalho da Seção:** Pílula de seção no topo esquerdo; abaixo dela, uma linha flexível com o título Display de 2 linhas (com selo inline) à esquerda e um parágrafo curto de 3 linhas alinhado à direita (`text-right`, `max-w-[260px]`).
   - **Grid 2x2 (`grid-cols-1 md:grid-cols-2 gap-6`):** 4 grandes cards quadrados (`min-height: 360px` a `400px`, `border-radius: 28px`, `padding: 36px`), distribuídos em layout flex vertical (`justify-between`):
     - **Topo do Card:** Ícone circular (`48px`) no canto superior esquerdo + Título grande logo abaixo (`mt-6`).
     - **Base do Card:** Parágrafo descritivo de 2 linhas (`max-w-[340px]`) + Linha inferior contendo pilha de 4 avatares sobrepostos à esquerda e botão circular `↗` (`44px`) à direita.

---

## Elevation & Depth

O sistema adota **Tonal Layering (Camadas Tonais)** como mecanismo primário de profundidade, reservando sombras projetadas apenas para elementos flutuantes dentro da Hero (a pílula de navegação e o card de busca/filtro).

### Shadow Vocabulary
- **Hero Search Card Shadow** (`0 20px 50px -12px rgba(13, 13, 15, 0.07)`): Sombra ampla e ultra-difusa que destaca o card branco de busca/cotação sobre o fundo cinza-claro da Hero.
- **Floating Nav Pill Shadow** (`0 4px 20px -2px rgba(13, 13, 15, 0.05)`): Sombra sutil sob a pílula central de links do cabeçalho e os botões do topo.
- **Inline Badge Shadow** (`0 6px 16px -4px rgba(227, 6, 19, 0.28)`): Sombra suave sob os pequenos selos gráficos inseridos nos títulos.

### Named Rules
- **The Flat Bento Rule.** Os cards `/01–/03` e os 4 cards do grid Bento 2x2 não usam `box-shadow` em repouso; sua separação do fundo branco da página ocorre puramente pelo contraste de superfície (`#F7F8FA` e `#0D0D0F` contra `#FFFFFF`).

---

## Shapes

Toda a linguagem formal é construída sobre **super-elipses suaves (squircle / large rounded rectangles)** combinadas com **pílulas perfeitas (`9999px`)** e **círculos puros (`50%`)**:

- **Moldura da Hero:** `36px` (`rounded-[36px]`).
- **Cards do Grid Bento 2x2 e Card de Busca:** `28px` (`rounded-[28px]`).
- **Cards Verticais `/01`, `/02`, `/03`:** `24px` (`rounded-[24px]`).
- **Selos Inline nos Títulos:** Squircle de `14px` (`rounded-[14px]`) ou círculo perfeito (`rounded-full`).
- **Botões, Tags e Barra de Navegação:** Pílula completa (`9999px`).
- **Ícones de Card e Botões de Seta `↗`:** Círculo perfeito (`w-11 h-11 rounded-full` ou `w-12 h-12 rounded-full`).

---

## Components

### 1. Floating Pill Navigation Header
- **Estrutura:** 3 zonas horizontais dentro do topo da Hero.
- **Esquerda:** Ícone circular preto/marca + nome da empresa em peso `600`.
- **Centro:** Pílula única (`bg-white/85 backdrop-blur-md rounded-full px-7 py-3 shadow-pill border border-white`) contendo 5 links (`Home`, `Feature`, `Talent`, `Pricing`, `Contact`) em `13px`, cor `#0D0D0F` para o ativo e `#6E717A` para os demais.
- **Direita:** Dois botões pílula lado a lado (`gap-2.5`): o primeiro sólido em `#0D0D0F` com texto branco (`padding: 10px 20px`, `13px`), e o segundo em branco `#FFFFFF` com texto `#0D0D0F` e borda `#ECEEF2`.

### 2. Hero Action Pill Button (with Inner Circle Arrow)
- **Formato:** Cápsula preta (`bg-[#0D0D0F] text-white rounded-full pl-6 pr-2 py-2`) centralizada abaixo do subtítulo da Hero.
- **Detalhe Assinatura:** À direita do texto do botão, dentro da pílula, há um pequeno círculo branco (`w-7 h-7 rounded-full bg-white text-[#0D0D0F]`) contendo uma seta `→`.

### 3. Hero Floating Search / Filter Bar Card
- **Container:** Card branco (`bg-white rounded-[28px] p-7 shadow-card border border-[#F0F1F5]`) posicionado na metade inferior da Hero.
- **Cabeçalho do Card:** Ícone circular (`w-7 h-7 rounded-full bg-[#E30613] text-white`) ao lado do título em negrito (`15px`), com subtítulo explicativo (`12px`, `#6E717A`) logo abaixo.
- **Linha de Controles (Base):** Grid de 4 colunas (`mt-6 pt-4 border-t border-[#F4F5F7]`): 3 campos seletores limpos (texto à esquerda + chevron `⌄` à direita em `#6E717A`) e 1 botão pílula sólido em `#0D0D0F` (`text-white rounded-full px-6 py-3 text-xs font-semibold`) na extremidade direita.

### 4. Numbered Vertical Cards (`/01`, `/02`, `/03`)
- **Container:** 3 cards verticais (`bg-[#F8F9FB] rounded-[24px] p-6 flex flex-col justify-between min-h-[290px]`).
- **Topo:** Índice `/01`, `/02`, `/03` em `12px`, cor `#9CA3AF`.
- **Corpo Inferior:**
  - Círculo de ícone (`w-12 h-12 rounded-full flex items-center justify-center mb-5`): no card `/01`, o círculo é Vermelho Transcom (`#E30613`) com anel externo suave (`ring-4 ring-[#E30613]/15`); nos cards `/02` e `/03`, o círculo é Preto (`#0D0D0F`) com anel (`ring-4 ring-black/5`).
  - Título em 2 linhas (`17px`, `font-semibold`, `#0D0D0F`).
  - Descrição curta em 2 linhas (`12.5px`, `#6E717A`, `mt-2`).

### 5. Paired CTA Button (Primary Pill + Detached Circle Arrow)
- **Composição:** Dois elementos colados horizontalmente (`inline-flex items-center gap-1.5`):
  1. Pílula principal em Vermelho Transcom (`bg-[#E30613] text-white rounded-full px-7 py-3.5 text-sm font-medium`).
  2. Botão circular independente em Preto (`w-12 h-12 rounded-full bg-[#0D0D0F] text-white flex items-center justify-center`) contendo o ícone de seta diagonal `↗`.

### 6. 2x2 Bento Showcase Cards (Light & Dark Variants)
- **Variante Clara (Cards 1, 3 e 4):**
  - Fundo `#F7F8FA`, borda `1px solid #ECEEF2`, raio `28px`, padding `36px`.
  - Topo: Círculo de ícone (`w-12 h-12 rounded-full bg-[#ECEEF2]/80 text-[#0D0D0F]`) + Título (`26px`, `font-medium`, `#0D0D0F`, `mt-5`).
  - Base: Descrição (`13.5px`, `#6E717A`, `mb-6`) + Linha rodapé com 4 avatares circulares sobrepostos (`w-10 h-10 rounded-full border-2 border-[#F7F8FA] -space-x-2.5`) à esquerda e botão circular `↗` (`w-11 h-11 rounded-full border border-[#E2E4E9] text-[#0D0D0F]`) à direita.
- **Variante Escura Invertida (Card 2 — Canto Superior Direito):**
  - Fundo `#0D0D0F`, texto branco `#FFFFFF`, raio `28px`, padding `36px`.
  - Topo: Círculo de ícone branco puro (`w-12 h-12 rounded-full bg-white text-[#0D0D0F]`) + Título (`26px`, `font-medium`, `#FFFFFF`, `mt-5`).
  - Base: Descrição (`13.5px`, `#A1A1AA`, `mb-6`) + Linha rodapé com 4 avatares sobrepostos (`border-2 border-[#0D0D0F]`) à esquerda e botão circular `↗` (`w-11 h-11 rounded-full border border-zinc-800 text-white`) à direita.

---

## Do's and Don'ts

### Do:
- **Do** manter exclusivamente a paleta da Transcom (`#E30613`, `#FF7300`, `#0D0D0F`, `#FFFFFF`, `#F7F8FA`, `#6E717A`) em todos os componentes extraídos da referência.
- **Do** usar pequenos selos gráficos inline (`.inline-heading-badge`) entre as palavras dos títulos principais da Hero e das seções Bento.
- **Do** aplicar a caixa de seleção vetorial (borda fina `#E30613` + 4 quadradinhos nos cantos) para destacar uma palavra-chave no título editorial.
- **Do** parear o botão pílula principal com um botão circular `↗` adjacente nas seções editoriais.
- **Do** inverter exatamente o card superior direito do grid Bento 2x2 para `#0D0D0F` enquanto os outros 3 permanecem em `#F7F8FA`.

### Don't:
- **Don't** usar azul, roxo ou lilás da imagem de referência original.
- **Don't** usar sombras pesadas nos cards Bento ou nos cards `/01–/03`; mantenha-os planos com contraste tonal sobre o fundo branco.
- **Don't** colar a Hero nas bordas da janela; mantenha a Hero dentro de sua moldura arredondada (`rounded-[36px]`) com margem externa branca.

