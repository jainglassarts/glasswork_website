import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const title = "Jain Temple Glass Work: History, Techniques & Famous Kanch Mandirs";

export const metadata = {
  title: { absolute: title },
  description: "A complete guide to Jain temple glass work: the history of kanch ka kaam, thikri mirror inlay, painted glass, and famous glass temples like Kanch Mandir Indore.",
  alternates: { canonical: "/guide/jain-temple-glass-work/" },
  openGraph: { type: "article" },
};

export default function Guide() {
  return (
    <div className="wrap">
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Article", headline: title,
        author: { "@type": "Organization", name: site.name }, datePublished: "2026-10-25",
      }} />
      <p className="crumbs"><Link href="/">Home</Link> › Guide</p>
      <article className="prose">
        <h1>{title}</h1>
        <Placeholder shape="wide" label="IMAGE: Guide cover" />
        <p>Glass work, or <em>kanch ka kaam</em>, is one of the most striking forms of Jain temple art. When lamp light falls on thousands of mirror and glass pieces, the whole sanctum glows. This guide explains where the tradition comes from, the main techniques, and how to plan glass work for your own derasar.</p>

        <h2>A short history</h2>
        <p>Mirror and glass decoration grew out of the Rajput and Mughal <em>sheesh mahal</em> tradition and was taken up by Jain patrons in the 19th and early 20th centuries. The best-known example is Kanch Mandir in Indore, begun around 1903 by Seth Hukumchand Jain. Its floor, walls, pillars and ceilings are covered in glass, and mirrors beside the Tirthankara idols repeat their image endlessly.</p>

        <h2>Famous Jain glass temples</h2>
        <ul>
          <li><strong>Kanch Mandir, Indore:</strong> complete glass interior with painted glass panels.</li>
          <li><strong>Jain Glass Temple, Kanpur:</strong> mirror mosaic and painted glass work.</li>
          <li><strong>Calcutta Jain Temple, Kolkata:</strong> mirrors, stained glass and inlay.</li>
          <li><strong>Devsagar Singhi Jain Temple, Sujangarh:</strong> ornate glass interiors in Rajasthan.</li>
        </ul>

        <h2>Main techniques</h2>
        <h3>Kanch ka kaam (glass mosaic)</h3>
        <p>Cut coloured and mirror glass is set into plaster in repeating patterns over large areas.</p>
        <h3>Thikri work</h3>
        <p>Small hand-cut mirror pieces are inlaid into plaster to make fine floral and geometric designs.</p>
        <h3>Reverse glass painting</h3>
        <p>Scenes are painted on the back of the glass, so the front stays glossy and protected.</p>
        <h3>Meenakari and gold leaf</h3>
        <p>Enamel-like colour and gold accents add richness around the moolnayak and parikar.</p>

        <h2>Planning glass work for your temple</h2>
        <ol>
          <li>Measure the area and decide which surfaces get glass work.</li>
          <li>Choose themes and motifs with your trust and acharya.</li>
          <li>Approve samples before production.</li>
          <li>Plan installation around puja and festival dates.</li>
        </ol>

        <h2>Caring for temple glass work</h2>
        <p>Dust with a soft dry cloth, avoid harsh chemicals, and get loose pieces fixed early before moisture spreads behind the glass.</p>
        <p><Link className="btn" href="/contact/">Talk to our artisans</Link></p>
      </article>
    </div>
  );
}
