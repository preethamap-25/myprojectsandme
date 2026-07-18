export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5 mb-4 font-mono text-[12.5px] tracking-[0.12em] uppercase text-accent">
      <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_0_3px_rgba(255,138,61,0.12)]" />
      <span className="w-[22px] h-px bg-gradient-to-r from-accent to-transparent" />
      {children}
    </div>
  );
}
