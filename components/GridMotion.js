"use client";
import { useEffect, useRef } from "react";

// Tilted photo grid whose rows slide with the mouse (inspired by reactbits.dev Grid Motion).
export default function GridMotion({ items, rows = 4, children }) {
  const rowRefs = useRef([]);
  const perRow = Math.ceil(items.length / rows);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = 0.5, current = 0.5, t = 0, raf;
    const move = (e) => { target = e.clientX / window.innerWidth; };
    const tick = () => {
      current += (target - current) * 0.05;
      t += reduce ? 0 : 0.002;
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const dir = i % 2 === 0 ? 1 : -1;
        const x = ((current - 0.5) * 300 + Math.sin(t + i) * 40) * dir;
        row.style.transform = `translateX(${x}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="grid-motion">
      <div className="gm-stage" aria-hidden="true">
        {Array.from({ length: rows }, (_, r) => (
          <div className="gm-row" key={r} ref={(el) => (rowRefs.current[r] = el)}>
            {items.slice(r * perRow, r * perRow + perRow).map((src, i) => (
              <div className="gm-cell" key={i} style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
        ))}
      </div>
      <div className="gm-overlay">{children}</div>
    </section>
  );
}
