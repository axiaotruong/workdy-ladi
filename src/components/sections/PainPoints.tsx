import { SectionHeading } from "@/components/ui/SectionHeading";

const pains = [
  {
    icon: "🔍",
    text: "Spending all day on niche research and competitor spying",
  },
  {
    icon: "🎬",
    text: "Making product/ad videos by hand, slow and tedious",
  },
  {
    icon: "📝",
    text: "Writing titles, descriptions, and tags for hundreds of products",
  },
];

export function PainPoints() {
  return (
    <section className="border-t border-line-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading title="Where is your time going?" />

      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
        {pains.map((pain) => (
          <div
            key={pain.text}
            className="flex items-center gap-4 rounded-xl border border-line bg-base px-5 py-4"
          >
            <span className="text-xl" aria-hidden="true">
              {pain.icon}
            </span>
            <p className="text-[14.5px] leading-relaxed text-ink">{pain.text}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-[15px] font-semibold text-ink">
        Hand it all to your AI employees — go focus on something else.
      </p>
    </section>
  );
}
