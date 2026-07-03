import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export function SocialProof() {
  return (
    <section className="border-t border-line-subtle px-6 py-16 text-center sm:px-8 sm:py-20">
      <SectionHeading
        title="Start from a template, not a blank canvas."
        description="Six ready-to-run templates cover the most common POD workflows — pick one and customize it for your store."
      />

      <div className="mt-7">
        <Button href={siteConfig.appUrl} variant="secondary">
          Browse templates
        </Button>
      </div>
    </section>
  );
}
