import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "invert";
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
};

// Hover: lift + soft shadow, a light sweep across the face, and a trailing arrow that nudges right.
// All motion is disabled for users who prefer reduced motion.
const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-[9px] font-semibold transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] " +
  "before:pointer-events-none before:absolute before:inset-y-0 before:-left-1/3 before:w-1/3 before:-skew-x-12 before:-translate-x-full before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[450%] " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:before:hidden";

const sizes = {
  md: "px-5 py-3.5 text-[14.5px]",
  sm: "px-4 py-2.5 text-[13.5px]",
};

const variants = {
  primary:
    "bg-ink text-white before:bg-white/20 hover:bg-ink/90 hover:shadow-[0_12px_28px_-10px_rgba(17,24,39,0.6)]",
  secondary:
    "bg-base text-ink border border-line font-medium before:bg-ink/[0.05] hover:border-ink-faint hover:shadow-[0_10px_24px_-14px_rgba(17,24,39,0.35)]",
  invert:
    "bg-white text-ink before:bg-ink/[0.08] hover:bg-white hover:shadow-[0_12px_30px_-10px_rgba(255,255,255,0.35)]",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
