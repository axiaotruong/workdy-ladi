import { SectionHeading } from "@/components/ui/SectionHeading";

const integrations = [
  { label: "Google", short: "G" },
  { label: "TikTok Ads", short: "TT" },
  { label: "WordPress", short: "W" },
  { label: "Slack", short: "S" },
  { label: "Notion", short: "N" },
  { label: "Telegram", short: "T" },
  { label: "GitHub", short: "GH" },
];

export function IntegrationsGrid() {
  return (
    <section id="integrations" className="border-t border-line-subtle bg-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        title="Connects with the tools you already use"
        description="Google, TikTok Ads, WordPress, Slack, Notion, Telegram, GitHub — plus MCP and HTTP for everything else."
      />

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        {integrations.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2.5 rounded-xl border border-line bg-base px-3 py-5 text-center transition-all duration-150 hover:border-ink-faint/60 hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
          >
            <span className="flex size-9 items-center justify-center rounded-[9px] bg-muted text-sm font-bold text-ink-soft">
              {item.short}
            </span>
            <span className="text-[12.5px] font-semibold text-ink">{item.label}</span>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-line bg-subtle px-3 py-5 text-center">
          <span className="flex size-9 items-center justify-center rounded-[9px] bg-muted text-sm font-bold text-ink-soft">
            +
          </span>
          <span className="text-[12.5px] font-medium text-ink-soft">MCP &amp; HTTP</span>
        </div>
      </div>
    </section>
  );
}
