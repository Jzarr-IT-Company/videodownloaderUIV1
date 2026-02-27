import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://downloadvideoonline.com"),
  title: {
    default: "Download Video Online - Free Online Video Downloader",
    template: "%s | Download Video Online",
  },
  description:
    "Download videos online from YouTube, Facebook, Instagram, TikTok and more. Fast, free and secure Online video downloader.",
  applicationName: "Download Video Online",
  referrer: "no-referrer-when-downgrade",
  keywords: [
    "download video online",
    "video downloader",
    "youtube video downloader",
    "facebook video downloader",
    "instagram video download",
    "tiktok video downloader",
    "online video download",
    "free video downloader",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://downloadvideoonline.com/",
    siteName: "Download Video Online",
    title: "Download Video Online - Free Video Downloader",
    description:
      "Download videos online from YouTube, Facebook, Instagram, TikTok and more. Fast, free and secure Online video downloader.",
    images: [
      {
        url: "https://downloadvideoonline.com/assets/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Video Online - Free Video Downloader",
    description:
      "Download videos online from YouTube, Facebook, Instagram, TikTok and more. Fast, free and secure Online video downloader.",
    images: ["https://downloadvideoonline.com/assets/twitter-image.jpg"],
  },
  authors: [{ name: "Download Video Online Team" }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/vite.svg", type: "image/svg+xml" },
    ],
  },
  other: {
    googlebot: "index, follow",
    bingbot: "index, follow",
    rating: "general",
    distribution: "global",
    language: "en-us",
    copyright: "© 2026 DownloadVideoOnline.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <meta name="theme-color" content="#0d6efd" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
