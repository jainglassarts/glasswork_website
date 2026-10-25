"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["/", "Home"], ["/services/", "Services"], ["/gallery/", "Gallery"],
  ["/about/", "About"], ["/guide/jain-temple-glass-work/", "Guide"], ["/contact/", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header>
      <nav className="nav wrap" aria-label="Main">
        <Link className="logo" href="/">Jain Glass <span>Arts</span></Link>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <ul className={open ? "open" : ""}>
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
