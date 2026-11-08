"use client";

import { useEffect } from "react";

/** Animate content once, without moving layout containers or nesting entrances. */
export const ScrollMotion = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const groups = [
      ".mobile-metrics > div",
      "#parceiros .grid > div",
      ".mobile-contact-details > *",
      ".mobile-team-photo",
      ".mobile-panel > .pointer-events-none",
      ".mobile-structure-controls",
      ".mobile-about svg[aria-label]",
    ].join(", ");
    const candidates = Array.from(document.querySelectorAll<HTMLElement>([
      groups,
      ".mobile-content h2",
      ".mobile-content h3",
      ".mobile-content h4",
      ".mobile-content p",
      ".mobile-contact-intro > .shrink-0",
    ].join(", ")));
    // A photo, metric or contact enters as one unit, never with a second
    // animation on its children. Existing transform-based layouts stay intact.
    const elements = candidates.filter((element) =>
      !element.closest("footer") && !element.parentElement?.closest(groups)
    );
    const pending = new Set<HTMLElement>();
    let observer: IntersectionObserver | null = null;

    const reveal = (element: HTMLElement) => {
      element.classList.add("is-visible");
      pending.delete(element);
      observer?.unobserve(element);
    };
    const prepare = () => {
      observer?.disconnect();
      pending.clear();
      elements.forEach((element) => element.classList.remove("scroll-enter", "is-visible"));
      if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            reveal(entry.target as HTMLElement);
          }
        });
      }, { threshold: 0, rootMargin: "0px 0px -15% 0px" });

      elements.forEach((element) => {
        // Preserve visible content on load, restored scroll and anchor links.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        element.classList.add("scroll-enter");
        pending.add(element);
        observer?.observe(element);
      });
    };
    const onFocus = (event: FocusEvent) => {
      pending.forEach((element) => {
        if (event.target instanceof Node && element.contains(event.target)) reveal(element);
      });
    };
    prepare();
    reducedMotion.addEventListener("change", prepare);
    document.addEventListener("focusin", onFocus);

    let rafId = 0;
    const updateProgress = () => {
      rafId = 0;
      // Desktop scrollbar width must not push full-width sections off-center.
      root.style.setProperty("--page-width", `${root.clientWidth}px`);
      const max = root.scrollHeight - window.innerHeight;
      // The last blocks may never reach the inset observer viewport. At the
      // scroll limit, reveal all remaining content instead of leaving it hidden.
      if (max <= 0 || window.scrollY >= max - 2) {
        pending.forEach(reveal);
      }
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("scroll-enter", "is-visible"));
      reducedMotion.removeEventListener("change", prepare);
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
};
