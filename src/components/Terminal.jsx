import { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS } from "../data/content";

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "system", text: 'Welcome! Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  function handleSubmit(e) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "input", text: `$ ${cmd}` }];

    if (cmd === "clear") {
      setHistory([{ type: "system", text: "Terminal cleared." }]);
      setInput("");
      return;
    }

    const response = TERMINAL_COMMANDS[cmd];
    if (response) {
      newHistory.push({ type: "output", text: response });
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: ${cmd}. Type "help" for options.`,
      });
    }

    setHistory(newHistory);
    setInput("");
  }

  return (
    <div
      className="glass-card overflow-hidden shadow-2xl shadow-black/50 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center px-4 py-3 bg-surface border-b border-border">
        <span className="font-mono text-xs text-muted">
          marko@portfolio ~ %
        </span>
        <div className="ml-auto flex items-center gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-accent" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="w-3 h-3 rounded-full bg-red-500" />
        </div>
      </div>

      {/* Terminal body */}
      <div ref={scrollRef} className="p-5 h-64 overflow-y-auto font-mono text-sm">
        {history.map((entry, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap mb-1.5 ${
              entry.type === "input"
                ? "text-accent"
                : entry.type === "error"
                ? "text-red-400"
                : entry.type === "system"
                ? "text-muted italic"
                : "text-gray-300"
            }`}
          >
            {entry.text}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
          <span className="text-accent shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="bg-transparent outline-none text-gray-100 w-full caret-accent"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
          />
          <span
            className={`w-2 h-5 bg-accent shrink-0 ${
              isFocused ? "animate-pulse" : "opacity-50"
            }`}
          />
        </form>
      </div>
    </div>
  );
}
