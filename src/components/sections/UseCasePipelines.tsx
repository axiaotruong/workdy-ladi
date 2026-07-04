import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineCard } from "@/components/ui/PipelineCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const pipelines = [
  {
    category: "Research" as const,
    title: "Find a winning niche",
    description: "Spot demand, size up competitors, get a decision-ready report in minutes.",
    steps: ["Scan Market Demand", "Detect Competitors", "Company Deep Dive"],
  },
  {
    category: "Creative" as const,
    title: "Produce an ad video",
    description: "From product photos to a finished ad video — no manual editing.",
    steps: ["Analyze Product Images", "Find Creative Angle", "Generate Video"],
  },
  {
    category: "Content" as const,
    title: "Write listings at scale",
    description: "Titles, descriptions, and tags for hundreds of products — reviewed before going live.",
    steps: ["Keyword Research", "Write Article", "Human review", "Publish"],
  },
  {
    category: "Ads" as const,
    title: "Run and optimize ads",
    description: "Sync campaign performance and get an automatic daily report.",
    steps: ["TikTok Campaigns", "Ads Performance Sync", "Report"],
  },
];

export function UseCasePipelines() {
  return (
    <Section id="pipelines" bg="subtle">
      <SectionHeading
        eyebrow="Pipelines"
        eyebrowAccent="blue"
        title="Pipelines built for POD sellers"
        description="The research, video, and listing work that eats your day — four ready-made pipelines, every step a real tool inside Workdy. Use them as is, no setup required."
      />

      <Stagger className="mt-12 grid gap-5 lg:grid-cols-2">
        {pipelines.map((pipeline) => (
          <StaggerItem key={pipeline.title}>
            <PipelineCard href={siteConfig.appUrl} {...pipeline} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
