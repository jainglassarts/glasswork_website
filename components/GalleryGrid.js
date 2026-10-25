"use client";
import { useState } from "react";
import Placeholder from "./Placeholder";
import { gallery, services } from "@/lib/site";

const filters = [["all", "All"], ...services.filter((s) => s.id !== "meenakari").map((s) => [s.id, s.short])];

export default function GalleryGrid() {
  const [f, setF] = useState("all");
  return (
    <>
      <div className="filters" role="group" aria-label="Filter gallery">
        {filters.map(([id, label]) => (
          <button key={id} className={f === id ? "on" : ""} aria-pressed={f === id} onClick={() => setF(id)}>{label}</button>
        ))}
      </div>
      <div className="grid gallery">
        {gallery.filter((g) => f === "all" || g.cat === f).map((g) => (
          <figure key={g.label}>
            <Placeholder label={g.label} />
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
