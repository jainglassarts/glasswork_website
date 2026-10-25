import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url + "/"),
  title: { default: `Jain Temple Gold Work, Glass Painting & Glass Work | ${site.name}`, template: `%s | ${site.name}` },
  description: "Master artisans of Jain temple glass work: gold work, glass work painting, glass paintings and kanch ka kaam for derasars, mandirs and ghar derasar across India.",
  openGraph: { type: "website", siteName: site.name, images: ["/og-cover.jpg"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#6b1d1d" };

const business = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${site.name} Jain Temple Glass Art`,
  description: "Traditional Jain temple glass work: gold work, glass work painting, glass paintings and kanch ka kaam for derasars and mandirs.",
  url: site.url + "/",
  telephone: site.phone,
  email: site.email,
  image: site.url + "/og-cover.jpg",
  address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.state, addressCountry: "IN" },
  areaServed: "IN",
  priceRange: "₹₹",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <JsonLd data={business} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
