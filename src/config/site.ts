export const siteConfig = {
  name: "Workdy",
  title: "Workdy — AI employees for cross-border e-commerce",
  description:
    "Market research and TikTok-ready product videos powered by Seedance — your AI employees handle the repetitive work so you can focus on selling. Run 1 or 100, same effort.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://workdy.ai",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.workdy.ai",
  ogImage: "/og.png",
  locale: "en_US",
  keywords: [
    "AI employees",
    "AI workforce",
    "cross-border ecommerce",
    "AI product video",
    "Seedance video generator",
    "TikTok ad video",
    "AI agents for ecommerce",
    "workflow automation",
  ],
};

export type SiteConfig = typeof siteConfig;
