import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Use",
  description: "How to use Download Video Online.",
  alternates: {
    canonical: "/howto",
  },
};

export default function HowToPage() {
  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", width: "100%" }}>
      <h1>How To Use</h1>
      <p>Instructions coming soon.</p>
    </div>
  );
}
