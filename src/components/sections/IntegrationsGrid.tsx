import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { SiGoogle, SiTiktok, SiWordpress, SiNotion, SiTelegram, SiGithub } from "react-icons/si";
import { FaSlack } from "react-icons/fa6";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ChatDemo } from "@/components/sections/ChatDemo";

const integrations: { name: string; icon: IconType; color: string }[] = [
  { name: "Google", icon: SiGoogle, color: "#4285F4" },
  { name: "TikTok Ads", icon: SiTiktok, color: "#EE1D52" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Slack", icon: FaSlack, color: "#611F69" },
  { name: "Notion", icon: SiNotion, color: "#111827" },
  { name: "Telegram", icon: SiTelegram, color: "#26A5E4" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];

export function IntegrationsGrid() {
  return (
    <Section id="integrations" bg="subtle">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        {/* left: copy + real brand logos */}
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-base px-3 py-1 text-[11px] font-semibold tracking-wide text-ink-soft uppercase ring-1 ring-inset ring-line">
              Integrations
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold tracking-tight text-balance text-ink">
              Connects with the tools you already use
            </h2>
            <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
              Wire workflows into the apps you run on, or drop an AI employee straight into your
              team chat — with MCP and HTTP for everything else.
            </p>
          </Reveal>

          <Stagger className="mt-8 flex flex-wrap gap-2.5" gap={0.05}>
            {integrations.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.name}>
                  <span
                    className="group hover-lift inline-flex items-center gap-2.5 rounded-xl border border-line bg-base px-3.5 py-2.5 shadow-[0_1px_2px_rgba(17,24,39,0.04)] hover:border-ink-faint/50"
                    style={{ "--bc": item.color } as CSSProperties}
                  >
                    <Icon
                      size={18}
                      className="text-ink-faint transition-colors duration-200 group-hover:text-[var(--bc)]"
                    />
                    <span className="text-[13.5px] font-semibold text-ink">{item.name}</span>
                  </span>
                </StaggerItem>
              );
            })}
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-line bg-subtle px-3.5 py-2.5 text-[13.5px] font-medium text-ink-soft">
                <Plus size={16} strokeWidth={2.2} className="text-ink-faint" />
                MCP &amp; HTTP
              </span>
            </StaggerItem>
          </Stagger>
        </div>

        {/* right: live chat demo (Telegram bot) */}
        <Reveal delay={0.1}>
          <ChatDemo />
        </Reveal>
      </div>
    </Section>
  );
}
