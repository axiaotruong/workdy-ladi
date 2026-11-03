import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineShowcase } from "@/components/ui/PipelineShowcase";
import { siteConfig } from "@/config/site";

export function UseCasePipelines() {
  return (
    <Section id="pipelines" bg="subtle">
      <SectionHeading
        title="Pipelines built for online sellers"
        description="The research and video work that eats your day — ready-made pipelines, every step a real tool inside Workdy. Start from a template, no setup required."
      />

      <PipelineShowcase href={siteConfig.appUrl} />
    </Section>
  );
}
