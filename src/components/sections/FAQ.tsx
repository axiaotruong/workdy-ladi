import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section id="faq" className="border-t border-line-subtle bg-subtle px-6 py-16 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SectionHeading title="Frequently asked questions" />

      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2.5">
        {faqs.map((faq, index) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-line bg-base"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[14px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {faq.q}
              <span className="flex-none text-xs text-ink-faint transition-transform duration-150 group-open:rotate-180">
                ▾
              </span>
            </summary>
            <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-ink-soft">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
