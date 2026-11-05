import React from "react";

interface TranscomLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

/**
 * Official Transcom Speedometer Logo
 * Faithful vector reproduction of the official brand mark:
 * - Outer Orange (#FF7300) arch with 3 inward radial tick marks (135°, 90°, 45°)
 * - Inner Red (#E30613) concentric arch
 * - Precision tapered needle pointing to 45°
 * - Bold geometric TRANSCOM wordmark + aligned subtitle
 */
export const TranscomLogo: React.FC<TranscomLogoProps> = ({
  variant = "light",
  showTagline = true,
  className = "",
}) => {
  const isDarkBg = variant === "dark";
  const needleColor = isDarkBg ? "#FFFFFF" : "#0D0D0F";

  return (
    <div
      className={`inline-flex items-center gap-3 select-none group ${className}`}
    >
      {/* Freestanding High-Precision Speedometer Emblem */}
      <div className="relative flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 260 148"
          className="w-12 sm:w-14 h-auto overflow-visible drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer Orange Arch */}
          <path
            d="M 18 132 A 112 112 0 0 1 242 132"
            stroke="#FF7300"
            strokeWidth="20"
            strokeLinecap="butt"
          />

          {/* 3 Inward Radial Orange Tick Marks (135°, 90°, 45°) */}
          <line
            x1="51"
            y1="53"
            x2="69"
            y2="71"
            stroke="#FF7300"
            strokeWidth="16"
            strokeLinecap="butt"
          />
          <line
            x1="130"
            y1="20"
            x2="130"
            y2="45"
            stroke="#FF7300"
            strokeWidth="16"
            strokeLinecap="butt"
          />
          <line
            x1="209"
            y1="53"
            x2="191"
            y2="71"
            stroke="#FF7300"
            strokeWidth="16"
            strokeLinecap="butt"
          />

          {/* Inner Red Arch */}
          <path
            d="M 56 132 A 74 74 0 0 1 204 132"
            stroke="#E30613"
            strokeWidth="22"
            strokeLinecap="butt"
          />

          {/* Speedometer Needle Hub & Tapered Pointer
              (outer group accelerates with scroll, inner group runs the ignition sweep) */}
          <g className="logo-needle-scroll">
            <g className="logo-needle-ignition">
              <circle cx="125" cy="122" r="20" fill={needleColor} />
              <polygon points="113,113 137,129 194,48" fill={needleColor} />
            </g>
          </g>
        </svg>
      </div>

      {/* Brand Wordmark & Perfectly Aligned Subtitle */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-[-0.03em] leading-none text-xl sm:text-2xl ${
            isDarkBg ? "text-white drop-shadow-sm" : "text-[#E30613]"
          }`}
        >
          TRANSCOM
        </span>
        {showTagline && (
          <span
            className={`font-bold uppercase mt-1 leading-none ${
              isDarkBg ? "text-white/80" : "text-[#0D0D0F]"
            }`}
            style={{ fontSize: "8.5px", letterSpacing: "0.11em" }}
          >
            Transportes &amp; Comércio
          </span>
        )}
      </div>
    </div>
  );
};
