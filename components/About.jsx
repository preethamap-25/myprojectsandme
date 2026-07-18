import Eyebrow from "./Eyebrow";
import { facts } from "../lib/content";

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7 grid md:grid-cols-[1.4fr_1fr] gap-14">
        <div>
          <Eyebrow>ABOUT</Eyebrow>
          <h2 className="font-mono font-semibold text-[clamp(24px,3vw,32px)] mb-6">
            Research to production, without losing either half.
          </h2>
          <div className="text-dim space-y-4 max-w-[60ch]">
            <p>
              I graduated with a <strong className="text-ink font-semibold">B.Tech in Computer Science and
              Engineering (AI &amp; ML)</strong> from Keshav Memorial Institute of Technology, Hyderabad, in
              2026. Most of what I know, I learned by shipping — an OCR-driven medicine assistant, a
              RAG-based quiz engine, a real-time fact-checking agent, and a civic platform that&apos;s now
              used to route real complaints.
            </p>
            <p>
              My focus now is the layer most AI demos skip: <strong className="text-ink font-semibold">the
              backend that keeps a model useful</strong> — system design, distributed systems, and computer
              networks, alongside the AI/ML work itself. I&apos;m looking for entry-level AI/ML or backend
              engineering roles where I can build production-grade systems, not just notebooks.
            </p>
          </div>
        </div>

        <div className="border border-line rounded-sm bg-surface divide-y divide-linesoft">
          {facts.map((f) => (
            <div key={f.k} className="flex justify-between gap-3 px-4.5 py-3.5 text-[13.5px]">
              <span className="font-mono text-faint">{f.k}</span>
              <span className="text-ink text-right">{f.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
}
