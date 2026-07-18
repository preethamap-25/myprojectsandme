import PipelineDiagram from "./PipelineDiagram";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 border-b border-line bg-grid bg-grid bg-[length:48px_48px] bg-opacity-30">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex flex-wrap gap-2.5 mb-7">
          <span className="font-mono text-[12px] text-dim border border-line rounded-full px-2.5 py-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_0_3px_rgba(79,209,197,0.12)] animate-pulse2" />
            Open to work
          </span>
          <span className="font-mono text-[12px] text-dim border border-line rounded-full px-2.5 py-1.5">
            Hyderabad
          </span>
          <span className="font-mono text-[12px] text-dim border border-line rounded-full px-2.5 py-1.5">
            B.Tech CSE (AI &amp; ML), 2026
          </span>
        </div>

        <h1 className="font-mono font-semibold text-[clamp(34px,5.2vw,56px)] leading-[1.08] max-w-[14ch] mb-4">
          Preetham Anirudh Annadanam
        </h1>

        <div className="font-mono text-accent text-[clamp(15px,2vw,19px)] mb-5">
          AI/ML Engineer — Backend Systems
        </div>

        <p className="max-w-[58ch] text-dim text-[16.5px] mb-9">
          I build the pipeline between a research idea and a system that stays up: retrieval-augmented
          generation, LLM agents, and the APIs and databases that carry them into production. Recently
          graduated from KMIT, Hyderabad, and shipping since.
        </p>

        <div className="flex flex-wrap gap-3.5 mb-16">
          <a
            href="#projects"
            className="font-mono text-[13.5px] font-semibold bg-accent text-bg px-5 py-3 rounded-sm hover:-translate-y-0.5 hover:opacity-90 transition-all inline-flex items-center gap-2"
          >
            See the projects →
          </a>
          <a
            href="#contact"
            className="font-mono text-[13.5px] border border-line text-ink px-5 py-3 rounded-sm hover:border-accent hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            Contact me
          </a>
        </div>

        <PipelineDiagram />
      </div>
    </section>
  );
}
