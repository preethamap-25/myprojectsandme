import SectionNumber from "./SectionNumber";
import { facts } from "../lib/content";

export default function About() {
  return (
    <section id="about" className="py-16 border-b border-rule">
      <div className="max-w-[880px] mx-auto px-7">
        <SectionNumber n="01" label="Background" />

        <div className="grid md:grid-cols-[1fr_auto] gap-10">
          <div className="max-w-[62ch] font-serif text-[17px] leading-[1.75] text-ink space-y-5">
            <p>
              I graduated with a <strong>B.Tech in Computer Science and Engineering (AI &amp; ML)</strong> from
              Keshav Memorial Institute of Technology, Hyderabad, in 2026. Most of what I know, I learned by
              shipping — an OCR-driven medicine assistant, a RAG-based quiz engine, a real-time fact-checking
              agent, and a civic platform that&apos;s now used to route real complaints.
            </p>

            <blockquote className="border-l-2 border-accent pl-5 italic text-inkdim my-7">
              The layer most AI demos skip is the backend that keeps a model useful.
            </blockquote>

            <p>
              My focus now is system design, distributed systems, and computer networks, alongside the AI/ML
              work itself. I&apos;m looking for entry-level AI/ML or backend engineering roles where I can build
              production-grade systems, not just notebooks.
            </p>
          </div>

          <div className="font-mono text-[12.5px] text-inkdim md:w-[220px] space-y-4 md:border-l md:border-rule md:pl-8">
            {facts.map((f) => (
              <div key={f.k}>
                <div className="text-inkfaint uppercase tracking-wide text-[10.5px] mb-0.5">{f.k}</div>
                <div className="text-ink">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
