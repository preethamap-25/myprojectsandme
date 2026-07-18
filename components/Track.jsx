import Eyebrow from "./Eyebrow";
import { achievements, leadership } from "../lib/content";

function TimelineItem({ title, org, desc }) {
  return (
    <div className="relative pl-5.5 ml-1 pb-6.5 border-l border-line last:pb-0">
      <span className="absolute -left-[5px] top-[3px] w-[9px] h-[9px] rounded-full bg-bg border-[1.5px] border-accent" />
      <h3 className="text-[14.5px] text-ink mb-1">{title}</h3>
      <div className="font-mono text-[11.5px] text-faint mb-2">{org}</div>
      <p className="text-dim text-[14px] m-0">{desc}</p>
    </div>
  );
}

export default function Track() {
  return (
    <section id="track" className="py-20 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[62ch] mb-11">
          <Eyebrow>TRACK RECORD</Eyebrow>
          <h2 className="font-mono font-semibold text-[clamp(24px,3vw,32px)]">
            Achievements &amp; leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="font-mono text-[12px] tracking-[0.08em] uppercase text-accent2 mb-5.5">
              Achievements
            </h3>
            {achievements.map((a) => (
              <TimelineItem key={a.title} title={a.title} org={a.org} desc={a.desc} />
            ))}
          </div>

          <div>
            <h3 className="font-mono text-[12px] tracking-[0.08em] uppercase text-accent2 mb-5.5">
              Leadership
            </h3>
            {leadership.map((l) => (
              <TimelineItem key={l.title} title={l.title} org={l.org} desc={l.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
