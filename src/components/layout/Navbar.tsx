import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Templates", href: "#pipelines" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-subtle bg-base/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-base font-bold tracking-tight text-ink">
          <span className="size-2 rotate-45 rounded-[2px] bg-ink" aria-hidden="true" />
          {siteConfig.name}
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
