"use client";

import { useEffect } from "react";

/** One-shot entrances keep content visible before JavaScript and after cleanup. */
export const ScrollMotion = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const played = new WeakSet<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          if (played.has(element)) return;
          played.add(element);
          if (reducedMotion.matches || typeof element.animate !== "function") return;

          const isPhoto = element.dataset.motion === "photo";
          const animation = element.animate(
            isPhoto
              ? [
                  { clipPath: "inset(0 0 8% 0)", opacity: 0.65 },
                  { clipPath: "inset(0 0 0% 0)", opacity: 1 },
                ]
              : [
                  { transform: "translateY(18px)", opacity: 0.45 },
                  { transform: "translateY(0)", opacity: 1 },
                ],
            {
              duration: isPhoto ? 700 : 550,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            }
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>("[data-motion]").forEach((element) => {
      observer.observe(element);
    });
    const onMotionPreferenceChange = () => {
      if (reducedMotion.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    reducedMotion.addEventListener("change", onMotionPreferenceChange);

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
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
};

