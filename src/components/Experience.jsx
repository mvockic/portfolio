import { EXPERIENCE, EDUCATION } from "../data/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

function TimelineCard({ entry, index }) {
  return (
    <ScrollReveal delay={index * 150}>
      <div className="relative pl-8 pb-12 last:pb-0 group">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-border group-last:hidden" />

        {/* Timeline dot */}
        <div
          className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
            entry.current
              ? "border-accent bg-accent/20"
              : "border-muted bg-surface"
          }`}
        >
          {entry.current && (
            <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
          )}
        </div>

        {/* Content */}
        <div className="glass-card p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="font-mono text-base font-bold text-gray-100">
              {entry.role}
            </h3>
            {entry.current && (
              <span className="font-mono text-[11px] text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                Current
              </span>
            )}
          </div>
          <p className="font-sans text-sm text-accent font-medium mb-4">
            {entry.company} · {entry.location}
          </p>
          <ul className="space-y-2">
            {entry.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-1 shrink-0 text-xs">▹</span>
                <span className="font-sans text-sm text-muted leading-relaxed">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader label="Experience" />
        </ScrollReveal>

        <div className="mt-12 max-w-2xl">
          {EXPERIENCE.map((entry, i) => (
            <TimelineCard key={entry.company} entry={entry} index={i} />
          ))}

          {/* Education */}
          <ScrollReveal delay={EXPERIENCE.length * 150}>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-muted bg-surface" />
              <div className="glass-card p-6">
                <h3 className="font-mono text-base font-bold text-gray-100">
                  Education
                </h3>
                <p className="font-sans text-sm text-accent font-medium mt-1">
                  {EDUCATION.school} · {EDUCATION.location}
                </p>
                <p className="font-sans text-sm text-muted mt-2">
                  {EDUCATION.credential}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
