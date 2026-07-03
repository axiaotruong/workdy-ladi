import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function PricingTeaser() {
  return (
    <section id="pricing" className="border-t border-line-subtle bg-subtle px-6 py-14 text-center sm:px-8">
      <p className="text-[15.5px] font-semibold text-ink">
        Start free — upgrade when you need to.
      </p>
      <div className="mt-5">
        <Button href={siteConfig.appUrl}>Start free</Button>
      </div>
    </section>
  );
}
