import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const perks = ["No credit card needed", "Free templates included", "Upgrade only when you scale"];

export function FinalCta() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-dark-page text-white">
      <div className="bg-dot-grid-dark mask-radial-fade pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(79,70,229,0.22),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/70 uppercase backdrop-blur">
            <span className="size-1.5 rounded-full bg-dot-ready" />
            Ready when you are
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-bold tracking-tight text-balance">
            Hire your first AI employee today
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Start free, pick a template, and watch the repetitive work take care of itself.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex justify-center">
            <Button href={siteConfig.appUrl} variant="invert">
              Start free
              <ArrowRight size={17} strokeWidth={2.2} />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
            {perks.map((perk) => (
              <span key={perk} className="inline-flex items-center gap-2 text-[13px] text-white/60">
                <Check size={14} className="text-dot-ready" strokeWidth={2.5} />
                {perk}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
