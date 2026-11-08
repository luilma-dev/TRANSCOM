"use client";

import React, { useEffect, useRef, useState } from "react";
import { getAssetPath } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Compass,
  Eye,
  FileSpreadsheet,
  Headset,
  History,
  Layers,
  MapPin,
  Radio,
  ShieldCheck,
  Snowflake,
  Truck,
  Users,
} from "lucide-react";

/* ============================================================================
 * CONTEÚDO INSTITUCIONAL EDITÁVEL — QUEM SOMOS (TRANSCOM)
 * Todos os textos e caminhos de fotos abaixo podem ser editados facilmente
 * sem necessidade de alterar a estrutura visual do componente.
 * ========================================================================== */

export const NOSSA_HISTORIA_CONTEUDO = {
  etiqueta: "Nossa história",
  titulo: "Uma trajetória construída na estrada, no rigor técnico e na confiança.",
  paragrafoPrincipal:
    "A história da Transcom é marcada pela dedicação ao transporte rodoviário de cargas e pela busca constante por excelência operacional. Ao longo de sua caminhada, a empresa estruturou processos sólidos para atender às exigências da cadeia fria e da logística moderna.",
  paragrafoSecundario:
    "Cada etapa dessa evolução reflete o compromisso em preservar a qualidade dos produtos transportados e construir parcerias duradouras com clientes, embarcadores e colaboradores.",
  indicadores: [
    {
      id: "experiencia",
      prefixo: "+",
      numero: "15",
      sufixo: "anos",
      titulo: "De atuação na estrada",
      descricao: "Solidez e tradição no transporte rodoviário e cadeia fria.",
    },
    {
      id: "quilometragem",
      prefixo: "+",
      numero: "1,8M",
      sufixo: "km",
      titulo: "Rodados por ano",
      descricao: "Cruzando rotas estratégicas com rastreamento integral.",
    },
    {
      id: "toneladas",
      prefixo: "+",
      numero: "320k",
      sufixo: "ton",
      titulo: "Cargas transportadas",
      descricao: "Alimentos refrigerados e congelados em temperatura ideal.",
    },
    {
      id: "pontualidade",
      prefixo: "",
      numero: "99,4%",
      sufixo: "SLA",
      titulo: "Índice de eficiência",
      descricao: "Entregas dentro da janela programada com segurança.",
    },
  ],
};

export const NOSSA_ESTRUTURA_ITENS = [
  {
    id: "frota",
    numero: "01",
    titulo: "Frota própria e moderna",
    subtitulo: "Disponibilidade, manutenção preventiva e renovação contínua",
    descricao:
      "Veículos dimensionados para operações de coleta, transferência e distribuição, garantindo segurança mecânica, pontualidade e padronização em todas as viagens.",
    imagem: "/media/fleet-lineup.jpg",
    legenda: "Frota Transcom alinhada e pronta para operação rodoviária.",
    icone: Truck,
  },
  {
    id: "refrigerado",
    numero: "02",
    titulo: "Transporte refrigerado e congelado",
    subtitulo: "Integridade térmica do embarque à descarga",
    descricao:
      "Implementos frigoríficos com isolamento de alto desempenho e equipamentos de refrigeração calibrados para manter a estabilidade térmica exigida por alimentos, proteínas e perecíveis.",
    imagem: "/media/pilar-cadeia-fria.jpg?v=1",
    legenda: "Controle rigoroso de temperatura para preservação da cadeia fria.",
    icone: Snowflake,
  },
  {
    id: "monitoramento",
    numero: "03",
    titulo: "Monitoramento e gerenciamento",
    subtitulo: "Rastreabilidade e visibilidade em tempo real",
    descricao:
      "Acompanhamento dedicado de rotas, controle de paradas, telemetria de temperatura e comunicação direta para assegurar total proteção à carga durante todo o percurso.",
    imagem: "/media/pilar-regioes.jpg?v=1",
    legenda: "Monitoramento contínuo em rodovias e rotas interestaduais.",
    icone: Radio,
  },
];

export const DEPARTAMENTOS_EQUIPE = [
  {
    id: "diretoria",
    departamento: "Diretoria e gestão",
    funcaoResumo: "Estratégia, governança e excelência operacional",
    descricao:
      "Responsável pelo direcionamento estratégico da Transcom, relacionamento institucional com parceiros e definição dos padrões de qualidade, segurança e crescimento sustentável.",
    fotoUrl: "/media/about-warehouse.jpg",
    instrucaoFoto: "Espaço preparado para foto oficial da Diretoria e Gestão",
    icone: Compass,
  },
  {
    id: "monitoramento",
    departamento: "Monitoramento",
    funcaoResumo: "Rastreamento 24/7 e controle da cadeia fria",
    descricao:
      "Equipe dedicada ao acompanhamento em tempo real da frota, supervisão dos indicadores de temperatura, gestão de risco e suporte imediato aos motoristas em trânsito.",
    fotoUrl: "/media/pilar-cadeia-fria.jpg?v=1",
    instrucaoFoto: "Espaço preparado para foto da equipe de Monitoramento",
    icone: Headset,
  },
  {
    id: "financeiro",
    departamento: "Financeiro e administrativo",
    funcaoResumo: "Gestão documental, fiscal e suporte corporativo",
    descricao:
      "Atua na organização administrativa, faturamento, emissão e controle de documentos de transporte, atendimento a clientes e gestão financeira com transparência e agilidade.",
    fotoUrl: "/media/pilar-qualidade.jpg?v=1",
    instrucaoFoto: "Espaço preparado para foto do setor Financeiro e Administrativo",
    icone: FileSpreadsheet,
  },
  {
    id: "operacional",
    departamento: "Equipe operacional",
    funcaoResumo: "Programação de cargas, roteirização e pátio",
    descricao:
      "Coordena o planejamento diário de coletas e entregas, alocação de veículos, conferência de embarque, checklists sanitários e integração direta com as docas dos clientes.",
    fotoUrl: "/media/fleet-lineup.jpg",
    instrucaoFoto: "Espaço preparado para foto da Equipe Operacional",
    icone: Users,
  },
  {
    id: "motoristas",
    departamento: "Motoristas e ajudantes",
    funcaoResumo: "Condução segura, cuidado com a carga e pontualidade",
    descricao:
      "Profissionais que representam a Transcom nas estradas e nos pontos de entrega, atuando com direção defensiva, zelo pelo equipamento refrigerado e respeito aos prazos.",
    fotoUrl: "/media/hero-truck.jpg",
    instrucaoFoto: "Espaço preparado para foto dos Motoristas e Ajudantes",
    icone: Truck,
  },
];

export const MISSAO_VISAO_VALORES = {
  missao: {
    titulo: "Missão",
    texto:
      "Oferecer soluções em transporte e logística com qualidade, segurança e compromisso.",
  },
  visao: {
    titulo: "Visão",
    texto:
      "Ser referência em transporte e logística, construindo relações de confiança e excelência.",
  },
  valores: {
    titulo: "Valores",
    lista: [
      "Responsabilidade",
      "Transparência",
      "Segurança",
      "Respeito",
      "Comprometimento",
      "Eficiência",
    ],
  },
};

export const ENCERRAMENTO_INSTITUCIONAL = {
  frase:
    "Por trás de cada entrega, existe uma equipe comprometida em fazer acontecer.",
  subtitulo:
    "Conte com a estrutura e a dedicação da Transcom para transportar o seu produto com a segurança que o seu negócio exige.",
  textoBotao: "Falar com a nossa equipe",
  imagemFrota: "/media/fleet-lineup.jpg",
};

/**
 * Animates a metric string (e.g. "15", "1,8M", "320k", "99,4%") counting up
 * from 0 when it enters the viewport.
 */
const AnimatedMetricNumber: React.FC<{
  value: string;
  delayMs?: number;
}> = ({ value, delayMs = 0 }) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const match = value.match(/^(\d+(?:,\d+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericRaw = match[1];
    const trailingUnit = match[2] || "";
    const hasComma = numericRaw.includes(",");
    const decimals = hasComma ? numericRaw.split(",")[1].length : 0;
    const targetNumber = parseFloat(numericRaw.replace(",", "."));

    const formatNumber = (n: number) => {
      const fixed = n.toFixed(decimals);
      const formatted = hasComma ? fixed.replace(".", ",") : fixed;
      return `${formatted}${trailingUnit}`;
    };

    let rafId = 0;
    let timeoutId = 0;
    let hasAnimated = false;

    const runCountAnimation = () => {
      const duration = 1600;
      const startTime = performance.now();

      const step = (now: number) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayValue(value);
          return;
        }
        const elapsed = now - startTime;
        const progress = Math.min(1, Math.max(0, elapsed / duration));
        // Cubic ease-out for a fast start and smooth landing
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = targetNumber * eased;

        setDisplayValue(formatNumber(current));

        if (progress < 1) {
          rafId = window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      setDisplayValue(formatNumber(0));
      rafId = window.requestAnimationFrame(step);
    };

    const checkViewport = () => {
      if (hasAnimated) return;
      const el = spanRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.top <= vh * 0.95 && rect.bottom >= 0) {
        hasAnimated = true;
        setDisplayValue(formatNumber(0));
        timeoutId = window.setTimeout(runCountAnimation, delayMs);
      }
    };

    checkViewport();
    window.addEventListener("scroll", checkViewport, { passive: true });
    window.addEventListener("resize", checkViewport, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkViewport);
      window.removeEventListener("resize", checkViewport);
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
    };
  }, [value, delayMs]);

  return <span ref={spanRef}>{displayValue}</span>;
};

/** Semantic section wrapper; entrances are limited to individual photos. */
const ScrollRevealBlock: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => (
  <div id={id} className={className}>
    {children}
  </div>
);

const PARA_STATE_SVG_PATH =
  "M390.2,292.1L394.7,288.6L402.6,282.4L405.6,282.1L409.2,280.6L411,277.7L413.8,273.9L417.2,270.3L418,265.8L419.8,264L423,261.8L424.9,259.1L427.6,254L427.7,250.9L428.1,248L430.3,246.3L430.8,243.5L433.2,240.6L435.8,238.2L438.4,234.7L440,231.7L440.9,228.6L440,226L442.8,224.5L440.2,220.9L441.8,218.6L445.5,217L446.6,214.7L447.8,212.2L448.6,209.2L447.9,206.7L450.7,204.1L452.8,201.9L453.1,198.6L454.8,194L455.2,191.3L451.9,190.5L452.4,187.9L455.4,187.2L456.8,184.5L457.4,181L457.1,178L458.3,175.6L456.8,173.3L458.7,170.7L460,167.6L459,164.8L456.2,164.2L455.5,160.4L453.3,162.8L451,164.8L446.7,164.9L446.4,161.6L448.6,160.4L445.8,159.9L443.2,163.4L441.3,160.7L442,158.1L438.6,159L436,159.8L435.1,157.2L432.2,158.2L430.3,156.5L427.3,157.4L426.9,154.4L424.1,156.3L423.8,153.5L420.8,151.8L416.7,151.1L413.8,150.7L414,154.1L411.9,151.5L409.4,154.2L408.6,151.1L406.3,148.8L404.6,151.2L401.5,153.3L401.5,150.6L397.8,152.4L394.9,152.9L392,156L389.1,158.4L387.8,160.9L384.6,161.4L381.1,160L380.1,155.9L381.2,151.4L381.1,148.6L382.2,144.8L383.9,142.9L383.6,139.6L380.1,139.3L375.7,139L372.3,139.5L366.6,138.9L364,137.4L359.4,136.9L355.5,136.6L351.5,137.6L349.5,135.5L352.1,132.2L350.9,129.3L348.2,128.7L344.8,128.4L342.1,128.2L341.2,125.5L343.2,123.4L346.4,121.9L347.4,119.2L344.8,117.6L342.2,118.5L338.4,120.2L334.8,120.8L331.8,119.6L327.9,120.1L325.5,118.3L328.6,116.2L330,113.9L328.8,110.5L324.2,109.9L320.4,109.3L317.7,110.9L315.9,114L314.7,117.1L313.1,121.1L311.5,123.2L309.3,125.3L306.8,127.1L301,128.9L296.2,133.9L291.6,135.2L288.5,139.6L286.6,143.4L284.6,145.6L283.4,148.1L281.6,149.9L278.9,152.6L276.1,157.4L275.7,161.6L276,164.5L272.9,168.7L269.6,169.5L266.1,169.5L264.1,171.1L261.8,168.9L258.7,168.5L254.8,167.9L252.1,164.9L251.3,162.2L252.2,159.6L249,159.4L248.7,156.7L249,153.6L248.2,150.1L245.6,150.8L242.9,147.6L242.9,144.2L243.3,141.6L241,139.9L238.3,137.4L235.2,136L234,133L233.5,130.3L231.3,126.2L229.5,123.6L228.5,120.7L227.7,118.3L227.4,115.2L228.1,111.7L229.5,109.1L226.7,106.2L223.6,103.7L219.5,100.9L219.1,97.5L217.9,94.2L220,92.8L217.5,90.8L214.9,89.4L213.5,86.9L210,86.3L207.3,85.4L203.9,85.3L201.3,82.8L198,82.2L196.9,79.5L193.7,77.5L191.6,76.1L188.7,73.9L185.3,73.8L180.5,72.9L175.9,73.2L175,68.3L173.9,65L173.8,61.3L175.3,59.3L173.7,57.2L173.8,54.7L171.6,52.3L169.6,48.9L167.4,46.5L164.1,48.7L161.8,47.6L159.8,49.4L157,49L154.9,52.2L151.1,51.4L148.6,51.6L144.6,52.1L140,50.8L138,49L135.5,48.6L135.1,52.2L134,54.5L130.6,56.5L133.4,58.4L135.8,62.2L138,64.9L137.4,68.5L136.3,70.8L133.6,70.8L130.5,70.5L127.1,69.2L123.8,67.9L121.3,68.2L118.5,67.9L115.8,69L112.7,68.7L109.7,69.5L105.5,69.2L102,68.9L99.9,67.3L96.9,66.2L94.5,67.4L90.7,66.5L87.9,69L87.3,72.2L84.6,75.4L81.4,75.8L78.5,75L75.2,76.2L72.7,76.5L69.9,77L70,79.9L68.4,82L65.1,82.3L63.1,79.9L58.9,80L56.6,81.1L54.6,83.7L53.9,86.4L53.1,89L50,89.8L46.1,89.1L44.7,91.8L42.4,93L40,91.2L40,101.7L40,112L40,122.7L40,131.7L41,136.9L41,140L40.9,142.7L43.7,144.1L45.2,146.8L46.1,149.2L45.2,151.6L48.5,154.9L51.8,158.3L53.8,159.8L55.9,163.5L57.4,166.4L58.9,168.9L64,171.6L66.3,169.4L68.7,167.5L70.3,171.5L69.4,174.9L70.6,177.1L75.1,178.4L77.2,180.5L79.5,183.3L84.2,184.1L86.6,186.3L89.4,186.9L92.5,187.3L95.4,187.4L98,189.2L99.8,192L102.4,193.8L104.5,195.6L106.7,197.3L110.3,197.2L110.8,199.8L109.9,202.5L112.5,203.8L115.6,202.6L119.1,202.4L122.7,201.3L125,200.1L127.3,198.6L131.5,197.7L129.2,201.6L124.7,204.7L122,205.9L120.8,208.9L121.6,211.8L114.8,226.1L109.6,237.5L108.3,240.4L104.9,247.9L103.5,251.1L102,254.4L95.1,269.2L90.6,278.7L82.9,295L76.8,308.3L73.9,314.7L68.2,327L60.6,343.3L57.9,346.1L55.3,347.9L53.7,350.6L53.5,353.3L55.1,357.5L56.9,359.5L59.9,362.5L63.4,366.4L63.7,370.7L67.3,373.4L69.2,376.4L70.9,379.4L71.5,382L73.3,386.1L74.7,389.3L74.8,391.9L76.6,394.9L78.5,398.1L81,400.4L79.8,403.9L79.6,406.5L80.7,408.9L81.7,412.5L82.6,416.3L84.9,417.7L88.4,419.1L89.5,422L92.6,423.2L95.4,423.3L97.5,425.7L100.8,429.1L100.1,431.9L102.2,433.6L107.9,434L109.4,436.7L110.1,439.2L112.8,437.9L125.9,439L129.7,439.4L139.1,440.1L155.1,441.4L167.6,442.5L180.2,443.5L196.7,444.6L213.7,445.9L228.6,447L245.4,448.3L257.3,449.1L274.7,450.3L288.5,451.2L303.5,452.1L314.8,452.9L323.8,453.5L324.6,450.9L326.2,448.6L327.6,445.4L327.7,441.5L329.4,438.1L329.9,435.4L332.2,433.5L334.3,431.5L335.7,428.6L337.9,425.2L341.5,421.2L344.5,420.7L346.1,418.1L348.1,415.2L350.5,412.2L351.1,409.2L352.4,406.9L354.6,405.6L355.7,401.6L357.6,395.7L357.9,392.4L358.4,388.5L356.6,385.4L352.7,381.9L351.4,379.1L355.2,372.4L357.8,368.2L357.5,364.7L357.6,361.8L356.8,359.2L358.3,357L361.2,355.3L363.3,353.4L366.7,352.5L369.6,352.4L372.8,350.3L375.3,348.7L375.9,343.8L378.9,340.8L382,339.2L383.1,336.9L382.3,334.3L386,332.1L386.8,329.4L386.9,326.7L389.1,325.2L387.1,322.4L387.1,319.3L391,318.2L392.1,314.7L387.5,312.7L385.3,309.3L382.2,308.4L378.4,308.6L375.3,307.6L372.5,307.2L381.8,298.7L389.7,292.5Z";

export const QuemSomosExpansion: React.FC = () => {
  const [activeEstruturaIndex, setActiveEstruturaIndex] = useState(0);
  const activeEstrutura =
    NOSSA_ESTRUTURA_ITENS[activeEstruturaIndex] || NOSSA_ESTRUTURA_ITENS[0];
  const metricsRowRef = useRef<HTMLDivElement | null>(null);
  const [metricsVisible, setMetricsVisible] = useState(true);
  const [equipeVisible, setEquipeVisible] = useState(true);

  useEffect(() => {
    setMetricsVisible(true);
    setEquipeVisible(true);
  }, []);

  return (
    <div className="mobile-about max-w-[1340px] mx-auto px-1 sm:px-8 lg:px-12 space-y-16 sm:space-y-24 lg:space-y-28 pt-6 sm:pt-14">
      {/* =====================================================================
          1. NOSSA HISTÓRIA (APENAS AS INFORMAÇÕES EM ESCALA EDITORIAL MAIOR)
      ===================================================================== */}
      <ScrollRevealBlock id="nossa-historia" className="pt-2">
        <div className="space-y-6 sm:space-y-10">
          {/* Subtópico Grande no estilo de "Quem somos.", porém um pouco menor e sem ícone */}
          <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#0D0D0F] tracking-[-0.03em] leading-[1.1] tabular-nums">
            <span className="text-[#E30613] mr-2">1.</span>
            <span>Nossa história.</span>
          </h3>

          {/* Frase Principal em Escala Editorial Grande */}
          <p className="text-xl sm:text-4xl lg:text-[40px] font-semibold text-[#0D0D0F] tracking-[-0.025em] leading-[1.22] sm:leading-[1.2] max-w-4xl">
            {NOSSA_HISTORIA_CONTEUDO.titulo}
          </p>

          {/* 2 Blocos de Texto Empilhados à Esquerda + Mapa do Estado do Pará com Pin em Marituba à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center pt-1 sm:pt-2">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-xl lg:text-[21px] text-[#52525B] leading-[1.65]">
                {NOSSA_HISTORIA_CONTEUDO.paragrafoPrincipal}
              </p>

              <p className="text-base sm:text-xl lg:text-[21px] text-[#52525B] leading-[1.65]">
                {NOSSA_HISTORIA_CONTEUDO.paragrafoSecundario}
              </p>
            </div>

            {/* Mapa do Estado do Pará com Pin em Marituba (Compacto e Equilibrado no Celular) */}
            <div className="lg:col-span-5 flex items-center justify-center pt-2 lg:pt-0">
              <div className="relative w-full max-w-[210px] sm:max-w-[280px] lg:max-w-[380px] aspect-square flex items-center justify-center">
                <svg
                  viewBox="30 35 445 435"
                  className="w-full h-full overflow-visible"
                  aria-label="Mapa do Estado do Pará com localização em Marituba"
                >
                  {/* Silhueta Oficial do Estado do Pará — Plana e sem sombra */}
                  <path
                    d={PARA_STATE_SVG_PATH}
                    fill="#F7F8FA"
                    stroke="#0D0D0F"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  {/* Anel discreto no ponto exato de Marituba (385.4, 175.7) */}
                  <circle
                    cx="385.4"
                    cy="175.7"
                    r="14"
                    fill="#E30613"
                    fillOpacity="0.14"
                  />

                  {/* Ponto base em Marituba */}
                  <circle
                    cx="385.4"
                    cy="175.7"
                    r="4.5"
                    fill="#E30613"
                  />

                  {/* Pin Vetorial Limpo em Marituba */}
                  <g transform="translate(385.4, 173)">
                    <path
                      d="M0 0 C-6.5 -8.5 -11 -14 -11 -19.5 A11 11 0 1 1 11 -19.5 C11 -14 6.5 -8.5 0 0 Z"
                      fill="#E30613"
                    />
                    <circle cx="0" cy="-19.5" r="4" fill="#FFFFFF" />
                  </g>

                  {/* Chamada Tipográfica Editorial Direta Acima do Pin */}
                  <line
                    x1="385.4"
                    y1="136"
                    x2="385.4"
                    y2="112"
                    stroke="#0D0D0F"
                    strokeWidth="1.2"
                  />
                  <text
                    x="385.4"
                    y="102"
                    textAnchor="middle"
                    className="fill-[#0D0D0F] font-bold text-[16px] tracking-[-0.02em]"
                  >
                    Marituba, PA
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Faixa de Números e Indicadores: 4 Colunas na Página */}
          <div
            ref={metricsRowRef}
            className="mobile-metrics pt-4 sm:pt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 tabular-nums"
          >
            {NOSSA_HISTORIA_CONTEUDO.indicadores.map((item, idx) => (
              <div key={item.id} className="space-y-1 sm:space-y-1.5">
                <div className="flex flex-wrap items-baseline gap-1 sm:gap-1.5">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] leading-none text-[#0D0D0F]">
                    {item.prefixo && (
                      <span className="text-[#E30613]">{item.prefixo}</span>
                    )}
                    <AnimatedMetricNumber
                      value={item.numero}
                      delayMs={idx * 160}
                    />
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.06em] px-1.5 py-0.5 rounded-md ${
                      idx % 2 === 0
                        ? "bg-[#E30613]/10 text-[#E30613]"
                        : "bg-[#FF7300]/15 text-[#FF7300]"
                    }`}
                  >
                    {item.sufixo}
                  </span>
                </div>

                <div className="mt-2 text-sm sm:text-base font-semibold text-[#0D0D0F] tracking-[-0.015em] leading-snug">
                  {item.titulo}
                </div>

                <p className="mt-1 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollRevealBlock>

      {/* =====================================================================
          2. NOSSA ESTRUTURA (FUNDO BRANCO #FFFFFF)
      ===================================================================== */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <ScrollRevealBlock
          id="nossa-estrutura"
          className="max-w-[1340px] mx-auto px-1 sm:px-8 lg:px-12"
        >
          {/* Cabeçalho no Espaço Acima do Card */}
          <div className="mb-6 sm:mb-10">
            <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#0D0D0F] tracking-[-0.03em] leading-[1.1] tabular-nums">
              <span className="text-[#E30613] mr-2">2.</span>
              <span>Nossa estrutura.</span>
            </h3>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg font-medium text-[#0D0D0F]/75 leading-relaxed">
              Frota, cadeia fria, monitoramento e logística integrados em uma
              operação sólida e confiável.
            </p>
          </div>

          {/* Card Panorâmico Escuro (#0D0D0F) com Mesma Largura Total (1340px) do Quem Somos */}
          <div
            className="mobile-panel relative -mx-1 sm:-mx-8 lg:-mx-12 lg:min-h-[620px] rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#0D0D0F] flex flex-col lg:flex-row lg:items-center"
          >
            {/* Informações à Esquerda no Desktop / Topo no Celular */}
            <div className="mobile-panel-copy relative z-10 w-full lg:w-[48%] mr-auto p-6 sm:p-12 lg:px-16 lg:py-16 space-y-5 sm:space-y-7 text-white">
              <h4 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-[-0.025em] leading-[1.18] sm:leading-[1.16]">
                Estrutura física e tecnológica{" "}
                <span className="relative inline-block px-2 sm:px-2.5 py-0.5 mx-0.5 text-[#FF7300] border border-[#E30613] bg-[#E30613]/15">
                  <span
                    className="w-1.5 h-1.5 bg-[#E30613] absolute -top-1 -left-1"
                    aria-hidden="true"
                  />
                  <span
                    className="w-1.5 h-1.5 bg-[#E30613] absolute -top-1 -right-1"
                    aria-hidden="true"
                  />
                  <span
                    className="w-1.5 h-1.5 bg-[#E30613] absolute -bottom-1 -left-1"
                    aria-hidden="true"
                  />
                  <span
                    className="w-1.5 h-1.5 bg-[#E30613] absolute -bottom-1 -right-1"
                    aria-hidden="true"
                  />
                  preparada.
                </span>{" "}
                para grandes operações.
              </h4>

              {/* Conteúdo do Pilar Ativo */}
              <div className="space-y-1.5 sm:space-y-2 max-w-lg">
                <div className="text-base sm:text-xl font-semibold text-white tracking-[-0.015em]">
                  {activeEstrutura.titulo}
                </div>
                <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
                  {activeEstrutura.descricao}
                </p>
              </div>

              {/* Seletores em Pílula para Alternar entre os 3 Pilares da Estrutura */}
              <div className="mobile-structure-controls pt-1 sm:pt-2 flex flex-wrap items-center gap-2 tabular-nums">
                {NOSSA_ESTRUTURA_ITENS.map((item, idx) => {
                  const isSelected = idx === activeEstruturaIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActiveEstruturaIndex(idx)}
                      onClick={() => setActiveEstruturaIndex(idx)}
                      className={`px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-[#E30613] text-white shadow-md"
                          : "bg-white/10 text-zinc-300 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      <span className="opacity-70 mr-1.5">{item.numero}.</span>
                      <span>{item.titulo}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fotografias à Direita no Desktop / Abaixo com Fusão Suave no Celular */}
            <div className="relative h-[220px] sm:h-[340px] lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-[62%] mt-2 lg:mt-0 overflow-hidden pointer-events-none">
              {NOSSA_ESTRUTURA_ITENS.map((item, idx) => (
                <img
                  key={item.id}
                  src={getAssetPath(item.imagem)}
                  alt={item.titulo}
                  className={`absolute inset-0 w-full h-full object-cover object-center panoramic-photo-mask transition-all duration-700 ease-out ${
                    idx === activeEstruturaIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollRevealBlock>
      </div>

      {/* =====================================================================
          3. NOSSA EQUIPE (FUNDO INTEIRO PRETO CARBONO #0D0D0F PARA CONTRASTE)
      ===================================================================== */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen bg-[#0D0D0F] text-white py-16 sm:py-28 px-4 sm:px-6 lg:px-8 !mt-0">
        <ScrollRevealBlock
          id="nossa-equipe"
          className="max-w-[1340px] mx-auto px-1 sm:px-8 lg:px-12"
        >
          <div className="mb-10 sm:mb-14 space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.1] tabular-nums">
              <span className="text-[#E30613] mr-2">3.</span>
              <span>Nossa equipe.</span>
            </h3>
            <p className="text-xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-[-0.025em] leading-[1.22] sm:leading-[1.2] max-w-4xl">
              Os profissionais que fazem a{" "}
              <span className="text-[#FF7300]">Transcom</span> acontecer.
            </p>
            <p className="text-sm sm:text-lg font-medium text-zinc-400 leading-relaxed max-w-2xl">
              Cada entrega é fruto da sintonia entre gestão, monitoramento,
              administração, operação e estrada.
            </p>
          </div>

          {/* Layout Editorial de Departamentos com Fotografias Limpas */}
          <div className="space-y-10 sm:space-y-14">
            {/* Linha Superior: 2 Departamentos em Destaque (6 + 6 Colunas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {DEPARTAMENTOS_EQUIPE.slice(0, 2).map((item, idx) => {
                const numero = `0${idx + 1}`;
                return (
                  <article key={item.id} className="group flex flex-col">
                    <div data-motion="photo" className="mobile-team-photo relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#18181B] border border-white/10 mb-4 sm:mb-6">
                      <img
                        src={getAssetPath(item.fotoUrl)}
                        alt={item.departamento}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <h4 className="text-xl sm:text-[26px] font-bold text-white tracking-[-0.025em] leading-tight tabular-nums">
                      <span className="text-[#E30613] mr-2">{numero}.</span>
                      <span>{item.departamento}.</span>
                    </h4>
                    <p className="text-sm sm:text-[17px] text-zinc-300 leading-[1.6] mt-2 sm:mt-2.5">
                      {item.descricao}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* Linha Inferior: 3 Departamentos (4 + 4 + 4 Colunas) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {DEPARTAMENTOS_EQUIPE.slice(2).map((item, idx) => {
                const globalIdx = idx + 2;
                const numero = `0${globalIdx + 1}`;
                return (
                  <article key={item.id} className="group flex flex-col">
                    <div data-motion="photo" className="mobile-team-photo relative aspect-[4/3] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#18181B] border border-white/10 mb-4 sm:mb-6">
                      <img
                        src={getAssetPath(item.fotoUrl)}
                        alt={item.departamento}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <h4 className="text-lg sm:text-2xl font-bold text-white tracking-[-0.025em] leading-tight tabular-nums">
                      <span className="text-[#E30613] mr-2">{numero}.</span>
                      <span>{item.departamento}.</span>
                    </h4>
                    <p className="text-sm sm:text-[17px] text-zinc-300 leading-[1.6] mt-2 sm:mt-2.5">
                      {item.descricao}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </ScrollRevealBlock>
      </div>
    </div>
  );
};

