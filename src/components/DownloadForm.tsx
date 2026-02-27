"use client";

import { useMemo, useState } from "react";
import styles from "./DownloadForm.module.css";

type DownloadFormProps = {
  validateUrl?: (url: string) => boolean;
  platform?: string;
};

type DownloadResponse = {
  file?: string;
  files?: string[];
  warning?: string;
  error?: string;
  details?: string;
  code?: string;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
const VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "m4v", "ogv", "mkv"];
const AUDIO_EXTENSIONS = ["mp3", "m4a", "aac", "wav", "ogg"];

export default function DownloadForm({ validateUrl, platform }: DownloadFormProps) {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp4");
  const [quality, setQuality] = useState("720p");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadLinks, setDownloadLinks] = useState<string[]>([]);
  const [warning, setWarning] = useState<string | null>(null);

  const apiBase = useMemo(() => BACKEND_URL.replace(/\/$/, ""), []);

  const getFileExtension = (link: string) => {
    const cleanUrl = link.split("?")[0];
    return (cleanUrl.split(".").pop() || "").toLowerCase();
  };

  const videoPreviewSrc = downloadLinks.find((link) =>
    VIDEO_EXTENSIONS.includes(getFileExtension(link)),
  );
  const audioPreviewSrc =
    !videoPreviewSrc &&
    downloadLinks.find((link) => AUDIO_EXTENSIONS.includes(getFileExtension(link)));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDownloadLinks([]);
    setWarning(null);

    if (validateUrl && !validateUrl(url)) {
      setError(
        `Please enter a valid ${platform ? `${platform.charAt(0).toUpperCase()}${platform.slice(1)} ` : ""}video URL.`,
      );
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${apiBase}/download`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoUrl: url,
          format: format === "mp3" ? "audio" : "video",
          quality,
        }),
      });

      const data = (await response.json()) as DownloadResponse;

      if (!response.ok) {
        const combinedErrorText =
          `${data.code || ""} ${data.error || ""} ${data.details || ""}`.toLowerCase();
        const isYouTubeBotBlock =
          combinedErrorText.includes("sign in to confirm you") ||
          combinedErrorText.includes("not a bot") ||
          combinedErrorText.includes("youtube is blocking downloads");
        const isInstagramRateLimited =
          combinedErrorText.includes("instagram_auth_required") ||
          (combinedErrorText.includes("instagram") &&
            (combinedErrorText.includes("rate-limit reached") ||
              combinedErrorText.includes("login required") ||
              combinedErrorText.includes("use --cookies")));

        if (isYouTubeBotBlock) {
          setError(
            "YouTube download is blocked on this hosted server by platform bot-protection. Try another platform link or run backend locally.",
          );
        } else if (isInstagramRateLimited) {
          setError(
            "Instagram is rate-limiting or requiring login on this hosted backend. Try again later or use backend cookies authentication.",
          );
        } else {
          setError(data.error || "Download failed");
        }
        return;
      }

      if (Array.isArray(data.files) && data.files.length > 0) {
        setDownloadLinks(data.files.map((filePath) => `${apiBase}${filePath}`));
        if (data.warning) {
          setWarning(data.warning);
        }
        return;
      }

      if (data.file) {
        setDownloadLinks([`${apiBase}${data.file}`]);
        return;
      }

      setError("No downloadable file found.");
    } catch {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderLink = (link: string, index: number, label: string) => {
    const filename = link.split("/").pop();
    if (!filename) {
      return null;
    }

    return (
      <a
        key={`${filename}-${index}`}
        href={`${apiBase}/force-download/${filename}`}
        className={styles.button}
        style={{ textDecoration: "none", display: "inline-block", marginRight: "0.5rem" }}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  };

  return (
    <form className={styles.downloadForm} onSubmit={handleSubmit} aria-label="Download Form">
      <label htmlFor="video-url" className={styles.label}>
        Video URL
      </label>
      <input
        id="video-url"
        type="url"
        placeholder={`Paste ${platform ? `${platform.charAt(0).toUpperCase()}${platform.slice(1)} ` : ""}video URL`}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className={styles.input}
      />

      {error && <div style={{ color: "red", marginBottom: "0.5rem" }}>{error}</div>}

      <label htmlFor="format" className={styles.label}>
        Format
      </label>
      <select
        id="format"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className={styles.select}
      >
        <option value="mp4">Video (MP4)</option>
        <option value="mp3">Audio (MP3)</option>
      </select>

      <label htmlFor="quality" className={styles.label}>
        Quality
      </label>
      <select
        id="quality"
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        className={styles.select}
        disabled={format === "mp3"}
      >
        <option value="480p">480p</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
      </select>

      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Processing..." : "Download"}
      </button>

      {downloadLinks.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          {downloadLinks
            .filter((link) => link.endsWith(".mp4"))
            .map((link, idx) => renderLink(link, idx, "Click here to download your video"))}

          {downloadLinks.every((link) => !link.endsWith(".mp4")) &&
            downloadLinks.map((link, idx) => {
              const filename = link.split("/").pop() || "";
              let label = "Click here to download your file";
              if (downloadLinks.length > 1) {
                if (filename.endsWith(".webm")) {
                  label = idx === 0 ? "Click here to download video" : "Click here to download audio";
                }
                if (filename.endsWith(".mp3")) {
                  label = "Click here to download audio";
                }
              }
              return renderLink(link, idx, label);
            })}

          {warning && <div style={{ color: "orange", marginTop: "0.5rem" }}>{warning}</div>}

          {videoPreviewSrc && (
            <div className={styles.previewWrapper}>
              <p className={styles.previewTitle}>Video Preview</p>
              <video
                className={styles.previewMedia}
                controls
                preload="metadata"
                src={videoPreviewSrc}
              />
            </div>
          )}

          {!videoPreviewSrc && audioPreviewSrc && (
            <div className={styles.previewWrapper}>
              <p className={styles.previewTitle}>Audio Preview</p>
              <audio
                className={styles.previewAudio}
                controls
                preload="metadata"
                src={audioPreviewSrc}
              />
            </div>
          )}
        </div>
      )}
    </form>
  );
}
