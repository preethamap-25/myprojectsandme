import SectionNumber from "./SectionNumber";
import { skills } from "../lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-b border-rule">
      <div className="max-w-[880px] mx-auto px-7">
        <SectionNumber n="02" label="Stack" />

        <div className="divide-y divide-rule border-t border-rule">
          {skills.map((s) => (
            <div key={s.title} className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-4">
              <div className="font-mono text-[12px] tracking-[0.1em] uppercase text-accent">
                {s.title}
              </div>
              <div className="font-serif text-[15.5px] text-ink">
                {s.tags.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
