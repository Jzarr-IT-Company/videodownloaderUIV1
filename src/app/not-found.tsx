import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ maxWidth: 800, margin: "3rem auto", textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link href="/" style={{ color: "#1da1f2" }}>
        Go back home
      </Link>
    </section>
  );
}
