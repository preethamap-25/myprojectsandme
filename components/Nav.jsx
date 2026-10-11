"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", id: "about", label: "Background" },
  { href: "#skills", id: "skills", label: "Stack" },
  { href: "#projects", id: "projects", label: "Case studies" },
  { href: "#track", id: "track", label: "Recognition" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-rule">
      <nav className="max-w-[880px] mx-auto px-7 h-[64px] flex items-center justify-between">
        <a href="#top" className="font-serif italic text-[17px] text-ink transition-opacity hover:opacity-70">
          Preetham A. Annadanam
        </a>

        <ul className="hidden md:flex gap-7 font-mono text-[12.5px] text-inkdim">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative pb-1 transition-colors duration-300 ${active === l.id ? "text-accent" : "hover:text-ink"}`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-accent transition-all duration-300 ${active === l.id ? "w-full" : "w-0"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline text-[12.5px] font-mono text-accent border-b border-accent pb-0.5 transition-all duration-300 hover:opacity-70 hover:border-b-2"
        >
          Correspondence →
        </a>

        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer font-mono text-[12px] border border-rule rounded-sm px-3 py-1.5 text-ink">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-52 bg-paper border border-rule p-3 flex flex-col gap-3 font-mono text-[13px] shadow-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-inkdim hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-accent">
              Correspondence →
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
