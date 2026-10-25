import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { services } from "@/lib/site";

export const metadata = {
  title: "Gold Work, Glass Work Painting & Glass Paintings for Jain Temples",
  description: "Gold work, glass work painting, glass paintings, kanch ka kaam, thikri mirror inlay, ghar derasar and restoration of old glass temples for Jain derasars.",
  alternates: { canonical: "/services/" },
};

export default function Services() {
  return (
    <>
      <div className="wrap">
        <p className="crumbs"><Link href="/">Home</Link> › Services</p>
        <h1>Our Glass Work Services</h1>
        <p className="lead">Handcrafted glass and mirror art for every kind of Jain temple, from a home derasar to a large shikharbandhi temple.</p>
      </div>
      {services.map((s, i) => (
        <section id={s.id} key={s.id} className={i % 2 ? "alt-bg" : undefined}>
          <div className="wrap two">
            <Placeholder shape="wide" label={`IMAGE: ${s.name}`} />
            <div>
              <h2>{s.name}</h2>
              <p>{s.text}</p>
              <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <Link className="btn" href="/contact/">Enquire Now</Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
