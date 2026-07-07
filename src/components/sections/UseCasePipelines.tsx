import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineShowcase } from "@/components/ui/PipelineShowcase";
import { siteConfig } from "@/config/site";

export function UseCasePipelines() {
  return (
    <Section id="pipelines" bg="subtle">
      <SectionHeading
        eyebrow="Pipelines"
        title="Pipelines built for POD sellers"
        description="The research, video, and listing work that eats your day — four ready-made pipelines, every step a real tool inside Workdy. Use them as is, no setup required."
      />

      <PipelineShowcase href={siteConfig.appUrl} />
    </Section>
  );
}
