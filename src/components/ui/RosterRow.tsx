type RosterRowProps = {
  dotClassName: string;
  name: string;
  role: string;
  value: string;
  pulse?: boolean;
};

export function RosterRow({ dotClassName, name, role, value, pulse = false }: RosterRowProps) {
  return (
    <div className="flex items-center gap-3 border-b border-line-subtle py-3.5 last:border-b-0">
      <span
        className={`size-2 flex-none rounded-full ${dotClassName} ${
          pulse ? "animate-[dot-pulse_1.8s_ease-in-out_infinite]" : ""
        }`}
      />
      <span className="text-[13.5px] font-semibold text-ink">{name}</span>
      <span className="font-mono text-[11.5px] text-ink-faint">{role}</span>
      <span className="ml-auto rounded-md bg-muted px-2.5 py-1 text-xs tabular-nums text-ink-soft">
        {value}
      </span>
    </div>
  );
}
