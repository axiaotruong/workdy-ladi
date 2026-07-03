import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PainPoints } from "@/components/sections/PainPoints";
import { ScaleWithoutHiring } from "@/components/sections/ScaleWithoutHiring";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCasePipelines } from "@/components/sections/UseCasePipelines";
import { CapabilityStats } from "@/components/sections/CapabilityStats";
import { TeamsByRole } from "@/components/sections/TeamsByRole";
import { BrandKnowledge } from "@/components/sections/BrandKnowledge";
import { PublishAndDeploy } from "@/components/sections/PublishAndDeploy";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { BuiltForTrust } from "@/components/sections/BuiltForTrust";
import { SocialProof } from "@/components/sections/SocialProof";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustStrip />
      <PainPoints />
      <ScaleWithoutHiring />
      <HowItWorks />
      <UseCasePipelines />
      <CapabilityStats />
      <TeamsByRole />
      <BrandKnowledge />
      <PublishAndDeploy />
      <IntegrationsGrid />
      <BuiltForTrust />
      <SocialProof />
      <PricingTeaser />
      <FAQ />
      <FinalCta />
    </main>
  );
}
