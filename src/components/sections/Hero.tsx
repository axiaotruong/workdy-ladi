import { AccentText } from "@/components/ui/AccentText";
import { Button } from "@/components/ui/Button";
import { HeroRoster } from "@/components/sections/HeroRoster";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-24">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold tracking-wide text-ink-soft uppercase">
          <span className="size-1.5 rounded-full bg-dot-ready" aria-hidden="true" />
          AI workforce · POD
        </span>

        <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.125rem)] leading-[1.08] font-bold tracking-tight text-balance text-ink">
          Hire <AccentText>AI employees</AccentText> for your POD store
        </h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
          Research, ad videos, listings — your AI employees handle the repetitive work so
          you can focus on growth. Run 1 or 100, same effort.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={siteConfig.appUrl}>Start free</Button>
          <Button href="#pipelines" variant="secondary">
            See a real workflow run →
          </Button>
        </div>
      </div>

      <HeroRoster />
    </section>
  );
}
