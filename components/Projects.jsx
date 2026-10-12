import SectionNumber from "./SectionNumber";
import { projects } from "../lib/content";

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-b border-rule">
      <div className="max-w-[880px] mx-auto px-7">
        <SectionNumber n="03" label="Case studies" />

        <div className="space-y-12">
          {projects.map((p, i) => (
            <div key={p.name} className="grid md:grid-cols-[64px_1fr] gap-4 transition-transform duration-300 hover:translate-x-1.5">
              <div className="font-mono text-[12px] text-inkfaint">
                Project {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="font-serif font-semibold text-[19px] text-ink">{p.name}</h3>
                  {p.link && (
                    <sup className="font-mono text-[11px] text-accent">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">[{i + 1}]</a>
                    </sup>
                  )}
                </div>
                <div className="font-mono text-[11.5px] text-inkfaint mb-3">{p.time}</div>

                <ul className="font-serif text-[15.5px] leading-[1.7] text-inkdim list-disc pl-5 space-y-1.5 mb-3">
                  {p.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>

                <div className="font-mono text-[12px] text-inkfaint">
                  Tech Stack: {p.stack.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
