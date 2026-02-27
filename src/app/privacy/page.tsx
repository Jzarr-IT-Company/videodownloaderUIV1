import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Free Online Video Downloader",
  description:
    "Read our Privacy Policy to learn how we protect your data and privacy while using our free online video downloader service.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
      <h1 style={{ color: "#1da1f2", fontWeight: 800, marginBottom: "1rem" }}>
        Privacy Policy
      </h1>
      <p>
        <strong>Last updated: January 1, 2026</strong>
      </p>
      <p>
        Welcome to our Video Downloader website. Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your information when you use our service.
      </p>
      <h2>1. Information We Collect</h2>
      <p>
        We do not collect any personally identifiable information from users. You can use our website without providing your name, email address, or any other personal details.
      </p>
      <p>
        When you visit our website, we may automatically collect limited non-personal information such as:
      </p>
      <ul>
        <li>Browser type</li>
        <li>Device type</li>
        <li>IP address (used only for security and analytics purposes)</li>
        <li>Pages visited and usage data</li>
      </ul>
      <p>This information helps us improve website performance and user experience.</p>
      <h2>2. Use of Downloaded Content</h2>
      <p>
        Our platform acts as a tool to help users download publicly available videos for personal use. We do not host, store, or save any video files on our servers. All downloads are processed directly between the user and the original content source.
      </p>
      <h2>3. Cookies</h2>
      <p>
        We may use cookies to enhance user experience, analyze traffic, and understand user behavior. Cookies do not contain personal information and can be disabled through your browser settings at any time.
      </p>
      <h2>4. Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect our website and users from unauthorized access, misuse, or data breaches. However, no online service can be 100% secure.
      </p>
      <h2>5. Third-Party Services</h2>
      <p>
        Our website may use third-party tools such as analytics services to understand website usage. These third parties may collect non-personal information according to their own privacy policies. We are not responsible for the privacy practices of external websites or services linked from our platform.
      </p>
      <h2>6. Copyright Disclaimer</h2>
      <p>
        Users are responsible for ensuring that they have the legal right to download and use any content. We do not encourage or support copyright infringement.
      </p>
      <h2>7. Children&apos;s Information</h2>
      <p>
        Our service is not intended for children under the age of 13. We do not knowingly collect any personal information from children.
      </p>
      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>
      <h2>9. Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>
      <h2>10. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us through our website.
      </p>
    </section>
  );
}
