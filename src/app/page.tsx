import type { Metadata } from "next";
import Link from "next/link";
import DownloadForm from "@/components/DownloadForm";
import FAQ from "@/components/FAQ";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import styles from "./HomePage.module.css";

const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://downloadvideoonline.com/#organization",
      name: "Download Video Online",
      url: "https://downloadvideoonline.com/",
      logo: "https://downloadvideoonline.com/vite.svg",
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: "https://downloadvideoonline.com/contact",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://downloadvideoonline.com/#service",
      name: "Online Video Download Service",
      serviceType: "Video Downloader",
      provider: { "@id": "https://downloadvideoonline.com/#organization" },
      areaServed: "Worldwide",
      url: "https://downloadvideoonline.com/",
      description:
        "Download videos online from YouTube, Facebook, Instagram, TikTok and more. Fast, free and secure Online video downloader.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://downloadvideoonline.com/",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://downloadvideoonline.com/download#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Download Video Online free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the tool is free to use. You can paste a supported video link and download based on available formats.",
          },
        },
        {
          "@type": "Question",
          name: "Which platforms are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Support depends on platform availability and restrictions. The tool typically works with common video platforms when accessible.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to install any software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It works directly in your browser - no installation required.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my video not downloading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This can happen if the link is invalid, the platform blocks access, or the video is private/age-restricted/region-limited. Try another link or check the video availability.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe to use this website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The website is designed to be used safely in a browser. Always download content only when you have the right to do so.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Download Video Online - Free Online Video Downloader",
  },
  description:
    "Download videos online from YouTube, Facebook, Instagram, TikTok and more. Fast, free and secure Online video downloader.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructuredData) }}
      />
      <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <h1>Free Online Video Downloader</h1>
        <h2>Download Videos Fast &amp; Easy</h2>
      </section>

      <SupportedPlatforms />

      <div className={styles.downloadFormWrapper}>
        <DownloadForm />
      </div>

      <section
        className={styles.articleSection}
        style={{
          maxWidth: 700,
          margin: "2rem auto",
          padding: "2rem",
          background: "#23272a",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          className={styles.articleTitle}
          style={{ color: "#1da1f2", fontWeight: 700, marginBottom: "1rem" }}
        >
          Video Downloader Any Platform Anywhere
        </h2>
        <p className={styles.articleSubtitle} style={{ marginBottom: "1.5rem" }}>
          Download videos from YouTube, Instagram, TikTok, Facebook, and more in just a few clicks. No software, no account, no hidden charges - just paste the video link and start downloading.
        </p>

        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            textAlign: "left",
            margin: "0 auto",
            paddingRight: "1rem",
            background: "transparent",
          }}
        >
          <h3>Introduction: Download Videos Anytime, Anywhere</h3>
          <p>
            Online video consumption in Asia is growing at an unmatched pace. From educational tutorials and business webinars to entertainment content and short videos, users increasingly want access without relying on continuous internet connectivity. A video downloader any platform anywhere solution makes this possible by allowing users to save videos for offline use across devices and regions.
          </p>
          <p>
            With rising data costs, unstable networks, and mobile-first users, having a reliable video downloader is no longer optional. It is a necessity.
          </p>
          <h3>What Is a Video Downloader?</h3>
          <p>
            A video downloader is an online tool that allows users to download videos directly from supported platforms using a video URL. Instead of streaming content repeatedly, users can save videos locally and watch them anytime.
          </p>
          <h3>How a Video Downloader Works</h3>
          <ul>
            <li>Copy the video link from any platform</li>
            <li>Paste the link into the video downloader</li>
            <li>Select video or audio format</li>
            <li>Download instantly to your device</li>
          </ul>
          <p>
            This process removes platform restrictions and provides full control over your content.
          </p>
          <h3>Why Video Downloaders Are Popular in Asia</h3>
          <p>
            Asia represents one of the largest digital audiences globally, with diverse connectivity challenges and usage patterns.
          </p>
          <strong>Key Reasons for High Demand</strong>
          <ul>
            <li>Limited or inconsistent internet access in many regions</li>
            <li>High mobile data costs</li>
            <li>Strong demand for offline learning</li>
            <li>Growing creator economy across Asia</li>
          </ul>
          <p>
            A video downloader any platform anywhere allows users from India, Southeast Asia, East Asia, and the Middle East to access content without barriers.
          </p>
          <h3>Download Videos from Any Platform</h3>
          <p>
            Modern users consume content across multiple platforms. A reliable video downloader supports downloads from:
          </p>
          <ul>
            <li>Social media platforms</li>
            <li>Video hosting websites</li>
            <li>Educational portals</li>
            <li>Short-form video platforms</li>
          </ul>
          <p>
            This flexibility ensures that users are not restricted by platform limitations.
          </p>
          <h3>One Tool, Unlimited Sources</h3>
          <p>
            Instead of using different tools for different websites, one universal video downloader any platform anywhere solution saves time and effort.
          </p>
          <h3>Compatible with All Devices</h3>
          <p>
            Device compatibility is critical for Asian users who rely heavily on smartphones.
          </p>
          <strong>Supported Devices</strong>
          <ul>
            <li>Android smartphones and tablets</li>
            <li>iPhone and iPad</li>
            <li>Windows laptops and desktops</li>
            <li>macOS systems</li>
          </ul>
          <p>
            A browser-based video downloader ensures seamless access without hardware dependency.
          </p>
          <h3>No Software Installation Required</h3>
          <p>Installing apps can expose devices to security risks and consume storage.</p>
          <strong>Benefits of an Online Video Downloader</strong>
          <ul>
            <li>No installation required</li>
            <li>Works directly in the browser</li>
            <li>No updates or maintenance</li>
            <li>Safe and lightweight</li>
          </ul>
          <p>
            This makes a video downloader any platform anywhere ideal for users with limited storage or older devices.
          </p>
          <h3>High-Quality Video Downloads</h3>
          <p>Quality matters, especially for educational and professional content.</p>
          <strong>Supported Download Options</strong>
          <ul>
            <li>Standard definition for low storage</li>
            <li>HD and Full HD quality</li>
            <li>Audio-only downloads for podcasts and music</li>
          </ul>
          <p>
            A professional video downloader preserves original quality without compression loss.
          </p>
          <h3>Fast and Secure Download Process</h3>
          <p>Speed and security define trust.</p>
          <strong>Security and Performance Features</strong>
          <ul>
            <li>High-speed processing servers</li>
            <li>No login or registration required</li>
            <li>Encrypted connections</li>
            <li>No user data stored</li>
          </ul>
          <p>
            This ensures that your video downloader any platform anywhere experience remains private and efficient.
          </p>
          <h3>How to Download Videos Step by Step</h3>
          <p>
            The process is designed for all users, regardless of technical knowledge.
          </p>
          <strong>Simple Download Steps</strong>
          <ul>
            <li>Copy the video URL from any platform</li>
            <li>Paste it into the video downloader input box</li>
            <li>Select video or audio format</li>
            <li>Click download and save the file</li>
          </ul>
          <p>This simplicity makes the tool accessible across all age groups.</p>
          <h3>Supported Video Formats</h3>
          <p>Choosing the right format improves compatibility and storage efficiency.</p>
          <strong>Commonly Supported Formats</strong>
          <ul>
            <li>MP4 for universal compatibility</li>
            <li>MP3 for audio downloads</li>
            <li>Web-friendly formats for sharing</li>
          </ul>
          <p>
            A flexible video downloader any platform anywhere adapts to user needs across Asia.
          </p>
          <h3>Use Cases: Who Needs a Video Downloader?</h3>
          <p>A video downloader serves a wide range of users.</p>
          <strong>Common User Groups</strong>
          <ul>
            <li>Students downloading lectures</li>
            <li>Professionals saving training videos</li>
            <li>Content creators researching trends</li>
            <li>Travelers watching videos offline</li>
          </ul>
          <p>
            This versatility explains the growing popularity of video downloader any platform anywhere solutions.
          </p>
          <h3>Comparison: Online Video Downloader vs Traditional Apps</h3>
          <strong>Online Video Downloader</strong>
          <ul>
            <li>No installation required</li>
            <li>Works on all devices</li>
            <li>No system permissions needed</li>
            <li>Instant access from any browser</li>
          </ul>
          <strong>Traditional Downloader Apps</strong>
          <ul>
            <li>Requires installation</li>
            <li>Consumes storage</li>
            <li>Limited platform support</li>
            <li>Frequent updates needed</li>
          </ul>
          <p>
            An online video downloader any platform anywhere offers superior convenience and flexibility.
          </p>
          <h3>Advantages Over Other Video Downloaders</h3>
          <p>Not all tools deliver the same value.</p>
          <strong>Key Advantages</strong>
          <ul>
            <li>No watermark on downloads</li>
            <li>Free to use</li>
            <li>User-friendly interface</li>
            <li>Works across Asian regions without restriction</li>
          </ul>
          <p>These features distinguish a reliable video downloader from generic tools.</p>
          <h3>Legal and Ethical Use of Video Downloaders</h3>
          <p>Responsible usage is essential.</p>
          <strong>Best Practices</strong>
          <ul>
            <li>Download content for personal use</li>
            <li>Respect copyright policies</li>
            <li>Avoid commercial redistribution without permission</li>
          </ul>
          <p>
            A trustworthy video downloader any platform anywhere promotes ethical content usage.
          </p>
          <h3>Why Choose This Video Downloader Website</h3>
          <p>This platform is designed with Asian users in mind.</p>
          <strong>Key Reasons to Choose It</strong>
          <ul>
            <li>Consistent performance across countries</li>
            <li>Mobile-first design</li>
            <li>Fast processing and high-quality output</li>
            <li>Free and accessible anytime</li>
          </ul>
          <p>If you need a dependable video downloader, this solution stands out.</p>
          <h3>Conclusion: One Video Downloader for Every Platform</h3>
          <p>
            A video downloader any platform anywhere empowers users to control their content experience. Whether for learning, entertainment, or professional use, this tool offers unmatched flexibility, security, and performance for users across Asia.
          </p>
          <p>
            By choosing a reliable video downloader, you ensure seamless access to videos whenever and wherever you need them.
          </p>
          <h3>Frequently Asked Questions</h3>
          <ol>
            <li>
              <strong>Is this video downloader free to use?</strong>
              <br />Yes, the video downloader is completely free and does not require registration.
            </li>
            <li>
              <strong>Can I use the video downloader on mobile devices?</strong>
              <br />Yes, this video downloader any platform anywhere works on Android and iOS devices through a browser.
            </li>
            <li>
              <strong>Does the downloader support HD videos?</strong>
              <br />Yes, users can download videos in HD and Full HD quality.
            </li>
            <li>
              <strong>Is it safe to use an online video downloader?</strong>
              <br />A trusted video downloader uses secure connections and does not store user data.
            </li>
            <li>
              <strong>Which formats are supported?</strong>
              <br />Common formats like MP4 and MP3 are supported for maximum compatibility.
            </li>
            <li>
              <strong>Can I download videos from multiple platforms?</strong>
              <br />Yes, the video downloader any platform anywhere supports multiple video platforms.
            </li>
            <li>
              <strong>Is downloading videos legal?</strong>
              <br />Downloading for personal use is generally acceptable, but users should always respect copyright rules.
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions (FAQs)</h2>
        <p className={styles.faqSubtitle}>
          If you cannot find an answer that you are looking for, feel free to drop us a line.
        </p>
        <div className={styles.faqActions}>
          <Link href="/about" className={styles.faqActionBtn}>
            Visit Community Center
          </Link>
        </div>
        <FAQ />
      </section>
      </div>
    </>
  );
}
