import { useState } from "react";
import { META } from "../data/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const inputClasses =
  "w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-gray-100 font-sans placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 pb-16">
      <div className="section-container max-w-2xl text-center">
        <ScrollReveal>
          <SectionHeader label="Get In Touch" centered />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="font-sans text-lg text-muted leading-relaxed mt-8 mb-10">
            I'm always open to discussing new opportunities, interesting
            projects, or ways to collaborate. Whether you have a question or
            just want to say hi — my inbox is open.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form onSubmit={handleSubmit} className="text-left space-y-4">
            {/* Honeypot field: hidden from real users, bots tend to fill every field */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="absolute w-px h-px opacity-0 overflow-hidden -z-10"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClasses} resize-none`}
            />

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="font-mono text-sm font-semibold text-ink bg-accent px-8 py-3.5 rounded-lg hover:brightness-110 transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send message →"}
              </button>

              {status === "success" && (
                <span className="font-sans text-sm text-accent">
                  Thanks — I'll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="font-sans text-sm text-red-400">{error}</span>
              )}
            </div>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={META.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold text-gray-100 border border-border px-8 py-3.5 rounded-lg hover:border-accent/40 transition-colors"
            >
              GitHub
            </a>
            <a
              href={META.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold text-gray-100 border border-border px-8 py-3.5 rounded-lg hover:border-accent/40 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={300}>
          <div className="mt-20 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted/50">
              Built with React + Tailwind CSS · Designed in the editor
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
