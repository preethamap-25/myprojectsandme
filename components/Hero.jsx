import PipelineDiagram from "./PipelineDiagram";

export default function Hero() {
  return (
    <section className="pt-14 pb-16 border-b border-rule">
      <div className="max-w-[880px] mx-auto px-7">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-inkfaint mb-5">
          Portfolio — AI/ML &amp; Backend Engineering
        </div>

        <h1 className="font-serif font-semibold text-[clamp(32px,5vw,50px)] leading-[1.15] mb-3">
          Preetham Anirudh Annadanam
        </h1>

        <div className="font-mono text-[13px] text-inkdim mb-10">
          B.Tech CSE (AI &amp; ML), KMIT Hyderabad — 2022–2026 · Open to work — Hyderabad / Bangalore
        </div>

        <div className="border border-rule bg-paper2 p-7 md:p-8">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-3">
            Abstract
          </div>
          <p className="font-serif text-[17px] leading-[1.7] text-ink">
            I build the pipeline between a research idea and a system that stays up: retrieval-augmented
            generation, LLM agents, and the APIs and databases that carry them into production. Recently
            graduated and shipping since — five projects, two recognitions, one running theme: the backend
            matters as much as the model.
          </p>
        </div>

        <PipelineDiagram />
      </div>
    </section>
  );
}
