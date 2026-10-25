import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us: Free Quote for Jain Temple Glass Work",
  description: `Contact ${site.name} for a free consultation on Jain temple glass work, ghar derasar or restoration. Call, WhatsApp or send an enquiry.`,
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <div className="wrap"><p className="crumbs"><Link href="/">Home</Link> › Contact</p></div>
      <section style={{ paddingTop: 24 }}><div className="wrap two">
        <div>
          <h1>Get a Free Consultation</h1>
          <p className="lead">Tell us about your temple project. We usually reply within 24 hours.</p>
          <p>
            📍 {site.address}<br />
            📞 <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><br />
            ✉️ {site.email}<br />
            🕘 Mon–Sat, 9:00–19:00
          </p>
          <Placeholder shape="wide" label="MAP PLACEHOLDER (Google Maps embed or image)" />
        </div>
        <EnquiryForm />
      </div></section>
    </>
  );
}
