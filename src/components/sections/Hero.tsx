import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TypingWord } from "@/components/ui/TypingWord";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient background: faded dot-grid + soft top glow */}
      <div
        className="bg-dot-grid mask-b-fade pointer-events-none absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-72 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(79,70,229,0.06),transparent)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <h1
            className="animate-fade-in text-[clamp(2rem,5.2vw,3.75rem)] leading-[1.05] font-bold tracking-tight text-balance text-ink"
            style={{ animationDelay: "0.08s" }}
          >
            Hire AI{" "}
            <TypingWord words={["employees", "researchers", "creators", "marketers", "editors"]} />
            <br />
            for your online store
          </h1>

          <p
            className="animate-fade-in mt-5 max-w-lg text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "0.16s" }}
          >
            Spy the market, turn product photos into TikTok videos, remake ads that already
            sell — your AI employees do the repetitive work. Run 1 or 100, same effort.
          </p>

          <div
            className="animate-fade-in mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.24s" }}
          >
            <Button href={siteConfig.appUrl}>
              Start free
              <ArrowRight size={17} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
            </Button>
            <Button href="#pipelines" variant="secondary">
              <PlayCircle size={17} strokeWidth={2} />
              See the pipelines
            </Button>
          </div>

          <p
            className="animate-fade-in mt-6 text-[13px] text-ink-faint"
            style={{ animationDelay: "0.32s" }}
          >
            Powered by Gemini · Videos by Seedance 2.5 · No credit card needed
          </p>
        </div>

        <div className="animate-fade-in lg:pl-4" style={{ animationDelay: "0.2s" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
