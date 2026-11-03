import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineShowcase } from "@/components/ui/PipelineShowcase";
import { siteConfig } from "@/config/site";

export function UseCasePipelines() {
  return (
    <Section id="pipelines" bg="subtle">
      <SectionHeading
        eyebrow="Pipelines"
        title="Pipelines built for online sellers"
        description="The research and video work that eats your day — ready-made pipelines, every step a real tool inside Workdy. Every account starts with them, no setup required."
      />

      <PipelineShowcase href={siteConfig.appUrl} />
    </Section>
  );
}
