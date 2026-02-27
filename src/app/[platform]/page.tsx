import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlatformDownloadPage from "@/components/PlatformDownloadPage";
import { PLATFORM_LABELS, PLATFORM_SLUGS, isPlatformSlug } from "@/lib/platforms";

type PlatformRouteProps = {
  params: Promise<{ platform: string }>;
};

export async function generateStaticParams() {
  return PLATFORM_SLUGS.map((platform) => ({ platform }));
}

export async function generateMetadata({ params }: PlatformRouteProps): Promise<Metadata> {
  const { platform } = await params;
  if (!isPlatformSlug(platform)) {
    return {
      title: "Platform Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const label = PLATFORM_LABELS[platform];
  return {
    title: `${label} Video Downloader`,
    description: `Download ${label} videos quickly with our free online downloader.`,
    alternates: {
      canonical: `/${platform}`,
    },
  };
}

export default async function PlatformPage({ params }: PlatformRouteProps) {
  const { platform } = await params;
  if (!isPlatformSlug(platform)) {
    notFound();
  }

  return <PlatformDownloadPage platform={platform} />;
}
