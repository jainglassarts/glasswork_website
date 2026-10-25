import { site, pages } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  return pages.map((p) => ({ url: `${site.url}/${p}`, lastModified: new Date() }));
}
