import Link from "next/link";

export const metadata = { title: "Page Not Found", robots: { index: false } };

export default function NotFound() {
  return (
    <section><div className="wrap" style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <p>The page you were looking for does not exist.</p>
      <Link className="btn" href="/">Go Home</Link>
    </div></section>
  );
}
