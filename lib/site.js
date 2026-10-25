// Fill in your real details here — they appear across the whole site.
export const site = {
  name: "Jain Glass Arts",
  tagline: "Gold Work · Glass Work Painting · Glass Paintings",
  url: "https://jainglassarts.github.io/glasswork_website",
  since: "[YEAR]",
  phone: "+919421561017",
  phoneDisplay: "+91 94215 61017",
  whatsapp: "919421561017",
  email: "sanyami0426@gmail.com",
  address: "[ADDRESS, CITY, STATE]",
  city: "[CITY]",
  state: "[STATE]",
};

export const services = [
  { id: "gold", name: "Gold Work", short: "Gold Work", text: "Fine gold-leaf and gold-paint detailing on glass and temple surfaces, bringing a divine glow to the sanctum, parikar and ceilings.", items: ["Gold-leaf work on glass", "Parikar, singhasan and toran detailing", "Gold borders and highlights for painted panels"] },
  { id: "painted", name: "Glass Work Painting", short: "Glass Work Painting", text: "Painted glass work on temple walls, ceilings and domes, showing Tirthankara life events, the 14 dreams of Mata Trishala, Samavasaran and Jain cosmology.", items: ["Kalpasutra and Panch Kalyanak scenes", "Custom donor (bhent) panels with names", "Traditional colour palettes"] },
  { id: "paintings", name: "Glass Paintings", short: "Glass Paintings", text: "Framed hand-painted glass artworks of Tirthankaras, Jain symbols and sacred scenes for temples, homes and gifting.", items: ["Tirthankara and Siddhachakra paintings", "Custom sizes and frames", "Gifts for pratishtha and special occasions"] },
  { id: "kanch", name: "Kanch Ka Kaam (Glass Mosaic)", short: "Kanch Ka Kaam", text: "Complete glass-mosaic interiors where every surface of the gabhara, rangmandap and dome reflects light.", items: ["Walls, ceilings, domes and pillars", "Coloured and mirror glass combinations", "Gold-leaf highlights"] },
  { id: "thikri", name: "Thikri Mirror Inlay", short: "Thikri", text: "Small hand-cut mirror pieces set into plaster to make floral, geometric and sacred patterns.", items: ["Floral jaali and mandala patterns", "Ashtamangal and Jain symbols", "Doors, arches and frames"] },
  { id: "ghar", name: "Ghar Derasar (Home Temple)", short: "Ghar Derasar", text: "Compact glass and mirror home temples made to fit your space and your daily puja routine.", items: ["Wall-mounted and standalone designs", "Sizes for apartments and bungalows", "Delivery and installation"] },
  { id: "restoration", name: "Restoration of Old Glass Temples", short: "Restoration", text: "Careful conservation of heritage glass work: cleaning, re-silvering, replacing broken pieces and matching original designs.", items: ["Site condition survey", "Pattern-matched replacement", "Protective finishing"] },
];

export const faqs = [
  ["What is kanch ka kaam in Jain temples?", "Kanch ka kaam means glass work. Walls, ceilings and pillars are covered with cut glass, mirror pieces and painted glass panels, so that lamp light reflects endlessly. Kanch Mandir in Indore is the best-known example."],
  ["How long does a temple glass work project take?", "A ghar derasar usually takes 3–6 weeks. A full temple interior can take 3–12 months, depending on area and detail."],
  ["Do you work outside your city?", "Yes. We take projects across India and can discuss projects abroad."],
  ["Can you restore old glass work?", "Yes. We clean, re-silver, replace broken pieces and match the original patterns."],
  ["How is the cost calculated?", "Cost depends on area (sq ft), type of work (mirror inlay, painted glass, gold leaf) and design detail. Contact us for a free estimate."],
];

// Gallery items — add `src` (e.g. "/images/gallery-1.jpg") when images are ready.
export const gallery = ["gold", "painted", "paintings", "kanch", "gold", "painted", "paintings", "thikri", "ghar", "restoration", "gold", "paintings"]
  .map((cat, i) => ({ cat, caption: "[Caption: temple name, city, type of work]", label: `IMAGE ${i + 1} (${cat})` }));

export const pages = ["", "services/", "gallery/", "about/", "contact/", "guide/jain-temple-glass-work/"];
