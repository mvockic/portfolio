import { useState } from "react";
import { PROJECTS } from "../data/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const COLOR_MAP = {
  emerald: {
    text: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    glow: "shadow-emerald-400/10",
    dot: "bg-emerald-400",
    line: "bg-emerald-400/40",
  },
  blue: {
    text: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    glow: "shadow-blue-400/10",
    dot: "bg-blue-400",
    line: "bg-blue-400/40",
  },
  amber: {
    text: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10",
    glow: "shadow-amber-400/10",
    dot: "bg-amber-400",
    line: "bg-amber-400/40",
  },
  orange: {
    text: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
    glow: "shadow-orange-400/10",
    dot: "bg-orange-400",
    line: "bg-orange-400/40",
  },
};

function ArchFlow({ steps, color }) {
  const c = COLOR_MAP[color];
  return (
    <div className="flex items-center gap-1 overflow-x-auto py-3">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center shrink-0">
          <div
            className={`px-3 py-1.5 rounded-md border text-xs font-mono ${
              step.type === "source"
                ? `${c.border} ${c.text}`
                : step.type === "store"
                ? `border-purple-400/30 text-purple-400`
                : step.type === "output"
                ? `border-gray-500 text-gray-300`
                : `${c.border} text-gray-300`
            }`}
          >
            {step.label}
          </div>
          {i < steps.length - 1 && (
            <svg width="24" height="12" className="shrink-0 mx-0.5">
              <line
                x1="2"
                y1="6"
                x2="18"
                y2="6"
                stroke="currentColor"
                strokeWidth="1"
                className="text-border"
              />
              <polygon
                points="16,3 22,6 16,9"
                fill="currentColor"
                className="text-muted"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const c = COLOR_MAP[project.color];

  return (
    <ScrollReveal delay={index * 100}>
      <div
        className={`glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.glow} group cursor-pointer`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-mono text-lg font-bold text-gray-100 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span
            className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${c.border} ${c.text}`}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`font-mono text-[11px] px-2.5 py-1 rounded-md ${c.bg} ${c.text}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand indicator */}
        <button
          className="font-sans text-xs text-muted hover:text-accent transition-colors flex items-center gap-1"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          <span
            className={`transition-transform duration-200 inline-block ${
              expanded ? "rotate-90" : ""
            }`}
          >
            ▸
          </span>
          {expanded ? "Less" : "Architecture & highlights"}
        </button>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border pt-4 space-y-4">
            {/* Architecture flow */}
            <div>
              <span className="font-mono text-xs text-muted uppercase tracking-wider">
                Data Flow
              </span>
              <ArchFlow steps={project.architecture} color={project.color} />
            </div>

            {/* Highlights */}
            <div>
              <span className="font-mono text-xs text-muted uppercase tracking-wider">
                Highlights
              </span>
              <ul className="mt-2 space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${c.dot}`} />
                    <span className="font-sans text-sm text-gray-300">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader label="Some Recent Projects" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
