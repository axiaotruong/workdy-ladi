import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="border-t border-line-subtle bg-subtle px-6 py-20 text-center sm:px-8 sm:py-24">
      <h2 className="mx-auto max-w-xl text-[clamp(1.75rem,4.2vw,2.5rem)] leading-tight font-bold tracking-tight text-balance text-ink">
        Hire your first AI employee today.
      </h2>
      <div className="mt-7">
        <Button href={siteConfig.appUrl}>Start free</Button>
      </div>
    </section>
  );
}
