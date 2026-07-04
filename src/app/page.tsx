import { Hero } from "@/components/sections/Hero";
import { ScaleWithoutHiring } from "@/components/sections/ScaleWithoutHiring";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCasePipelines } from "@/components/sections/UseCasePipelines";
import { BrandKnowledge } from "@/components/sections/BrandKnowledge";
import { PublishAndDeploy } from "@/components/sections/PublishAndDeploy";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ScaleWithoutHiring />
      <HowItWorks />
      <UseCasePipelines />
      <BrandKnowledge />
      <PublishAndDeploy />
      <IntegrationsGrid />
      <FAQ />
      <FinalCta />
    </main>
  );
}
