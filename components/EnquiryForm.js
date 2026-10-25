"use client";
import { site } from "@/lib/site";

export default function EnquiryForm() {
  function submit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = `Namaste, I am ${d.get("name")} (${d.get("phone")}). Project: ${d.get("type")} at ${d.get("city")}. ${d.get("message")}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  }
  return (
    <form onSubmit={submit}>
      <div><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
      <div><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
      <div><label htmlFor="city">Temple location (city)</label><input id="city" name="city" required /></div>
      <div><label htmlFor="type">Project type</label>
        <select id="type" name="type">
          <option>New temple glass work</option><option>Ghar derasar</option><option>Restoration</option><option>Painted glass panels</option><option>Other</option>
        </select></div>
      <div><label htmlFor="message">Details</label><textarea id="message" name="message" rows={5} placeholder="Approx. area, timeline, budget" /></div>
      <button className="btn" type="submit">Send via WhatsApp</button>
    </form>
  );
}
