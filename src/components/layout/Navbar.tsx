"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pipelines", href: "#pipelines" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-line-subtle bg-base/85 shadow-[0_1px_0_rgba(17,24,39,0.04)] backdrop-blur"
          : "border-b border-transparent bg-base/0"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3.5 sm:px-8">
        <a href="#" className="flex items-center" aria-label={siteConfig.name}>
          <Image src="/logo.png" alt={siteConfig.name} width={150} height={30} priority />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <a
            href={`${siteConfig.appUrl}/login`}
            className="hidden text-[13.5px] text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            Log in
          </a>
          <Button href={siteConfig.appUrl} size="sm">
            Start free
          </Button>
        </div>
      </nav>
    </header>
  );
}
