import { SKILLS } from "../data/content";
import { useInView } from "../hooks/useInView";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

function SkillBar({ name, level, delay, isInView }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="font-sans text-sm text-gray-300">{name}</span>
        <span className="font-mono text-[11px] text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ group, index }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <ScrollReveal delay={index * 80}>
      <div ref={ref} className="glass-card p-6">
        <h4 className="font-mono text-xs text-accent uppercase tracking-[2px] mb-5">
          {group.category}
        </h4>
        <div className="space-y-4">
          {group.items.map((item, i) => (
            <SkillBar
              key={item.name}
              name={item.name}
              level={item.level}
              delay={i * 100}
              isInView={isInView}
            />
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
