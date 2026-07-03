export const siteConfig = {
  name: "Workdy",
  title: "Workdy — Hire AI employees for your POD store",
  description:
    "Research, ad videos, listings — your AI employees handle the repetitive work so you can focus on growth. Run 1 or 100, same effort.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://workdy.ai",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.workdy.ai",
  ogImage: "/og.png",
  locale: "en_US",
  keywords: [
    "AI employees",
    "AI workforce",
    "POD automation",
    "print on demand tools",
    "AI agents for ecommerce",
    "workflow automation",
  ],
};

export type SiteConfig = typeof siteConfig;
