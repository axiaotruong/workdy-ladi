import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. Hire an AI employee, pick a template, and connect it with drag and drop. HTTP, JavaScript, and MCP are there if you want to go further.",
  },
  {
    q: "What AI models does Workdy use?",
    a: "GPT-4o, Claude, and Gemini — pick per employee, or bring your own API key.",
  },
  {
    q: "How is this different from Zapier or n8n?",
    a: "Those are general automation tools. Workdy comes with AI employees and ready-to-run pipelines built for POD sellers — niche research, ad videos, listings, and ads — so you're not starting from a blank canvas.",
  },
  {
    q: "Can I review what my AI employees do before it goes live?",
    a: "Yes. Add a human review step to any workflow — nothing publishes without your approval.",
  },
  {
    q: "Can I connect Workdy to my own tools?",
    a: "Yes — Google, TikTok Ads, WordPress, Slack, Notion, and Telegram are built in. For anything else, use HTTP, JavaScript, or your own MCP server.",
  },
  {
    q: "What does it cost?",
    a: "Start free. Upgrade when you need to.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export function FAQ() {
  return (
    <Section id="faq" bg="subtle">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full bg-base px-3 py-1 text-[11px] font-semibold tracking-wide text-ink-soft uppercase ring-1 ring-inset ring-line">
              FAQ
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold tracking-tight text-ink">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Still have a question?{" "}
              <a href={`${siteConfig.appUrl}`} className="font-semibold text-ink underline underline-offset-4 hover:text-link">
                Start free
              </a>{" "}
              and see for yourself.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-line bg-base transition-colors hover:border-ink-faint/50"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[14.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown
                    size={17}
                    className="flex-none text-ink-faint transition-transform duration-200 group-open:rotate-180"
                    strokeWidth={2.2}
                  />
                </summary>
                <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
