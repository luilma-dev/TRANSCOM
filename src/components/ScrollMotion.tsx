"use client";

import { useEffect } from "react";

/**
 * Sistema de movimento no scroll:
 * - Publica `--scroll-progress` (0 → 1) no <html> para o velocímetro dinâmico do logo.
 * - Garante que todos os elementos estão 100% visíveis, sem telas ou faixas em branco.
 */
export const ScrollMotion = () => {
  useEffect(() => {
    const root = document.documentElement;

    // Garante que tudo esteja revelado e visível
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      el.dataset.revealed = "true";
    });

    let rafId = 0;
    const updateProgress = () => {
      rafId = 0;
      const max = root.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
};

