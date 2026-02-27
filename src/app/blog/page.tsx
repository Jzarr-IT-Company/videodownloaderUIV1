import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest updates and posts from Download Video Online.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", width: "100%" }}>
      <h1>Blog</h1>
      <p>Blog posts coming soon.</p>
    </div>
  );
}
