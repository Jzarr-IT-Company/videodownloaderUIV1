import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Free Online Video Downloader",
  description:
    "Read our Terms of Use to understand the rules and guidelines for using our free online video downloader safely and legally.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        padding: "2rem",
        background: "#23272a",
        borderRadius: 12,
        color: "#fff",
      }}
    >
      <h1 style={{ color: "#1da1f2", fontWeight: 800, marginBottom: "1rem" }}>Terms of Use</h1>
      <p>
        Welcome to our Video Downloader website. By accessing or using this website, you agree to comply with the following Terms of Use. Please read them carefully before using our service.
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By using this website, you agree to be bound by these Terms of Use, our Privacy Policy, and any applicable laws and regulations. If you do not agree with any part of these terms, please do not use our website.
      </p>
      <h2>2. Use of Service</h2>
      <p>
        Our video downloader is provided for personal and non-commercial use only. You agree not to use the service for any illegal or unauthorized purpose, including copyright infringement.
      </p>
      <h2>3. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, and software, is the property of the website owner or its licensors. You may not copy, reproduce, distribute, or create derivative works without prior written permission.
      </p>
      <h2>4. Responsibility for Downloads</h2>
      <p>
        Users are solely responsible for the content they download and must ensure they have the legal right to download videos. We do not host or store any downloaded content on our servers.
      </p>
      <h2>5. Restrictions</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for unlawful purposes</li>
        <li>Attempt to disrupt or harm the website</li>
        <li>Use automated tools or scripts to download videos excessively</li>
      </ul>
      <h2>6. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the content or practices of these third-party sites and recommend reviewing their terms and privacy policies.
      </p>
      <h2>7. Disclaimer of Warranties</h2>
      <p>
        The website is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the availability, accuracy, or reliability of the service.
      </p>
      <h2>8. Limitation of Liability</h2>
      <p>
        In no event shall the website owner be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this service.
      </p>
      <h2>9. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Use at any time. Updated terms will be posted on this page with a revision date.
      </p>
      <h2>10. Contact Us</h2>
      <p>
        If you have any questions regarding these Terms of Use, please contact us through our website.
      </p>
      <p style={{ marginTop: "2rem", color: "#b9bbbe" }}>
        <strong>Last updated: 2026</strong>
      </p>
    </section>
  );
}
