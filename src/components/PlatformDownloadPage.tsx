"use client";

import DownloadForm from "./DownloadForm";
import { PLATFORM_LABELS, PLATFORM_VALIDATORS, type PlatformSlug } from "@/lib/platforms";

type PlatformDownloadPageProps = {
  platform: PlatformSlug;
};

export default function PlatformDownloadPage({ platform }: PlatformDownloadPageProps) {
  const validateUrl = (url: string) => PLATFORM_VALIDATORS[platform].test(url);
  const label = PLATFORM_LABELS[platform];

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>{label} Video Downloader</h1>
      <DownloadForm validateUrl={validateUrl} platform={platform} />
    </div>
  );
}
