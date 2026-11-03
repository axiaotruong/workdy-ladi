"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Wrench, Zap, Webhook, History, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useInView } from "@/lib/useInView";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const ROTATE_MS = 5200;

// Snippets mirror the real public API (POST /api/v1/workflows/run, /webhooks/:id) and the
// spy_market tool name every account gets by default.
type Mode = {
  icon: LucideIcon;
  title: string;
  description: string;
  file: string;
  lines: ReactNode[];
};

const c = {
  dim: "text-white/40",
  key: "text-violet-300",
  str: "text-emerald-300",
  ok: "text-emerald-400",
};

const MODES: Mode[] = [
  {
    icon: Wrench,
    title: "As a shared tool",
    description: "Other AI employees can call it — build once, reuse everywhere.",
    file: "chat · Workdy Agent",
    lines: [
      <span key="1" className={c.dim}>you › find a gift niche for the US, then storyboard the winner</span>,
      <span key="2">
        <span className={c.key}>call</span> spy_market({"{"} niche_keyword: <span className={c.str}>&quot;pet gifts&quot;</span>, country:{" "}
        <span className={c.str}>&quot;US&quot;</span> {"}"})
      </span>,
      <span key="3" className={c.ok}>✓ 4 ideas scored from 5 sources</span>,
      <span key="4" className={c.dim}>→ handing &quot;pet memorial ornament&quot; to Image → Video</span>,
      <span key="5" className={c.ok}>✓ storyboard ready · 9:16 · 15s</span>,
    ],
  },
  {
    icon: Zap,
    title: "As an API",
    description: "API key, rate limits, and auto-generated docs in curl, Python, and JavaScript.",
    file: "terminal",
    lines: [
      <span key="1">
        curl -X POST <span className={c.str}>https://app.workdy.ai/api/v1/workflows/run</span> \
      </span>,
      <span key="2">
        {"  "}-H <span className={c.str}>&quot;Authorization: Bearer wk_YOUR_API_KEY&quot;</span> \
      </span>,
      <span key="3">
        {"  "}-d <span className={c.str}>&apos;{"{"} &quot;inputs&quot;: {"{"} &quot;niche_keyword&quot;: &quot;pet gifts&quot; {"}"} {"}"}&apos;</span>
      </span>,
      <span key="4" className={c.dim}>
        # → {"{"} &quot;success&quot;: true, &quot;data&quot;: {"{"} &quot;outputs&quot;: … {"}"} {"}"}
      </span>,
    ],
  },
  {
    icon: Webhook,
    title: "As a webhook",
    description: "Trigger from any app or on a schedule — runs in the background.",
    file: "terminal",
    lines: [
      <span key="1">
        curl -X POST <span className={c.str}>https://app.workdy.ai/api/v1/workflows/webhooks/wf_123</span> \
      </span>,
      <span key="2">
        {"  "}-H <span className={c.str}>&quot;X-Webhook-Secret: YOUR_WEBHOOK_SECRET&quot;</span> \
      </span>,
      <span key="3">
        {"  "}-d <span className={c.str}>&apos;{"{"} &quot;inputs&quot;: {"{"}{"}"} {"}"}&apos;</span>
      </span>,
      <span key="4" className={c.dim}>
        # → {"{"} &quot;success&quot;: true, &quot;run_id&quot;: &quot;…&quot; {"}"}
      </span>,
    ],
  },
  {
    icon: History,
    title: "With versioning",
    description: "Publishing freezes a version — edit safely without breaking what's live.",
    file: "versions · Spy Market",
    lines: [
      <span key="1">
        <span className={c.ok}>● v3</span> <span className="text-white/85">live</span>{" "}
        <span className={c.dim}>· new market sources</span>
      </span>,
      <span key="2">
        <span className="text-white/50">○ v2</span> <span className={c.dim}>· kept in history</span>
      </span>,
      <span key="3">
        <span className="text-white/50">○ v1</span> <span className={c.dim}>· kept in history</span>
      </span>,
      <span key="4" className={c.dim}>
        # draft edits stay private until you publish v4
      </span>,
    ],
  },
];

export function PublishAndDeploy() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const autoplay = inView && !paused && !reduce;

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % MODES.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [active, autoplay]);

  const mode = MODES[active];

  return (
    <Section>
      <SectionHeading
        title="Publish once, use everywhere"
        description="Build a workflow, then ship it however you need — as a shared tool, an API, or a webhook, with versions kept safe."
      />

      <Reveal delay={0.08} className="mt-12">
        <div
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div role="tablist" aria-label="Ways to publish" className="flex flex-col gap-2">
            {MODES.map((m, idx) => {
              const Icon = m.icon;
              const selected = idx === active;
              return (
                <button
                  key={m.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(idx)}
                  className={`relative overflow-hidden rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                    selected
                      ? "border-line bg-base shadow-[0_8px_24px_-14px_rgba(17,24,39,0.35)]"
                      : "border-transparent hover:bg-subtle"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-8 flex-none items-center justify-center rounded-lg transition-colors ${
                        selected ? "bg-cat-purple/10 text-cat-purple" : "bg-muted text-ink-soft"
                      }`}
                    >
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <div className={`text-[14.5px] font-bold ${selected ? "text-ink" : "text-ink-soft"}`}>{m.title}</div>
                      <div className="mt-0.5 text-[12.5px] leading-snug text-ink-soft">{m.description}</div>
                    </div>
                  </div>
                  {selected && autoplay ? (
                    <span
                      key={`bar-${active}`}
                      className="progress-x absolute inset-x-0 bottom-0 h-0.5 bg-cat-purple"
                      style={{ animationDuration: `${ROTATE_MS}ms` }}
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[260px] min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-dark-card shadow-[0_30px_60px_-30px_rgba(17,24,39,0.55)]">
            <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-4 py-3">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[11px] text-white/40">{mode.file}</span>
            </div>
            <pre
              key={active}
              className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.9] text-white/85"
            >
              {mode.lines.map((line, i) => (
                <div key={i} className="animate-fade-in whitespace-pre" style={{ animationDelay: `${i * 0.12}s` }}>
                  {line}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
