import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import { site, services, faqs } from "@/lib/site";

export const metadata = { alternates: { canonical: "/" } };

const featured = services.filter((s) => ["gold", "painted", "paintings", "kanch"].includes(s.id));
const blurbs = {
  kanch: "Full glass-mosaic interiors for walls, ceilings, domes and pillars, in the style of Kanch Mandir.",
  gold: "Gold-leaf and gold-paint detailing that makes the sanctum, parikar and ceilings glow.",
  painted: "Scenes from the lives of the Tirthankaras, Jain cosmology and Kalpasutra stories painted on glass.",
  paintings: "Framed hand-painted glass artworks of Tirthankaras and sacred scenes for temples, homes and gifting.",
};

export default function Home() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      }} />

      <div className="wrap hero">
        <div>
          <p className="eyebrow">{site.tagline}</p>
          <h1>Jain Temple Glass Work, Crafted with Devotion</h1>
          <p className="lead">We create shimmering glass and mirror interiors for Jain derasars, mandirs and home temples: gold work, glass work painting, glass paintings and kanch ka kaam, made by hand in the tradition of India&apos;s great glass temples.</p>
          <div className="ctas">
            <Link className="btn" href="/contact/">Get a Free Consultation</Link>
            <Link className="btn alt" href="/gallery/">View Our Work</Link>
          </div>
        </div>
        <Placeholder shape="tall" label="HERO IMAGE: glass-work temple interior (portrait)" />
      </div>

      <section className="alt-bg"><div className="wrap stats">
        <div><strong>[XX]+</strong>Years of craft</div>
        <div><strong>[XX]+</strong>Temples completed</div>
        <div><strong>[XX]</strong>States served</div>
        <div><strong>[XX]+</strong>Skilled karigars</div>
      </div></section>

      <section><div className="wrap">
        <p className="eyebrow">What we do</p>
        <h2>Glass Artistry for Every Sacred Space</h2>
        <div className="grid">
          {featured.map((s) => (
            <div className="card" key={s.id}>
              <Placeholder label={`IMAGE: ${s.short}`} />
              <h3>{s.short}</h3>
              <p>{blurbs[s.id]}</p>
              <Link href={`/services/#${s.id}`}>Learn more →</Link>
            </div>
          ))}
        </div>
      </div></section>

      <section className="alt-bg"><div className="wrap two">
        <Placeholder shape="wide" label="IMAGE: Artisan at work" />
        <div>
          <p className="eyebrow">Why choose us</p>
          <h2>Tradition, Shastra &amp; Craftsmanship</h2>
          <ul>
            <li><strong>Shastra-aligned designs:</strong> motifs and iconography reviewed with your trust and acharyas.</li>
            <li><strong>Hereditary karigars:</strong> skills passed down through generations.</li>
            <li><strong>Premium materials:</strong> quality mirror glass, gold leaf, long-lasting adhesives.</li>
            <li><strong>End-to-end execution:</strong> design, preview, fabrication and on-site installation.</li>
            <li><strong>Restoration experts:</strong> we revive old glass temples without losing their character.</li>
          </ul>
          <Link className="btn" href="/about/">Our Story</Link>
        </div>
      </div></section>

      <section><div className="wrap">
        <p className="eyebrow">Our process</p>
        <h2>From Vision to Pratishtha</h2>
        <ol className="steps">
          <li><strong>Consultation &amp; site visit:</strong> we understand your temple, budget and timeline.</li>
          <li><strong>Design &amp; approval:</strong> drawings and samples shared with the trust.</li>
          <li><strong>Handcrafting:</strong> glass is cut, painted and set in our workshop.</li>
          <li><strong>Installation:</strong> our team installs on site with minimal disruption to puja.</li>
          <li><strong>Handover &amp; care:</strong> maintenance guidance and after-service support.</li>
        </ol>
      </div></section>

      <section className="alt-bg"><div className="wrap">
        <p className="eyebrow">Featured projects</p>
        <h2>Recent Temple Projects</h2>
        <div className="grid">
          {[1, 2, 3].map((n) => (
            <div className="card" key={n}>
              <Placeholder label={`IMAGE: Project ${n}`} />
              <h3>[Temple Name], [City]</h3>
              <p>[Short description of scope, e.g. full sanctum glass work, 2,000 sq ft].</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}><Link className="btn alt" href="/gallery/">See full gallery</Link></p>
      </div></section>

      <section><div className="wrap">
        <p className="eyebrow">Testimonials</p>
        <h2>What Temple Trusts Say</h2>
        <div className="grid">
          {[1, 2, 3].map((n) => (
            <blockquote className="card" key={n}>“[Testimonial text from a trustee or client.]”<br /><strong>[Name], [Temple Trust, City]</strong></blockquote>
          ))}
        </div>
      </div></section>

      <section className="alt-bg"><div className="wrap">
        <h2>Frequently Asked Questions</h2>
        {faqs.map(([q, a]) => (
          <details key={q}><summary>{q}</summary><p>{a}</p></details>
        ))}
      </div></section>

      <section><div className="wrap" style={{ textAlign: "center" }}>
        <h2>Planning a New Temple or Renovation?</h2>
        <p className="lead">Share your requirements and get a free consultation and estimate.</p>
        <Link className="btn" href="/contact/">Request a Quote</Link>
      </div></section>
    </>
  );
}
