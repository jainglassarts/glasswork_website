import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us: Hereditary Jain Temple Glass Artisans",
  description: `Meet the family of karigars behind ${site.name}: generations of experience in Jain temple glass work, kanch ka kaam and thikri mirror art.`,
  alternates: { canonical: "/about/" },
};

const values = [
  ["Shraddha (Devotion)", "Every piece is made as an offering, not just a job."],
  ["Shuddhata (Purity)", "Clean materials and respectful practices on temple premises."],
  ["Parampara (Tradition)", "Old techniques, with modern durability."],
];

export default function About() {
  return (
    <>
      <div className="wrap"><p className="crumbs"><Link href="/">Home</Link> › About</p></div>
      <section style={{ paddingTop: 24 }}><div className="wrap two">
        <div>
          <h1>Our Story</h1>
          <p className="lead">[Founder name] began this work in {site.since}, learning the craft from [father/guru] in [city].</p>
          <p>[2–3 paragraphs about the family history, the first temple project, how the craft has been carried forward, and the values the team works by: devotion, purity of materials and respect for Jain shastra.]</p>
          <p>[Notable temples, awards or recognitions.]</p>
        </div>
        <Placeholder shape="tall" label="IMAGE: Founder / family photo" />
      </div></section>

      <section className="alt-bg"><div className="wrap">
        <h2>Our Values</h2>
        <div className="grid">
          {values.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div></section>

      <section><div className="wrap">
        <h2>Meet the Team</h2>
        <div className="grid">
          {[1, 2, 3].map((n) => (
            <div className="card" key={n}><Placeholder label="IMAGE: Team member" /><h3>[Name]</h3><p>[Role]</p></div>
          ))}
        </div>
      </div></section>
    </>
  );
}
