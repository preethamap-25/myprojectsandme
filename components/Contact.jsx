import { projects, contactLinks } from "../lib/content";

export default function Contact() {
  const refs = projects.filter((p) => p.link);

  return (
    <section id="contact" className="py-16">
      <div className="max-w-[880px] mx-auto px-7 grid md:grid-cols-2 gap-14">
        <div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-mono text-[13px] text-accent">05</span>
            <span className="h-px flex-1 bg-rule" />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-inkfaint">References</span>
          </div>
          <ol className="font-mono text-[12.5px] text-inkdim space-y-2">
            {refs.map((p, i) => (
              <li key={p.name}>
                [{i + 1}] {" "}
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent transition-transform duration-200 hover:translate-x-1">
                  {p.name} — {p.link.replace("https://", "")}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-serif font-semibold text-[24px] mb-3">Correspondence</h2>
          <p className="font-serif text-inkdim text-[15.5px] mb-6 max-w-[46ch]">
            Open to entry-level AI/ML and backend engineering roles in Hyderabad and Bangalore —
            remote-friendly for the right team.
          </p>
          <div className="flex flex-col gap-2">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-[13px] text-ink border-b border-rule py-2 flex justify-between hover:text-accent hover:border-accent transition-colors duration-200 hover:translate-x-1"
              >
                {c.label} <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
