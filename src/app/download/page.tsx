import type { Metadata } from "next";

const downloadPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://downloadvideoonline.com/download#faq",
      url: "https://downloadvideoonline.com/download",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I download a video using Download Video Online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Copy the video link from the platform, open the Download page, paste the link into the input box, choose the available quality/format, then click Download to save the file.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to install any software to download videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The tool works directly in your browser, so you do not need to install any software.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my video not downloading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This can happen if the link is invalid, the video is private, age/region-restricted, or the source blocks access. Double-check the URL and try again.",
          },
        },
        {
          "@type": "Question",
          name: "Can I download videos in different qualities or formats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If the source provides multiple options, the tool will show available qualities/formats. Options can vary by platform and video.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe and legal to download videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the tool safely in your browser and download only content you have permission to download or that is allowed by the platform's terms and applicable laws.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://downloadvideoonline.com/download#howto",
      name: "How to Download Videos Online",
      description:
        "Follow these steps to download a video online by pasting a video link, selecting the available format/quality, and saving it to your device.",
      totalTime: "PT2M",
      supply: [
        {
          "@type": "HowToSupply",
          name: "A valid video URL",
        },
      ],
      tool: [
        {
          "@type": "HowToTool",
          name: "Web browser (Chrome, Edge, Safari, Firefox)",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Copy the video link",
          text: "Open the video on its platform and copy the video URL from the address bar or share menu.",
          url: "https://downloadvideoonline.com/download#step-1",
        },
        {
          "@type": "HowToStep",
          name: "Open the Download page",
          text: "Go to the Download Video Online download page in your browser.",
          url: "https://downloadvideoonline.com/download#step-2",
        },
        {
          "@type": "HowToStep",
          name: "Paste the link",
          text: "Paste the copied video URL into the input box on the page.",
          url: "https://downloadvideoonline.com/download#step-3",
        },
        {
          "@type": "HowToStep",
          name: "Choose quality or format",
          text: "Select the available video quality/format shown by the tool (options vary by video and platform).",
          url: "https://downloadvideoonline.com/download#step-4",
        },
        {
          "@type": "HowToStep",
          name: "Download and save",
          text: "Click the Download button and save the file to your device when prompted.",
          url: "https://downloadvideoonline.com/download#step-5",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Download Video Online - How to Download Videos Easily",
  description:
    "Learn how to download videos online step by step. Paste the video link, choose quality, and download videos quickly using our free online video downloader.",
  keywords: [
    "how to download video",
    "video download page",
    "free video downloader",
    "online video download",
    "download videos online",
  ],
  alternates: {
    canonical: "/download",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function DownloadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadPageStructuredData) }}
      />
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
          How to Download Videos Online - Step by Step Guide
        </h1>
        <p>
          Looking for a <strong>fast and free video downloader</strong>? Our online tool lets you <strong>download videos from YouTube, Instagram, TikTok, Facebook</strong>, and more in just a few clicks. No software, no account, no hidden charges - just paste the video link and start downloading.
        </p>
        <ol>
          <li>
            <strong>Copy the Video Link</strong>
            <br />
            Go to the video you want to download. Copy the URL from the browser or social media app. This works for <strong>YouTube videos, Instagram reels, TikTok clips, Facebook videos</strong>, and other supported platforms.
          </li>
          <li>
            <strong>Paste the Link in the Downloader</strong>
            <br />
            Open our <strong>free video downloader online</strong>, paste the link in the download box, and select the desired format and quality.
          </li>
          <li>
            <strong>Select Video Quality</strong>
            <br />
            Choose from HD, SD, or mobile-friendly resolutions. Our tool ensures <strong>fast HD video downloads</strong> without losing quality.
          </li>
          <li>
            <strong>Click Download</strong>
            <br />
            Press the Download button and wait for your video to be saved. Our <strong>online video downloader</strong> starts processing instantly for a seamless experience.
          </li>
          <li>
            <strong>Watch Offline Anytime</strong>
            <br />
            After downloading, you can watch your favorite videos offline on your mobile, tablet, or desktop. Save videos for entertainment, learning, or sharing offline with friends.
          </li>
        </ol>
        <h2 style={{ color: "#1da1f2", marginTop: "2rem" }}>Why Use Our Video Downloader?</h2>
        <ul>
          <li>
            <strong>Free &amp; Fast:</strong> No charges or subscriptions
          </li>
          <li>
            <strong>Supports Multiple Platforms:</strong> YouTube, Instagram, TikTok, Facebook, and more
          </li>
          <li>
            <strong>HD Video Downloads:</strong> High-quality videos saved directly to your device
          </li>
          <li>
            <strong>No Signup Required:</strong> Just paste the link and download
          </li>
        </ul>
        <p style={{ marginTop: "2rem", color: "#b9bbbe" }}>
          <em>
            Free video downloader online, download videos from YouTube, save Instagram videos, TikTok video downloader, HD video download, download Facebook videos free, offline video download.
          </em>
        </p>
      </section>
    </>
  );
}
