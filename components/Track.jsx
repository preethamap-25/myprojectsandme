import SectionNumber from "./SectionNumber";
import { achievements, leadership } from "../lib/content";

function Entry({ n, title, org, desc }) {
  return (
    <div className="grid grid-cols-[28px_1fr] gap-3 mb-6 last:mb-0">
      <div className="font-mono text-[13px] text-accent">{n}</div>
      <div>
        <h3 className="font-serif font-semibold text-[15.5px] text-ink mb-1">{title}</h3>
        <div className="font-mono text-[11px] text-inkfaint mb-2">{org}</div>
        <p className="font-serif text-[14.5px] text-inkdim leading-[1.6] m-0">{desc}</p>
      </div>
    </div>
  );
}

export default function Track() {
  return (
    <section id="track" className="py-16 border-b border-rule">
      <div className="max-w-[880px] mx-auto px-7">
        <SectionNumber n="04" label="Recognition" />

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.15em] uppercase text-inkfaint mb-5">
              Achievements
            </h4>
            {achievements.map((a, i) => (
              <Entry key={a.title} n={`0${i + 1}`} title={a.title} org={a.org} desc={a.desc} />
            ))}
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.15em] uppercase text-inkfaint mb-5">
              Leadership
            </h4>
            {leadership.map((l, i) => (
              <Entry key={l.title} n={`0${i + 1}`} title={l.title} org={l.org} desc={l.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
