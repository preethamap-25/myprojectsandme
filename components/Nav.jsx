export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Stack" },
    { href: "#track", label: "Track record" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
      <nav className="max-w-[1080px] mx-auto px-7 h-[68px] flex items-center justify-between">
        <a href="#top" className="font-mono font-semibold text-[15px] tracking-wide flex items-center gap-2">
          PAA<span className="text-accent">·</span>
        </a>

        <ul className="hidden md:flex gap-8 font-mono text-[13px] text-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-[13px] font-semibold bg-accent text-bg px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>

        {/* No-JS mobile menu */}
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer font-mono text-[12px] border border-line rounded-sm px-3 py-1.5 text-ink">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 bg-surface border border-line rounded-sm p-3 flex flex-col gap-3 font-mono text-[13px]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-dim hover:text-ink">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-accent">
              Get in touch
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
