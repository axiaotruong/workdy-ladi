"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clapperboard, Feather, Sparkles, Volume2, VolumeX, Zap, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { siteConfig } from "@/config/site";

// Real renders made in Workdy and generated with Seedance — compressed copies live in /public/showcase.
type Clip = { id: string; product: string; style: "UGC" | "Lifestyle" | "Product focus" };

const CLIPS: Clip[] = [
  { id: "v01", product: "Embroidered hoodie", style: "UGC" },
  { id: "v02", product: "Goal planner", style: "UGC" },
  { id: "v05", product: "All-over print hoodie", style: "Lifestyle" },
  { id: "v06", product: "Book box set", style: "UGC" },
  { id: "v03", product: "Holiday sweatshirt", style: "Product focus" },
  { id: "v09", product: "Fitness journal", style: "UGC" },
  { id: "v04", product: "Graphic hoodie", style: "Lifestyle" },
  { id: "v10", product: "Acrylic ornaments", style: "Product focus" },
  { id: "v08", product: "Christmas sweatshirt", style: "Product focus" },
  { id: "v07", product: "Planner close-up", style: "Product focus" },
];

const MODELS: { name: string; note: string; icon: LucideIcon; isNew?: boolean }[] = [
  { name: "Seedance 2.5", note: "Newest · up to 30s", icon: Sparkles, isNew: true },
  { name: "Seedance 2.0", note: "High quality · 1080p", icon: Clapperboard },
  { name: "Seedance 2.0 Fast", note: "Quick turnaround", icon: Zap },
  { name: "Seedance 2.0 Mini", note: "Light drafts", icon: Feather },
];

export function SeedanceShowcase() {
  const reduce = usePrefersReducedMotion();
  // Only one card may play sound at a time; everything else stays muted so autoplay is allowed.
  const [soundKey, setSoundKey] = useState<string | null>(null);
  // Duplicate the list so the marquee can loop seamlessly at translateX(-50%).
  const track = reduce ? CLIPS : [...CLIPS, ...CLIPS];

  return (
    <section id="showcase" className="relative scroll-mt-20 overflow-hidden bg-dark-page text-white">
      <div className="bg-dot-grid-dark mask-radial-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(55%_100%_at_50%_0%,rgba(139,92,246,0.22),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 sm:px-8 sm:pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/75 uppercase backdrop-blur">
            <span className="size-1.5 rounded-full bg-cat-purple" />
            Made with Workdy × Seedance
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,2.9rem)] leading-[1.08] font-bold tracking-tight text-balance">
            Product videos that look shot, not generated
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-pretty text-white/65">
            Every clip below came out of a Workdy pipeline and was rendered with ByteDance&apos;s Seedance —
            vertical 9:16, ready for TikTok, Reels, and Shorts. Tap a video to hear it.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mt-12">
        <div
          className={
            reduce
              ? "flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-8"
              : "mask-x-fade group/marquee overflow-hidden"
          }
        >
          <ul
            className={
              reduce
                ? "flex gap-4"
                : "animate-marquee-slow flex w-max gap-4 group-hover/marquee:[animation-play-state:paused]"
            }
          >
            {track.map((clip, index) => {
              const key = `${clip.id}-${index}`;
              return (
                <li key={key} className="snap-start" aria-hidden={index >= CLIPS.length ? true : undefined}>
                  <VideoCard
                    clip={clip}
                    autoPlay={!reduce}
                    withSound={soundKey === key}
                    onToggleSound={() => setSoundKey((current) => (current === key ? null : key))}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-20 text-center sm:px-8 sm:pb-24">
        <Reveal>
          <p className="text-[13px] font-semibold tracking-wide text-white/45 uppercase">
            Powered by the Seedance family
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-5 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
          {MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <StaggerItem key={model.name}>
                <div
                  className={`flex h-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-200 hover:border-white/25 ${
                    model.isNew
                      ? "border-cat-purple/45 bg-[linear-gradient(160deg,rgba(139,92,246,0.2),rgba(139,92,246,0.05))] shadow-[0_0_36px_-14px_rgba(139,92,246,0.7)]"
                      : "border-white/10 bg-dark-card"
                  }`}
                >
                  <span className="flex size-9 flex-none items-center justify-center rounded-lg bg-white/[0.07] text-white">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-[13.5px] leading-tight font-bold">{model.name}</span>
                      {model.isNew ? (
                        <span className="rounded-md bg-cat-purple px-1.5 py-0.5 text-[9.5px] leading-none font-bold tracking-wide text-white uppercase">
                          New
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-[12px] text-white/50">{model.note}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1} className="mt-7 flex justify-center">
          <Button href={siteConfig.appUrl} variant="invert">
            Make your first video
            <ArrowRight size={17} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

type VideoCardProps = {
  clip: Clip;
  autoPlay: boolean;
  withSound: boolean;
  onToggleSound: () => void;
};

function VideoCard({ clip, autoPlay, withSound, onToggleSound }: VideoCardProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);

  // Attach the source only once the card nears the viewport, and play only while it is
  // actually visible — keeps a 20-card marquee from downloading or decoding everything at once.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setNear(true);
      },
      { rootMargin: "0px 200px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Runs after `src` is attached, so play() has something to load.
  useEffect(() => {
    const video = ref.current;
    if (!video || !near) return;
    video.muted = !withSound;
    if (visible && (autoPlay || withSound)) video.play().catch(() => {});
    else video.pause();
  }, [near, visible, autoPlay, withSound]);

  return (
    <button
      type="button"
      onClick={onToggleSound}
      aria-label={`${clip.product} — ${withSound ? "mute" : "play with sound"}`}
      className={`group relative block aspect-[9/16] w-[168px] overflow-hidden rounded-2xl bg-dark-card text-left ring-1 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 sm:w-[212px] ${
        withSound ? "ring-2 ring-cat-purple" : "ring-white/10"
      } shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)]`}
    >
      <video
        ref={ref}
        src={near ? `/showcase/${clip.id}.mp4` : undefined}
        poster={`/showcase/${clip.id}.jpg`}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 size-full object-cover"
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />
      <span className="absolute top-2.5 left-2.5 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white/90 backdrop-blur">
        {clip.style}
      </span>
      <span className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-black/45 text-white/90 backdrop-blur transition-opacity sm:opacity-0 sm:group-hover:opacity-100 data-[on=true]:opacity-100" data-on={withSound}>
        {withSound ? <Volume2 size={14} strokeWidth={2.2} /> : <VolumeX size={14} strokeWidth={2.2} />}
      </span>
      <span className="absolute inset-x-3 bottom-3 text-[12.5px] font-semibold text-white">{clip.product}</span>
    </button>
  );
}
