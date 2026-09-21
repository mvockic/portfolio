import { useEffect, useState } from "react";
import { META } from "../data/content";
import { useTyping } from "../hooks/useTyping";
import Terminal from "./Terminal";

const LOOP_PAUSE = 30000;

function Cursor() {
  return <span className="text-accent font-bold animate-pulse">▌</span>;
}

export default function Hero() {
  const line1 = `const developer = "${META.name}";`;
  const line2 = 'const focus = ["React", "Flask", "AWS"];';
  const line3 = `// ${META.tagline}`;
  const [animationRun, setAnimationRun] = useState(0);
  const animationDuration =
    600 +
    line1.length * 35 +
    300 +
    line2.length * 30 +
    300 +
    line3.length * 30;

  const t1 = useTyping(line1, 35, 600, animationRun);
  const t2 = useTyping(line2, 30, 600 + line1.length * 35 + 300, animationRun);
  const t3 = useTyping(
    line3,
    30,
    600 + line1.length * 35 + 300 + line2.length * 30 + 300,
    animationRun,
  );

  useEffect(() => {
    const loopTimeout = setTimeout(() => {
      setAnimationRun((run) => run + 1);
    }, animationDuration + LOOP_PAUSE);

    return () => clearTimeout(loopTimeout);
  }, [animationDuration]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="section-container w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: code + intro */}
        <div>
          {/* Floating code block */}
          <div className="glass-card overflow-hidden shadow-2xl shadow-black/50 mb-10">
            <div className="flex items-center px-4 py-3 bg-surface border-b border-border">
              <span className="font-mono text-xs text-muted">
                portfolio.js
              </span>
              <div className="ml-auto flex items-center gap-2" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="w-3 h-3 rounded-full bg-red-500" />
              </div>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base leading-[2.2]">
              <div>
                <span className="text-pink-400">const </span>
                <span className="text-gray-100">
                  {t1.displayed.replace("const ", "").replace(";", "")}
                </span>
                {!t1.done && <Cursor />}
                {t1.done && <span className="text-muted">;</span>}
              </div>
              {t1.done && (
                <div>
                  <span className="text-pink-400">const </span>
                  <span className="text-gray-100">
                    {t2.displayed.replace("const ", "").replace(";", "")}
                  </span>
                  {!t2.done && <Cursor />}
                  {t2.done && <span className="text-muted">;</span>}
                </div>
              )}
              {t2.done && (
                <div>
                  <span className="text-emerald-400">{t3.displayed}</span>
                  {!t3.done && <Cursor />}
                </div>
              )}
            </div>
          </div>

          {/* Bio */}
          <p className="font-sans text-muted text-lg leading-relaxed max-w-lg">
            Junior software developer at{" "}
            <span className="text-gray-100 font-medium">Vivo Surgery</span>.
            <br />
            Building and designing products that solve real problems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="font-sans text-sm font-semibold text-ink bg-accent px-7 py-3 rounded-lg hover:brightness-110 transition-all"
            >
              See my work
            </a>
            <a
              href={META.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold text-gray-100 border border-border px-7 py-3 rounded-lg hover:border-accent/40 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="#contact"
              className="font-sans text-sm font-semibold text-muted px-7 py-3 rounded-lg hover:text-gray-100 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: interactive terminal */}
        <div className="mt-10 lg:mt-0">
          <Terminal />
          <p className="font-mono text-xs text-muted/60 mt-3 text-center">
            Try typing a command — this is a live terminal
          </p>
        </div>
      </div>
    </section>
  );
}
