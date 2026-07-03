import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const publishFeatures = [
  {
    icon: "🔧",
    title: "A tool for other AI employees",
    description:
      "Turn a workflow into a shared skill other agents can call — build once, reuse everywhere.",
  },
  {
    icon: "⚡",
    title: "An API",
    description:
      "Get an API key, rate limits (RPM + daily), and auto-generated docs in curl, Python, and JavaScript.",
  },
  {
    icon: "🔗",
    title: "A webhook / automated trigger",
    description:
      "Trigger by webhook, on a schedule, or run async with streaming, stop, and status support.",
  },
  {
    icon: "🕘",
    title: "Versioning",
    description:
      "Publishing freezes a version and keeps history — edit safely without breaking what's live.",
  },
];

const deployChannels = [
  {
    status: "Live",
    statusClass: "bg-dot-ready/10 text-green-700",
    title: "Telegram",
    description: "Chat with your AI employee right in Telegram.",
  },
  {
    status: "Via MCP",
    statusClass: "bg-muted text-ink-soft",
    title: "Slack",
    description: "Your AI employee can send and search messages in Slack.",
  },
];

export function PublishAndDeploy() {
  return (
    <section className="border-t border-line-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading eyebrow="Key feature" title="Publish once, use everywhere" />

      <div className="mx-auto mt-10 max-w-4xl">
        <h3 className="text-[13px] font-semibold tracking-wide text-ink-faint uppercase">
          Publish a workflow as
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {publishFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <h3 className="text-[13px] font-semibold tracking-wide text-ink-faint uppercase">
          Deploy an AI employee to chat
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {deployChannels.map((channel) => (
            <div key={channel.title} className="rounded-xl border border-line bg-base p-5 sm:p-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[14.5px] font-bold text-ink">{channel.title}</span>
                <span
                  className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${channel.statusClass}`}
                >
                  {channel.status}
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {channel.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-dashed border-line bg-subtle p-4 text-center text-[12.5px] text-ink-soft">
          Coming soon: Lark/Feishu, Larkbase as a data source, and a web chat widget.
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[13.5px] leading-relaxed text-ink-soft">
        Need something custom? Call an HTTP endpoint, run JavaScript, or connect your own MCP
        server.
      </p>
    </section>
  );
}
