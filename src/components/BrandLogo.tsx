import Link from "next/link";
import { site } from "@/config/site";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Bloom / Wellness Icon */}
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={isDark ? "petal-grad-dark" : "petal-grad"} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e26d95" />
            <stop offset="100%" stopColor={isDark ? "#ffffff" : "#48162b"} />
          </linearGradient>
          <linearGradient id={isDark ? "gold-grad-dark" : "gold-grad"} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3d1a4" />
            <stop offset="100%" stopColor="#cca15a" />
          </linearGradient>
        </defs>

        {/* Central Lotus Petal */}
        <path
          d="M24 6 C16 16 12 26 24 44 C36 26 32 16 24 6 Z"
          fill={`url(#${isDark ? "petal-grad-dark" : "petal-grad"})`}
        />
        {/* Left Nurturing Wing */}
        <path
          d="M24 22 C12 20 4 30 16 39 C22 37 24 30 24 22 Z"
          fill={`url(#${isDark ? "gold-grad-dark" : "gold-grad"})`}
          opacity="0.9"
        />
        {/* Right Nurturing Wing */}
        <path
          d="M24 22 C36 20 44 30 32 39 C26 37 24 30 24 22 Z"
          fill={`url(#${isDark ? "petal-grad-dark" : "petal-grad"})`}
          opacity="0.85"
        />
        {/* Center Pearl */}
        <circle cx="24" cy="25" r="3" fill="#ffffff" />
      </svg>

      <div className="flex flex-col">
        <span
          className={`font-serif text-2xl font-bold tracking-wider leading-none ${
            isDark ? "text-white" : "text-deep"
          }`}
        >
          FEMORA
        </span>
        <span
          className={`text-[9px] font-semibold tracking-[0.26em] uppercase mt-1 ${
            isDark ? "text-gold" : "text-brand"
          }`}
        >
          Women’s Clinic
        </span>
      </div>
    </div>
  );
}
