"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  CheckCircle2,
  Gauge,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  Truck,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { TranscomLogo } from "@/components/TranscomLogo";
import { QuemSomosExpansion } from "@/components/QuemSomosExpansion";
import { ScrollMotion } from "@/components/ScrollMotion";
import {
  AuroraLogo,
  BrfLogo,
  FrigolinoLogo,
  SearaLogo,
} from "@/components/PartnerLogos";
import { getAssetPath } from "@/lib/utils";

const NAV_LINKS = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "sobre", label: "Sobre nós", href: "#sobre" },
  { id: "servicos", label: "Serviços", href: "#servicos" },
  { id: "parceiros", label: "Parceiros", href: "#parceiros" },
  { id: "contato", label: "Contato", href: "#contato" },
];

const PILLARS = [
  {
    index: "/01",
    title: "Compromisso com a qualidade",
    description:
      "Processos rigorosos de ponta a ponta para preservar a integridade de cada embarque, seguindo protocolos sanitários e operacionais de alto padrão.",
    image: "/media/pilar-qualidade.jpg?v=1",
    icon: ShieldCheck,
    accent: "red" as const,
  },
  {
    index: "/02",
    title: "Cadeia fria monitorada",
    description:
      "Controle contínuo de temperatura para cargas refrigeradas e congeladas sem oscilação, com sensores térmicos e acompanhamento em tempo real.",
    image: "/media/pilar-cadeia-fria.jpg?v=1",
    icon: Snowflake,
    accent: "dark" as const,
  },
  {
    index: "/03",
    title: "Atuação em diversas regiões",
    description:
      "Capilaridade logística e equipe qualificada conectando grandes polos produtores, centros de distribuição e redes varejistas com pontualidade.",
    image: "/media/pilar-regioes.jpg?v=1",
    icon: MapPin,
    accent: "orange" as const,
  },
];

const SERVICES_LIST = [
  {
    id: "refrigerado-congelado",
    title: "Transporte refrigerado e congelado",
    description:
      "Operação estruturada para perecíveis, laticínios e congelados, mantendo a temperatura exata desde o embarque na indústria até a descarga no cliente.",
  },
  {
    id: "distribuicao",
    title: "Distribuição e entregas",
    description:
      "Abastecimento pontual para centros de distribuição e redes varejistas, com planejamento diário de rotas e cumprimento rigoroso dos horários de doca.",
  },
  {
    id: "monitoramento",
    title: "Monitoramento de carga",
    description:
      "Acompanhamento em tempo real de ponta a ponta, com rastreamento 24 horas, leitura contínua da temperatura do baú e gerenciamento de risco.",
  },
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<0 | 1>(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const video0Ref = useRef<HTMLVideoElement | null>(null);
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const activeVideoIndexRef = useRef<0 | 1>(0);
  const isTransitioningRef = useRef(false);

  // Refs for video visibility and section anchors
  const heroBgRef = useRef<HTMLDivElement | null>(null);
  const sobreRevealSectionRef = useRef<HTMLElement | null>(null);
  const servicosRevealSectionRef = useRef<HTMLElement | null>(null);

  // Modal Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "Transporte refrigerado e congelado",
    notes: "",
  });

  // Seamless crossfade between the 2 videos in an infinite loop
  const triggerCrossfade = (nextIndex: 0 | 1) => {
    if (isTransitioningRef.current || activeVideoIndexRef.current === nextIndex) {
      return;
    }
    isTransitioningRef.current = true;
    activeVideoIndexRef.current = nextIndex;

    const nextVideo = nextIndex === 0 ? video0Ref.current : video1Ref.current;
    const prevVideo = nextIndex === 0 ? video1Ref.current : video0Ref.current;

    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.muted = true;
      nextVideo.play().catch(() => {});
    }

    setActiveVideoIndex(nextIndex);

    setTimeout(() => {
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
      isTransitioningRef.current = false;
    }, 1050);
  };

  // Background playback is only needed while the hero can be seen.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const startActiveVideo = () => {
      if (reducedMotion.matches || document.hidden ||
          (heroBgRef.current && heroBgRef.current.getBoundingClientRect().bottom <= 0)) {
        video0Ref.current?.pause();
        video1Ref.current?.pause();
        return;
      }
      const current =
        activeVideoIndexRef.current === 0 ? video0Ref.current : video1Ref.current;
      if (current && (current.paused || current.ended)) {
        current.muted = true;
        current.play().catch(() => {});
      }
    };

    startActiveVideo();
    reducedMotion.addEventListener("change", startActiveVideo);
    document.addEventListener("visibilitychange", startActiveVideo);
    const watchdog = window.setInterval(startActiveVideo, 1000);
    return () => {
      window.clearInterval(watchdog);
      reducedMotion.removeEventListener("change", startActiveVideo);
      document.removeEventListener("visibilitychange", startActiveVideo);
    };
  }, []);

  const handleVideoTimeUpdate = (
    e: React.SyntheticEvent<HTMLVideoElement>,
    currentIndex: 0 | 1
  ) => {
    if (activeVideoIndexRef.current !== currentIndex) return;
    const video = e.currentTarget;
    if (video.duration && video.duration - video.currentTime <= 0.85) {
      triggerCrossfade(currentIndex === 0 ? 1 : 0);
    }
  };

  const openQuoteWithSelection = (serviceName?: string) => {
    setQuoteSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      service: serviceName || "Transporte refrigerado e congelado",
    }));
    setContactModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0D0D0F]">
      <ScrollMotion />
      {/* =====================================================================
          BLOCO 1: HERO STICKY FULL-SCREEN COM CORTINA NO SCROLL
      ===================================================================== */}
      <div id="inicio" className="relative h-[108vh] sm:h-[125vh] lg:h-[135vh] w-full bg-[#0D0D0F]">
        <section className="sticky top-0 w-full h-screen flex flex-col justify-between bg-[#0D0D0F] text-white px-4 sm:px-8 lg:px-14 pt-6 pb-12 overflow-hidden">
          {/* INFINITE CROSSFADE BACKGROUND VIDEOS */}
          <div
            ref={heroBgRef}
            className="absolute inset-0 z-0"
          >
            <video
              ref={video0Ref}
              src={getAssetPath("/media/video-hero-1.mp4")}
              autoPlay
              muted
              playsInline
              preload="auto"
              onTimeUpdate={(e) => handleVideoTimeUpdate(e, 0)}
              onEnded={() => {
                if (activeVideoIndexRef.current === 0) triggerCrossfade(1);
              }}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                activeVideoIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
            <video
              ref={video1Ref}
              src={getAssetPath("/media/video-hero-2.mp4")}
              muted
              playsInline
              preload="auto"
              onTimeUpdate={(e) => handleVideoTimeUpdate(e, 1)}
              onEnded={() => {
                if (activeVideoIndexRef.current === 1) triggerCrossfade(0);
              }}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                activeVideoIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Balanced cinematic overlay so the video shines while keeping text legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0F]/65 via-[#0D0D0F]/50 to-[#0D0D0F]/85" />
          </div>

          {/* 1A. FLOATING PILL NAVIGATION HEADER */}
          <header className="relative z-20 max-w-[1360px] w-full mx-auto flex items-center justify-between gap-4">
            <a
              href="#inicio"
              onClick={() => setActiveNav("inicio")}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613] rounded-full"
            >
              <TranscomLogo variant="dark" />
            </a>

            {/* Center Floating Pill Rail (Glassmorphism) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-2.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.22)]"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeNav === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveNav(link.id)}
                    className={`px-4 py-1.5 rounded-full text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613] ${
                      isActive
                        ? "font-semibold text-[#0D0D0F] bg-white shadow-sm"
                        : "font-medium text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Dual Pill Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => openQuoteWithSelection()}
                className="bg-[#0D0D0F] hover:bg-[#E30613] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7300]"
              >
                Fale conosco
              </button>
              <a
                href="tel:+559140028922"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-full transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613]"
              >
                (91) 4002-8922
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </header>

          {/* Mobile Dropdown Navigation */}
          {mobileMenuOpen && (
            <div className="motion-menu absolute top-20 left-4 right-4 z-40 lg:hidden bg-[#0D0D0F]/90 backdrop-blur-xl border border-white/20 rounded-[24px] p-4 shadow-card space-y-2.5 text-white">
              <div className="grid grid-cols-2 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => {
                      setActiveNav(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium text-white/90 hover:text-white hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteWithSelection();
                  }}
                  className="w-full bg-[#E30613] text-white text-xs font-medium py-3 rounded-full"
                >
                  Fale conosco
                </button>
                <a
                  href="tel:+559140028922"
                  className="w-full text-center bg-white/10 border border-white/15 text-white text-xs font-medium py-3 rounded-full tabular-nums"
                >
                  (91) 4002-8922
                </a>
              </div>
            </div>
          )}

          {/* 1B. HERO CENTERED DISPLAY */}
          <div
            className="relative z-10 max-w-5xl mx-auto text-center my-auto py-8 sm:py-12 px-1"
          >
            {/* 2-Line Display Headline with Inline Icon Badges */}
            <h1 className="motion-hero-title text-[5.2vw] sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.3] sm:leading-[1.14] text-white">
              <span className="block whitespace-nowrap">
                <span>Movimentando</span>{" "}
                <span
                  className="inline-heading-badge bg-[#E30613] text-white -rotate-6"
                  aria-hidden="true"
                >
                  <Gauge className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </span>{" "}
                <span>o que importa.</span>
              </span>
              <span className="block mt-1.5 sm:mt-1 whitespace-nowrap">
                <span>Preservando</span>{" "}
                <span
                  className="inline-heading-badge rounded-full bg-[#FF7300] text-white rotate-6"
                  aria-hidden="true"
                >
                  <Snowflake className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </span>{" "}
                <span>o seu produto.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="motion-hero-copy mobile-hero-description mt-4 sm:mt-5 text-[13px] sm:text-base text-zinc-200 max-w-[300px] sm:max-w-xl mx-auto leading-[1.6] sm:leading-relaxed">
              A <strong className="font-semibold text-white">Transcom</strong> é
              especialista em transporte de cargas refrigeradas e congeladas,
              oferecendo soluções logísticas com segurança, eficiência e compromisso
              com o seu negócio.
            </p>
          </div>
        </section>
      </div>

      {/* CURTAIN SHEET THAT GLIDES UP OVER THE HERO VIDEO ON SCROLL */}
      <div className="mobile-content relative z-20 -mt-14 sm:-mt-20 bg-white rounded-t-[32px] sm:rounded-t-[44px] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 pb-12">
      {/* =====================================================================
          BLOCO 2: QUEM SOMOS (TÓPICO GRANDE NO ESPAÇO BRANCO + PAINEL COM FOTO)
      ===================================================================== */}
      <section
        id="sobre"
        key="sobre-section-v4"
        ref={sobreRevealSectionRef}
        className="relative max-w-[1340px] mx-auto pt-2 sm:pt-4 pb-6 sm:pb-10"
      >
        <div>
          {/* Tópico Grande no Espaço em Branco Acima do Card (Entrada Escalonada) */}
          <div className="mobile-section-heading mb-6 sm:mb-10 pl-1 sm:pl-8 lg:pl-12">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0D0D0F] tracking-[-0.03em] leading-[1.08]">
              <span>Quem</span>{" "}
              <span
                className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E30613] text-white align-middle mx-1"
                aria-hidden="true"
              >
                <Users className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
              </span>{" "}
              <span>somos.</span>
            </h2>

            <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg font-medium text-[#0D0D0F]/75 leading-relaxed">
              Conheça a estrutura, a história e os profissionais por trás de cada
              operação logística.
            </p>
          </div>

          <div
            key="sobre-card-v4"
            className="mobile-panel relative w-full lg:min-h-[620px] rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#0D0D0F] flex flex-col lg:flex-row lg:items-center opacity-100"
          >
            {/* Informações à Esquerda no Desktop / Topo no Celular */}
            <div
              key="sobre-text-v4"
              className="mobile-panel-copy relative z-10 w-full lg:w-[45%] mr-auto p-6 sm:p-12 lg:px-16 lg:py-16 space-y-5 sm:space-y-7 text-white"
            >
              <h3 className="text-2xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-0.025em] leading-[1.18] sm:leading-[1.16]">
                Mais que transporte, somos{" "}
                <span className="relative inline-block px-2 sm:px-2.5 py-0.5 mx-0.5 text-[#FF7300] border border-[#E30613] bg-[#E30613]/15">
                  {/* 4 Vector Selection Corner Nodes from DESIGN.md */}
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
                  parceria.
                </span>{" "}
                Conectando produtos e pessoas com qualidade.
              </h3>

              <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-lg">
                A <strong className="font-semibold text-white">Transcom</strong>{" "}
                nasceu com o propósito de conectar produtos e pessoas, garantindo que
                cada carga chegue ao seu destino com a qualidade que você merece,
                apoiada por uma{" "}
                <strong className="font-semibold text-white">
                  equipe qualificada e experiente
                </strong>
                .
              </p>
            </div>

            {/* Fotografia à Direita no Desktop / Abaixo com Fusão Suave no Celular */}
            <div className="relative h-[220px] sm:h-[340px] lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-[62%] mt-2 lg:mt-0 overflow-hidden pointer-events-none">
              <img
                src={getAssetPath("/media/quem-somos-equipe.jpg")}
                alt="Equipe Transcom"
                className="w-full h-full object-cover object-center panoramic-photo-mask"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPANSÃO INSTITUCIONAL DO QUEM SOMOS (HISTÓRIA, ESTRUTURA, EQUIPE, MVV E ENCERRAMENTO) */}
      <QuemSomosExpansion />

      {/* =====================================================================
          BLOCO 3: NOSSOS SERVIÇOS (FUNDO AZUL DE PONTA A PONTA)
      ===================================================================== */}
      <div className="full-bleed relative bg-[#0F2942] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <section
          id="servicos"
          key="servicos-section-v2"
          ref={servicosRevealSectionRef}
          className="max-w-[1340px] mx-auto px-1 sm:px-8 lg:px-12"
        >
          {/* Tópico Grande Acima dos Serviços */}
          <div className="mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.08]">
              <span>Nossos</span>{" "}
              <span
                className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0284C7] text-white align-middle mx-1"
                aria-hidden="true"
              >
                <Snowflake className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
              </span>{" "}
              <span>serviços.</span>
            </h2>

            <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg font-medium text-blue-100/85 leading-relaxed">
              Oferecemos transporte especializado para produtos que exigem controle
              de temperatura e alto cuidado em toda a jornada.
            </p>
          </div>

          {/* 3 Serviços em Layout Editorial Limpo sobre Fundo Azul */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 pt-6 sm:pt-8 border-t border-white/15">
            {SERVICES_LIST.map((service) => (
              <article key={service.id} className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.025em] leading-[1.2]">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-blue-100/80 leading-[1.65] max-w-[40ch]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* =====================================================================
          BLOCO 4: NOSSOS PARCEIROS (FUNDO BRANCO COM GRADE ARQUITETÔNICA)
      ===================================================================== */}
      <section
        id="parceiros"
        className="max-w-[1340px] mx-auto px-1 sm:px-8 lg:px-12 pt-16 sm:pt-28 pb-10 sm:pb-12"
      >
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0D0D0F] tracking-[-0.03em] leading-[1.08]">
            <span>Nossos</span>{" "}
            <span
              className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E30613] text-white align-middle mx-1"
              aria-hidden="true"
            >
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
            </span>{" "}
            <span>parceiros.</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg font-medium text-[#0D0D0F]/75 leading-relaxed max-w-2xl">
            Grandes marcas do setor de alimentos que confiam na nossa estrutura e
            compromisso para movimentar seus produtos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-[#ECEEF2] divide-y sm:divide-y-0 sm:divide-x divide-[#ECEEF2]">
          {[
            {
              name: "Aurora Coop",
              segment: "Proteínas e laticínios",
              src: getAssetPath("/brand/parceiro-aurora-clean.png"),
              imgClass: "h-9 sm:h-11 w-auto object-contain",
            },
            {
              name: "Seara Alimentos",
              segment: "Refrigerados e congelados",
              src: getAssetPath("/brand/parceiro-seara-clean.png"),
              imgClass: "h-12 sm:h-14 w-auto object-contain",
            },
            {
              name: "BRF",
              segment: "Cadeia fria industrial",
              src: getAssetPath("/brand/parceiro-brf.png"),
              imgClass: "h-11 sm:h-13 w-auto object-contain",
            },
          ].map(({ name, segment, src, imgClass }) => (
            <div
              key={name}
              className="py-8 sm:py-12 px-4 sm:px-8 flex flex-col items-start justify-between gap-6"
            >
              <div className="h-14 flex items-center">
                <img src={src} alt={name} className={imgClass} />
              </div>

              <div>
                <div className="text-sm sm:text-base font-bold text-[#0D0D0F] tracking-[-0.015em]">
                  {name}
                </div>
                <div className="text-xs sm:text-sm text-[#52525B] mt-0.5">
                  {segment}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          BLOCO 5: VAMOS CONVERSAR? (PAINEL PRETO EDITORIAL SEM CARDS ANINHADOS)
      ===================================================================== */}
      <section
        id="contato"
        className="max-w-[1340px] mx-auto px-1 sm:px-8 lg:px-12 pt-12 sm:pt-20"
      >
        <div className="mobile-panel relative -mx-1 sm:-mx-8 lg:-mx-12 rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#0D0D0F] text-white">
          <div className="mobile-contact-intro flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 p-6 sm:p-12 lg:px-16 lg:pt-16 lg:pb-12">
            <div className="space-y-2.5 sm:space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.08]">
                Vamos conversar?
              </h2>

              <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
                Entre em contato com a nossa equipe comercial para cotações, rotas
                dedicadas e operações de transporte refrigerado.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => openQuoteWithSelection()}
                className="bg-[#E30613] hover:bg-red-700 text-white text-sm sm:text-base font-medium px-8 py-4 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7300]"
              >
                Fale conosco
              </button>
            </div>
          </div>

          <div className="mobile-contact-details grid grid-cols-1 sm:grid-cols-3 border-t border-white/15 divide-y sm:divide-y-0 sm:divide-x divide-white/15 tabular-nums">
            <a
              href="tel:+559140028922"
              className="group block p-7 sm:p-10 lg:px-16 lg:py-12 space-y-1.5"
            >
              <div className="text-xs sm:text-sm font-medium text-zinc-400">
                Telefone
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-[-0.02em] group-hover:text-[#E30613] transition-colors">
                (91) 4002-8922
              </div>
              <div className="text-xs text-zinc-400">
                Atendimento comercial e operacional
              </div>
            </a>

            <a
              href="https://wa.me/5591987654321"
              target="_blank"
              rel="noreferrer"
              className="group block p-7 sm:p-10 lg:px-12 lg:py-12 space-y-1.5"
            >
              <div className="text-xs sm:text-sm font-medium text-zinc-400">
                WhatsApp
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-[-0.02em] group-hover:text-[#FF7300] transition-colors">
                (91) 9 8765-4321
              </div>
              <div className="text-xs text-zinc-400">
                Cotações rápidas e programação
              </div>
            </a>

            <div className="p-7 sm:p-10 lg:px-12 lg:py-12 space-y-1.5">
              <div className="text-xs sm:text-sm font-medium text-zinc-400">
                Matriz
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-[-0.02em]">
                Marituba – PA
              </div>
              <div className="text-xs text-zinc-400">
                Região Metropolitana de Belém
              </div>
            </div>
          </div>
        </div>

        {/* MINIMALIST FOOTER */}
        <footer className="pt-12 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <TranscomLogo variant="light" />

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#52525B]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-[#0D0D0F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="#contato"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#F7F8FA] border border-[#ECEEF2] flex items-center justify-center text-[#0D0D0F] hover:bg-[#0D0D0F] hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contato"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#F7F8FA] border border-[#ECEEF2] flex items-center justify-center text-[#0D0D0F] hover:bg-[#0D0D0F] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contato"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#F7F8FA] border border-[#ECEEF2] flex items-center justify-center text-[#0D0D0F] hover:bg-[#0D0D0F] hover:text-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
            <span className="text-xs text-[#52525B] tabular-nums">
              © 2026 Transcom. Todos os direitos reservados.
            </span>
          </div>
        </footer>
      </section>
      </div>

      {/* =====================================================================
          MODAL DE ATENDIMENTO / COTAÇÃO
      ===================================================================== */}
      {contactModalOpen && (
        <div
          className="motion-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="motion-dialog bg-white rounded-[28px] sm:rounded-[32px] max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-card relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F7F8FA] hover:bg-[#ECEEF2] flex items-center justify-center text-[#0D0D0F] transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-4 h-4" />
            </button>

            {quoteSubmitted ? (
              <div className="p-8 sm:p-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E30613] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D0D0F] tracking-[-0.025em]">
                  Solicitação enviada.
                </h3>
                <p className="text-sm sm:text-base text-[#52525B] max-w-sm mx-auto leading-relaxed">
                  Nossa equipe comercial recebeu os seus dados e entrará em
                  contato em instantes.
                </p>
                <div className="pt-3 flex justify-center">
                  <a
                    href="https://wa.me/5591987654321"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#0D0D0F] hover:bg-zinc-800 text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors tabular-nums"
                  >
                    Falar no WhatsApp: (91) 9 8765-4321
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="p-6 sm:p-9 space-y-5">
                  <div className="pr-10 space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0D0D0F] tracking-[-0.025em] leading-[1.15]">
                      Fale com a nossa equipe.
                    </h3>
                    <p className="text-sm text-[#52525B] leading-relaxed">
                      Atendimento comercial para transporte refrigerado,
                      congelado e operações dedicadas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-[#0D0D0F] mb-1.5">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nome completo"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F8FA] border border-[#E4E7EC] text-sm text-[#0D0D0F] placeholder:text-[#6E717A] focus:bg-white focus:outline-none focus:border-[#0D0D0F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0D0D0F] mb-1.5">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Nome da empresa"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F8FA] border border-[#E4E7EC] text-sm text-[#0D0D0F] placeholder:text-[#6E717A] focus:bg-white focus:outline-none focus:border-[#0D0D0F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0D0D0F] mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(91) 9 8765-4321"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F8FA] border border-[#E4E7EC] text-sm text-[#0D0D0F] placeholder:text-[#6E717A] focus:bg-white focus:outline-none focus:border-[#0D0D0F] transition-colors tabular-nums"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0D0D0F] mb-1.5">
                        Serviço de interesse
                      </label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service: e.target.value,
                            })
                          }
                          className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl bg-[#F7F8FA] border border-[#E4E7EC] text-sm text-[#0D0D0F] focus:bg-white focus:outline-none focus:border-[#0D0D0F] transition-colors cursor-pointer"
                        >
                          <option>Transporte refrigerado e congelado</option>
                          <option>Distribuição e entregas</option>
                          <option>Monitoramento de carga</option>
                          <option>Operação dedicada</option>
                        </select>
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          className="w-4 h-4 text-[#52525B] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        >
                          <path
                            d="M5.5 7.75L10 12.25L14.5 7.75"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0D0D0F] mb-1.5">
                      Detalhes da rota ou carga
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Informe origem, destino, tipo de produto ou volume..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8FA] border border-[#E4E7EC] text-sm text-[#0D0D0F] placeholder:text-[#6E717A] focus:bg-white focus:outline-none focus:border-[#0D0D0F] transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="px-6 sm:px-9 py-5 bg-[#FBFBFC] border-t border-[#ECEEF2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#52525B] tabular-nums">
                    Central comercial:{" "}
                    <strong className="font-semibold text-[#0D0D0F]">
                      (91) 4002-8922
                    </strong>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#E30613] hover:bg-red-700 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7300]"
                  >
                    Enviar solicitação
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
