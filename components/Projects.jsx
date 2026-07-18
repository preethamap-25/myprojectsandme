import Eyebrow from "./Eyebrow";
import { projects } from "../lib/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[62ch] mb-11">
          <Eyebrow>PROJECTS</Eyebrow>
          <h2 className="font-mono font-semibold text-[clamp(24px,3vw,32px)] mb-3.5">
            Things I&apos;ve shipped end to end
          </h2>
          <p className="text-dim text-[15.5px]">
            Each one covers the full path — model or pipeline, backend, and a working interface someone
            else could actually use.
          </p>
        </div>

        <div className="flex flex-col gap-px bg-line border border-line rounded-sm overflow-hidden">
          {projects.map((p) => (
            <div key={p.name} className="bg-surface p-8 grid md:grid-cols-[220px_1fr] gap-8">
              <div className="font-mono">
                <div className="text-[18px] text-ink mb-2">{p.name}</div>
                <div className="text-[12px] text-faint mb-3.5">{p.time}</div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12.5px] text-accent hover:underline inline-flex items-center gap-1.5"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
              <div>
                <ul className="list-disc pl-[18px] text-dim text-[14.5px] space-y-2 mb-4">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11.5px] text-faint border border-line rounded-full px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
