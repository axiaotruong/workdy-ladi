import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "invert";
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[9px] font-semibold transition-all duration-150 active:scale-[0.98]";

const sizes = {
  md: "px-5 py-3.5 text-[14.5px]",
  sm: "px-4 py-2.5 text-[13.5px]",
};

const variants = {
  primary: "bg-ink text-white hover:bg-ink/85",
  secondary:
    "bg-base text-ink border border-line font-medium hover:border-ink-faint",
  invert: "bg-white text-ink hover:bg-white/90",
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
