import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="grid">
            <div><h3>{site.name}</h3><p>Traditional glass and mirror artistry for Jain derasars, mandirs and home temples since {site.since}.</p></div>
            <div><h3>Services</h3><ul>
              <li><Link href="/services/#gold">Gold work</Link></li>
              <li><Link href="/services/#painted">Glass work painting</Link></li>
              <li><Link href="/services/#paintings">Glass paintings</Link></li>
              <li><Link href="/services/#restoration">Restoration</Link></li>
            </ul></div>
            <div><h3>Contact</h3><ul>
              <li>📍 {site.address}</li>
              <li>📞 <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
              <li>✉️ {site.email}</li>
            </ul></div>
          </div>
          <p className="copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </footer>
      <a className="wa" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
    </>
  );
}
