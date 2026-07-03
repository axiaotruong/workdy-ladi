import { siteConfig } from "@/config/site";

const productLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pipelines", href: "#pipelines" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-subtle bg-base">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-base font-bold tracking-tight text-ink">
              <span className="size-2 rotate-45 rounded-[2px] bg-ink" aria-hidden="true" />
              {siteConfig.name}
            </a>
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-ink-soft">
              AI employees for growing businesses. Workdy also works for marketing, sales,
              support, and automation in general — with team roles, permissions, and SSO
              available as you grow.
            </p>
          </div>

          <div>
            <div className="text-[12.5px] font-semibold tracking-wide text-ink">Product</div>
            <ul className="mt-4 flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[12.5px] font-semibold tracking-wide text-ink">Company</div>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.appUrl}
                  className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                >
                  Start free
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@workdy.ai"
                  className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line-subtle pt-6 text-[12.5px] text-ink-faint">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
