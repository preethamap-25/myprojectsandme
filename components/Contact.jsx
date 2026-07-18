import { contactLinks } from "../lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="border border-line rounded-sm bg-surface p-8 md:p-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <h2 className="font-mono font-semibold text-[clamp(22px,3vw,30px)] mb-3.5">
              Let&apos;s build something that ships.
            </h2>
            <p className="text-dim max-w-[46ch] m-0">
              Open to entry-level AI/ML and backend engineering roles in Hyderabad and Bangalore —
              remote-friendly for the right team.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-[14px] text-ink border border-line rounded-sm px-4 py-3.5 flex justify-between items-center hover:border-accent hover:text-accent transition-colors"
              >
                {c.label} <span className="text-faint">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
