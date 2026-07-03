import { PipelineCard } from "@/components/ui/PipelineCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    description:
      "Titles, descriptions, and tags for hundreds of products, with a review step before anything goes live.",
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
    <section id="pipelines" className="border-t border-line-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Key feature"
        title="Pipelines built for POD sellers"
        description="Four ready-made pipelines. Every step is a real tool inside Workdy — use it as is, no setup required."
      />

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        {pipelines.map((pipeline) => (
          <PipelineCard key={pipeline.title} href={siteConfig.appUrl} {...pipeline} />
        ))}
      </div>
    </section>
  );
}
