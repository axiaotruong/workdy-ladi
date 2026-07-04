"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ImageIcon, Sparkles, Play, TrendingUp } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Coordinate system matches the SVG viewBox (560 x 380) so % positions line up.
const VB_W = 560;
const VB_H = 380;
const pct = (v: number, total: number) => `${(v / total) * 100}%`;

const NODE1 = { cx: 105, cy: 100, w: 190, h: 88 };
const NODE2 = { cx: 310, cy: 100, w: 170, h: 72 };
const VIDEO = { cx: 450, cy: 270, w: 190, h: 108 };

const EDGE_A = "M200,100 C 210,100 215,100 225,100";
const EDGE_B1 = "M310,136 C 310,190 310,230 310,270";
const EDGE_B2 = "M310,270 C 330,270 345,270 355,270";

const PRODUCTS = [
  { src: "/mockups/tumbler.jpg", name: "Tumbler", caption: "Stays cold 24h ❄️", glow: "rgba(59,130,246,0.55)" },
  { src: "/mockups/hat.jpg", name: "Hat", caption: "One size fits all 🧢", glow: "rgba(245,158,11,0.5)" },
  { src: "/mockups/tshirt.jpg", name: "T-shirt", caption: "Soft cotton feel 👕", glow: "rgba(236,72,153,0.5)" },
] as const;

// where the flying photo starts from (outside the canvas, top-right) and lands (node 1's icon slot, centered)
const FLY_FROM = { x: 505, y: -55, size: 66 };
const FLY_TO = { x: NODE1.cx - NODE1.w / 2 + 12 + 28, y: NODE1.cy, size: 56 };

// step timeline — each step's index also gates "has this stage happened yet" for anything downstream
const STEP_ORDER = ["idle", "photo-in", "travel-1", "writing", "travel-2", "rendering", "playing", "hold"] as const;
type Step = (typeof STEP_ORDER)[number];
const DURATIONS: Record<Step, number> = {
  idle: 300,
  "photo-in": 900,
  "travel-1": 700,
  writing: 1100,
  "travel-2": 900,
  rendering: 1500,
  playing: 1800,
  hold: 700,
};

const reached = (step: Step, target: Step) => STEP_ORDER.indexOf(step) >= STEP_ORDER.indexOf(target);

export function HeroVisual() {
  const reduce = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const step: Step = reduce ? "playing" : STEP_ORDER[stepIndex];

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => {
      setStepIndex((i) => {
        const next = (i + 1) % STEP_ORDER.length;
        if (next === 0) setProductIndex((p) => (p + 1) % PRODUCTS.length);
        return next;
      });
    }, DURATIONS[STEP_ORDER[stepIndex]]);
    return () => clearTimeout(t);
  }, [stepIndex, reduce]);

  const photoArrived = reached(step, "photo-in");
  const travelingA = step === "travel-1";
  const edgeADrawn = reached(step, "travel-1");
  const writing = step === "writing";
  const scriptDone = reached(step, "travel-2");
  const travelingB = step === "travel-2";
  const edgeBDrawn = reached(step, "travel-2");
  const videoState: "idle" | "rendering" | "ready" = reached(step, "playing")
    ? "ready"
    : step === "rendering"
      ? "rendering"
      : "idle";

  const product = PRODUCTS[productIndex];

  const glow = (on: boolean) =>
    on
      ? "border-dot-ready/60 shadow-[0_0_0_2px_rgba(34,197,94,0.55),0_8px_20px_-6px_rgba(34,197,94,0.45)]"
      : "border-line";

  return (
    <div className="relative">
      {/* soft ambient halo behind the window */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(17,24,39,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl border border-line bg-base shadow-[0_2px_8px_rgba(17,24,39,0.06),0_40px_80px_-32px_rgba(17,24,39,0.35)]"
      >
        {/* window title bar */}
        <div className="flex items-center gap-2 border-b border-line-subtle bg-subtle/70 px-4 py-3">
          <span className="size-2.5 rounded-full bg-dot-error/70" />
          <span className="size-2.5 rounded-full bg-dot-processing/70" />
          <span className="size-2.5 rounded-full bg-dot-ready/70" />
          <span className="ml-3 rounded-md bg-base px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-ink-faint ring-1 ring-line">
            workdy · pod-sales-video.flow
          </span>
          <span className="ml-auto hidden items-center gap-1.5 rounded-md bg-dot-ready/10 px-2 py-1 text-[10.5px] font-semibold text-green-600 sm:inline-flex">
            <span className="size-1.5 rounded-full bg-dot-ready" />
            running
          </span>
        </div>

        {/* canvas */}
        <div className="bg-dot-grid relative aspect-[560/380] w-full">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            fill="none"
            aria-hidden="true"
          >
            {/* faint guide rails, always visible */}
            <path d={EDGE_A} stroke="var(--color-line)" strokeWidth={2} />
            <path d={EDGE_B1} stroke="var(--color-line)" strokeWidth={2} />
            <path d={EDGE_B2} stroke="var(--color-line)" strokeWidth={2} />

            {/* live connections, draw on as data flows through */}
            <motion.path
              d={EDGE_A}
              stroke="var(--color-dot-ready)"
              strokeWidth={2}
              strokeLinecap="round"
              initial={false}
              animate={{ pathLength: edgeADrawn ? 1 : 0, opacity: edgeADrawn ? 1 : 0 }}
              transition={{ duration: travelingA ? 0.7 : 0.25, ease: "easeInOut" }}
            />
            <motion.path
              d={EDGE_B1}
              stroke="var(--color-dot-ready)"
              strokeWidth={2}
              strokeLinecap="round"
              initial={false}
              animate={{ pathLength: edgeBDrawn ? 1 : 0, opacity: edgeBDrawn ? 1 : 0 }}
              transition={{ duration: travelingB ? 0.5 : 0.25, ease: "easeInOut" }}
            />
            <motion.path
              d={EDGE_B2}
              stroke="var(--color-dot-ready)"
              strokeWidth={2}
              strokeLinecap="round"
              initial={false}
              animate={{ pathLength: edgeBDrawn ? 1 : 0, opacity: edgeBDrawn ? 1 : 0 }}
              transition={{ duration: travelingB ? 0.4 : 0.25, delay: travelingB ? 0.5 : 0, ease: "easeInOut" }}
            />

            {/* traveling packet — node 1 to node 2 */}
            {!reduce && travelingA ? (
              <motion.circle
                r={5}
                fill="var(--color-dot-ready)"
                initial={{ opacity: 0 }}
                animate={{ cx: [200, 225], cy: [100, 100], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            ) : null}

            {/* traveling packet — node 2 down and across to the video output */}
            {!reduce && travelingB ? (
              <motion.circle
                r={5}
                fill="var(--color-dot-ready)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [310, 310, 355],
                  cy: [136, 270, 270],
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{ duration: 0.9, ease: "easeInOut", times: [0, 0.05, 0.55, 0.9, 1] }}
              />
            ) : null}
          </svg>

          {/* flying photo — swoops in from outside the canvas and lands on node 1 */}
          {!reduce && step === "photo-in" ? (
            <motion.div
              key={`fly-${productIndex}`}
              className="pointer-events-none absolute z-20 overflow-hidden rounded-xl shadow-[0_16px_36px_-10px_rgba(0,0,0,0.4)] ring-2 ring-white"
              initial={{
                left: pct(FLY_FROM.x - FLY_FROM.size / 2, VB_W),
                top: pct(FLY_FROM.y - FLY_FROM.size / 2, VB_H),
                width: pct(FLY_FROM.size, VB_W),
                height: pct(FLY_FROM.size, VB_H),
                opacity: 0,
                rotate: 22,
              }}
              animate={{
                left: pct(FLY_TO.x - FLY_TO.size / 2, VB_W),
                top: pct(FLY_TO.y - FLY_TO.size / 2, VB_H),
                width: pct(FLY_TO.size, VB_W),
                height: pct(FLY_TO.size, VB_H),
                opacity: [0, 1, 1, 0],
                rotate: [22, -6, 0, 0],
              }}
              transition={{ duration: 0.85, ease: EASE, times: [0, 0.65, 0.85, 1] }}
            >
              <img src={product.src} alt={product.name} className="size-full object-cover" />
            </motion.div>
          ) : null}

          {/* landing glow ring — pulses out right as the photo touches down */}
          {!reduce && step === "photo-in" ? (
            <motion.span
              className="pointer-events-none absolute z-10 rounded-full border-2 border-dot-ready/70"
              style={{
                left: pct(FLY_TO.x - FLY_TO.size / 2, VB_W),
                top: pct(FLY_TO.y - FLY_TO.size / 2, VB_H),
                width: pct(FLY_TO.size, VB_W),
                height: pct(FLY_TO.size, VB_H),
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.9, 0], scale: [0.6, 1.7, 2.1] }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            />
          ) : null}

          {/* node 1 — product photo upload */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.94 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
            className={`absolute flex flex-col justify-center overflow-hidden rounded-xl border bg-base px-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)] transition-[box-shadow,border-color] duration-300 ${glow(
              step === "photo-in",
            )}`}
            style={{
              left: pct(NODE1.cx - NODE1.w / 2, VB_W),
              top: pct(NODE1.cy - NODE1.h / 2, VB_H),
              width: pct(NODE1.w, VB_W),
              height: pct(NODE1.h, VB_H),
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-14 flex-none items-center justify-center overflow-hidden rounded-lg border border-line-subtle bg-muted">
                <AnimatePresence mode="wait" initial={false}>
                  {photoArrived ? (
                    <motion.img
                      key={`p-${productIndex}`}
                      src={product.src}
                      alt={product.name}
                      initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={reduce ? { duration: 0.3 } : { duration: 0.25, ease: EASE, delay: 0.6 }}
                      className="size-full object-cover"
                    />
                  ) : (
                    <motion.span
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-ink-faint"
                    >
                      <ImageIcon size={22} strokeWidth={1.6} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="truncate font-mono text-[8.5px] tracking-wide text-ink-faint uppercase">Input</span>
                  <span className={`size-1.5 flex-none rounded-full ${photoArrived ? "bg-dot-ready" : "bg-dot-idle"}`} />
                </div>
                <div className="mt-0.5 truncate text-[12.5px] font-semibold text-ink">Product photo</div>
              </div>
            </div>
          </motion.div>

          {/* node 2 — AI writes the sales script */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.94 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
            className={`absolute flex flex-col justify-center overflow-hidden rounded-xl border bg-base px-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)] transition-[box-shadow,border-color] duration-300 ${glow(
              writing,
            )}`}
            style={{
              left: pct(NODE2.cx - NODE2.w / 2, VB_W),
              top: pct(NODE2.cy - NODE2.h / 2, VB_H),
              width: pct(NODE2.w, VB_W),
              height: pct(NODE2.h, VB_H),
            }}
          >
            <div className="flex items-center gap-2">
              <span className="relative flex size-7 flex-none items-center justify-center rounded-md bg-muted text-ink-soft">
                {writing && !reduce ? (
                  <motion.span
                    className="absolute -inset-1 rounded-full border-2 border-dot-processing/25 border-t-dot-processing"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
                  />
                ) : null}
                <Sparkles size={14} strokeWidth={2} className="relative z-10" />
              </span>
              <span className="truncate font-mono text-[8px] tracking-wide text-ink-faint uppercase">AI</span>
              <span
                className={`ml-auto size-1.5 flex-none rounded-full ${
                  scriptDone ? "bg-dot-ready" : writing ? "bg-dot-processing" : "bg-dot-idle"
                }`}
              />
            </div>
            <div className="relative mt-0.5 h-[15px] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={writing ? "writing" : "idle-label"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute inset-0 truncate text-[12px] font-semibold text-ink"
                >
                  {writing ? "Generating hook…" : "Write sales script"}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* colored ambient glow behind the output card, tinted per product */}
          <motion.div
            className="pointer-events-none absolute rounded-[1.5rem] blur-xl"
            style={{
              left: pct(VIDEO.cx - VIDEO.w / 2 - 16, VB_W),
              top: pct(VIDEO.cy - VIDEO.h / 2 - 16, VB_H),
              width: pct(VIDEO.w + 32, VB_W),
              height: pct(VIDEO.h + 32, VB_H),
              background: `radial-gradient(60% 60% at 50% 50%, ${product.glow}, transparent 72%)`,
            }}
            initial={false}
            animate={{ opacity: videoState !== "idle" ? 1 : 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          />

          {/* output node — rendered POD sales video */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.94 }}
            animate={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.6 }}
            className={`absolute overflow-hidden rounded-xl border bg-base shadow-[0_1px_2px_rgba(17,24,39,0.06)] transition-[box-shadow,border-color] duration-300 ${glow(
              videoState !== "idle",
            )}`}
            style={{
              left: pct(VIDEO.cx - VIDEO.w / 2, VB_W),
              top: pct(VIDEO.cy - VIDEO.h / 2, VB_H),
              width: pct(VIDEO.w, VB_W),
              height: pct(VIDEO.h, VB_H),
            }}
          >
            <div className="relative h-[64%] w-full bg-muted">
              <AnimatePresence mode="wait" initial={false}>
                {videoState === "idle" ? (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="font-mono text-[8px] tracking-wide text-ink-faint uppercase">
                      Awaiting input
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`thumb-${productIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <motion.img
                      src={product.src}
                      alt={product.name}
                      initial={{ scale: 1.04, x: "0%" }}
                      animate={reduce ? { scale: 1.1 } : { scale: 1.22, x: "-4%" }}
                      transition={{
                        duration: (DURATIONS.rendering + DURATIONS.playing + DURATIONS.hold) / 1000,
                        ease: "linear",
                      }}
                      className="absolute inset-0 size-full object-cover object-center"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                    {videoState === "ready" && !reduce ? (
                      <>
                        <motion.span
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          style={{ transformOrigin: "top" }}
                          className="absolute inset-x-0 top-0 h-[10%] bg-black/80"
                        />
                        <motion.span
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          style={{ transformOrigin: "bottom" }}
                          className="absolute inset-x-0 bottom-0 h-[10%] bg-black/80"
                        />
                      </>
                    ) : null}

                    <span className="absolute left-1.5 top-1.5 rounded bg-black/45 px-1.5 py-0.5 font-mono text-[7.5px] tracking-wide text-white uppercase">
                      Output
                    </span>
                    <span className="absolute right-1.5 bottom-1.5 rounded bg-black/45 px-1.5 py-0.5 font-mono text-[7.5px] text-white tabular">
                      0:31
                    </span>

                    {videoState === "rendering" ? (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <span className="rounded bg-black/55 px-1.5 py-0.5 font-mono text-[7.5px] tracking-wide text-white uppercase">
                          Rendering…
                        </span>
                      </span>
                    ) : null}

                    {videoState === "ready" ? (
                      <>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <span className="relative flex size-7 items-center justify-center">
                            {!reduce ? (
                              <motion.span
                                className="absolute inset-0 rounded-full bg-white/50"
                                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                              />
                            ) : null}
                            <span className="relative flex size-7 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
                              <Play size={13} strokeWidth={2.5} className="ml-0.5 text-ink" fill="currentColor" />
                            </span>
                          </span>
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, ease: EASE, delay: 0.15 }}
                          className="absolute inset-x-2 bottom-4 flex justify-center"
                        >
                          <span className="truncate rounded-full bg-black/60 px-2 py-0.5 text-[7.5px] font-semibold text-white">
                            {product.caption}
                          </span>
                        </motion.span>
                        {!reduce ? (
                          <span className="absolute bottom-1.5 left-1.5 flex items-end gap-[2px]">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <span
                                key={i}
                                className="waveform-bar w-[2px] rounded-full bg-white/80"
                                style={{ height: 7, animationDelay: `${i * 0.1}s` }}
                              />
                            ))}
                          </span>
                        ) : null}
                      </>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5">
              <span className="truncate text-[11px] font-semibold text-ink">POD sales video</span>
              <span
                className={`ml-auto size-1.5 flex-none rounded-full ${
                  videoState === "ready" ? "bg-dot-ready" : videoState === "rendering" ? "bg-dot-processing" : "bg-dot-idle"
                }`}
              />
            </div>
            <div className="mx-2.5 mb-1.5 h-1 overflow-hidden rounded-full bg-muted">
              <motion.span
                className="block h-full rounded-full bg-dot-ready"
                initial={false}
                animate={{ width: videoState === "idle" ? "0%" : videoState === "rendering" ? "100%" : "100%" }}
                transition={{
                  duration: videoState === "rendering" ? DURATIONS.rendering / 1000 : 0.3,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* floating roster card — overlaps for depth */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, x: 12 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
        className="animate-float absolute -bottom-8 -left-4 w-[62%] max-w-[280px] rounded-xl border border-line bg-base/95 p-3 shadow-[0_20px_50px_-20px_rgba(17,24,39,0.4)] backdrop-blur sm:-left-8"
      >
        <div className="mb-1 px-1 font-mono text-[9.5px] tracking-wider text-ink-faint uppercase">
          Your team · running now
        </div>
        <FloatingRoster />
      </motion.div>

      {/* floating metric chip */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12, x: -8 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
        className="animate-float-slow absolute -top-5 -right-3 flex items-center gap-2 rounded-xl border border-line bg-base/95 px-3 py-2 shadow-[0_16px_40px_-18px_rgba(17,24,39,0.4)] backdrop-blur sm:-right-6"
      >
        <span className="flex size-7 items-center justify-center rounded-lg bg-cat-green/10 text-green-600">
          <TrendingUp size={15} strokeWidth={2.2} />
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-bold tabular text-ink">
            <LiveCount />
          </div>
          <div className="text-[9.5px] text-ink-faint">listings today</div>
        </div>
      </motion.div>
    </div>
  );
}

const roster = [
  { dot: "bg-dot-ready", name: "Niche Researcher", value: "live" },
  { dot: "bg-cat-purple", name: "Video Ad Maker", value: "2 / 5" },
  { dot: "bg-dot-processing", name: "Listing Writer", value: "142" },
];

function FloatingRoster() {
  return (
    <div className="flex flex-col">
      {roster.map((r) => (
        <div key={r.name} className="flex items-center gap-2 border-b border-line-subtle py-1.5 last:border-b-0">
          <span className={`size-1.5 flex-none rounded-full ${r.dot}`} />
          <span className="truncate text-[11px] font-semibold text-ink">{r.name}</span>
          <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[9.5px] tabular text-ink-soft">
            {r.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function LiveCount() {
  const [n, setN] = useState(142);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setN((v) => v + 1 + Math.floor(Math.random() * 2)), 3200);
    return () => clearInterval(id);
  }, [reduce]);

  return <>{n}</>;
}
