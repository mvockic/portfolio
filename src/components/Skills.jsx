import { SKILLS } from "../data/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

function SkillTag({ name, index }) {
  return (
    <span
      className="inline-flex items-center gap-2 border border-border bg-surface/70 px-3 py-2 rounded-md font-mono text-xs text-gray-300 transition-colors hover:border-accent/60 hover:text-gray-100"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent/70" aria-hidden="true" />
      {name}
    </span>
  );
}

function SkillCategory({ group, index }) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="glass-card p-6 h-full">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="font-mono text-xs text-accent uppercase tracking-[2px]">
          {group.category}
          </h4>
          <span className="font-mono text-[10px] text-muted/60">0{index + 1}</span>
        </div>
        <p className="font-sans text-sm text-muted leading-relaxed mb-5">
          {group.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item, itemIndex) => (
            <SkillTag key={item} name={item} index={itemIndex} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader label="Tech Stack" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SKILLS.map((group, i) => (
            <SkillCategory key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
