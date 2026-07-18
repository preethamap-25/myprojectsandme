import Eyebrow from "./Eyebrow";
import { skills } from "../lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[62ch] mb-11">
          <Eyebrow>STACK</Eyebrow>
          <h2 className="font-mono font-semibold text-[clamp(24px,3vw,32px)] mb-3.5">
            What I build with
          </h2>
          <p className="text-dim text-[15.5px]">
            Organized the way I&apos;d design a system: languages at the base, then the frameworks, models,
            and stores that sit on top of them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line rounded-sm overflow-hidden">
          {skills.map((s) => (
            <div key={s.title} className="bg-surface p-5.5">
              <h3 className="font-mono text-[12px] tracking-[0.08em] uppercase text-accent2 mb-3.5">
                {s.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[12.5px] text-dim border border-line rounded-sm px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
