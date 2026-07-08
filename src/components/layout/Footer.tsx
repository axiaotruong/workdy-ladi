import Image from "next/image";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Pipelines", href: "#pipelines" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Start free", href: siteConfig.appUrl },
      { label: "Log in", href: `${siteConfig.appUrl}/login` },
      { label: "Contact us", href: "mailto:hello@workdy.ai" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark-page text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-[1.6fr_1fr_1fr] sm:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <Image src="/logo-on-dark.png" alt={siteConfig.name} width={140} height={28} />
            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/55">
              AI employees for POD sellers — research, ad videos, and listings, handled by a team
              that runs 1 or 100 with the same effort.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <div className="text-[12.5px] font-semibold tracking-wide text-white/90">
                {column.title}
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>Built for POD sellers — and teams that want to scale.</span>
        </div>
      </div>
    </footer>
  );
}
