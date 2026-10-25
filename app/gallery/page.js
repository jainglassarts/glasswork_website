import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Jain Temple Glass Work Gallery: Photos of Our Projects",
  description: "Photo gallery of Jain temple glass work: kanch mandir interiors, thikri mirror inlay, painted glass panels and ghar derasar projects across India.",
  alternates: { canonical: "/gallery/" },
};

export default function Gallery() {
  return (
    <>
      <div className="wrap">
        <p className="crumbs"><Link href="/">Home</Link> › Gallery</p>
        <h1>Gallery of Our Temple Glass Work</h1>
        <p className="lead">A selection of derasars, mandirs and home temples we have crafted and restored.</p>
        <GalleryGrid />
      </div>
      <section><div className="wrap" style={{ textAlign: "center" }}>
        <h2>Like What You See?</h2>
        <Link className="btn" href="/contact/">Start Your Project</Link>
      </div></section>
    </>
  );
}
