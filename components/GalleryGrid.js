"use client";
import { useEffect, useState } from "react";
import { gallery, services } from "@/lib/site";

const filters = [["all", "All"], ...services.filter((s) => gallery.some((g) => g.cat === s.id)).map((s) => [s.id, s.short])];

export default function GalleryGrid() {
  const [f, setF] = useState("all");
  const [open, setOpen] = useState(null);
  const shown = gallery.filter((g) => f === "all" || g.cat === f);

  useEffect(() => {
    if (open === null) return;
    const key = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % shown.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open, shown.length]);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter gallery">
        {filters.map(([id, label]) => (
          <button key={id} className={f === id ? "on" : ""} aria-pressed={f === id} onClick={() => setF(id)}>{label}</button>
        ))}
      </div>
      <div className="gallery-grid">
        {shown.map((g, i) => (
          <figure key={g.n}>
            <button className="thumb" onClick={() => setOpen(i)} aria-label={`Open: ${g.caption}`}>
              <img src={g.src} alt={`${g.caption} by Jain Glass Arts`} loading="lazy" />
            </button>
          </figure>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shown[open].caption} onClick={() => setOpen(null)}>
          <img src={shown[open].src} alt={shown[open].caption} onClick={(e) => e.stopPropagation()} />
          <p>{shown[open].caption} · {open + 1} / {shown.length}</p>
          <button className="lb-close" aria-label="Close">✕</button>
          <button className="lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + shown.length) % shown.length); }}>‹</button>
          <button className="lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % shown.length); }}>›</button>
        </div>
      )}
    </>
  );
}
