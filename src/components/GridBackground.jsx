import { useEffect, useRef } from "react";

const DOT_SPACING = 32;
const DOT_RADIUS = 1;
const GLOW_RADIUS = 180;

export default function GridBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / DOT_SPACING) + 1;
      const rows = Math.ceil(canvas.height / DOT_SPACING) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * DOT_SPACING;
          const y = r * DOT_SPACING;
          const dist = Math.hypot(mouse.current.x - x, mouse.current.y - y);
          const proximity = Math.max(0, 1 - dist / GLOW_RADIUS);
          const alpha = 0.08 + proximity * 0.35;
          const radius = DOT_RADIUS + proximity * 1.5;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (proximity > 0) {
            ctx.fillStyle = `rgba(232, 197, 71, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(136, 146, 164, ${alpha})`;
          }
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    function handleMouse(e) {
      mouse.current = { x: e.clientX, y: e.clientY };
    }

    function handleLeave() {
      mouse.current = { x: -1000, y: -1000 };
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
