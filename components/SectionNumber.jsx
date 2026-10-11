export default function SectionNumber({ n, label }) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      <span className="font-mono text-[13px] text-accent">{n}</span>
      <span className="h-px flex-1 bg-rule" />
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-inkfaint">{label}</span>
    </div>
  );
}