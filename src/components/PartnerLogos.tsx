import React from "react";

export const AuroraLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <svg
    viewBox="0 0 180 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Aurora"
  >
    <path
      d="M52 34C52 17.5 69 6 90 6C111 6 128 17.5 128 34"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M62 34C62 21.5 74.5 13 90 13C105.5 13 118 21.5 118 34"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M73 34C73 26 80.6 20 90 20C99.4 20 107 26 107 34"
      fill="currentColor"
    />
    <text
      x="90"
      y="56"
      textAnchor="middle"
      fill="currentColor"
      className="font-extrabold tracking-tight text-2xl"
    >
      aurora
    </text>
  </svg>
);

export const SearaLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <svg
    viewBox="0 0 180 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Seara"
  >
    <ellipse cx="90" cy="34" rx="64" ry="24" fill="currentColor" />
    <path
      d="M42 20C56 9 124 9 138 20"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <text
      x="90"
      y="42"
      textAnchor="middle"
      fill="#FFFFFF"
      className="font-black tracking-wider text-2xl"
    >
      SEARA
    </text>
  </svg>
);

export const BrfLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <svg
    viewBox="0 0 175 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="BRF"
  >
    <circle cx="48" cy="33" r="22" fill="currentColor" />
    <path
      d="M32 36C40 26 54 24 66 29C58 41 44 46 32 36Z"
      fill="#FFFFFF"
      fillOpacity="0.35"
    />
    <path
      d="M36 24C44 18 55 18 63 23"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
    <text
      x="82"
      y="43"
      fill="currentColor"
      className="font-extrabold tracking-tight text-4xl"
    >
      brf
    </text>
  </svg>
);

export const FrigolinoLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <svg
    viewBox="0 0 195 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Frigolino"
  >
    <text
      x="97"
      y="43"
      textAnchor="middle"
      fill="currentColor"
      className="font-extrabold italic tracking-tight text-4xl"
    >
      frigolino
    </text>
    <path
      d="M42 51C72 55 122 55 154 49"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

