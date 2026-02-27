export const PLATFORM_SLUGS = [
  "facebook",
  "twitter",
  "instagram",
  "tiktok",
  "linkedin",
  "pinterest",
] as const;

export type PlatformSlug = (typeof PLATFORM_SLUGS)[number];

export const PLATFORM_LABELS: Record<PlatformSlug, string> = {
  facebook: "Facebook",
  twitter: "Twitter",
  instagram: "Instagram",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
  pinterest: "Pinterest",
};

export const PLATFORM_VALIDATORS: Record<PlatformSlug, RegExp> = {
  facebook: /^https?:\/\/(www\.)?facebook\.com\//i,
  twitter: /^https?:\/\/(www\.)?(twitter\.com|x\.com)\//i,
  instagram: /^https?:\/\/(www\.)?instagram\.com\//i,
  tiktok: /^https?:\/\/(www\.)?tiktok\.com\//i,
  linkedin: /^https?:\/\/(www\.)?linkedin\.com\//i,
  pinterest: /^https?:\/\/(www\.)?pinterest\.com\//i,
};

export function isPlatformSlug(value: string): value is PlatformSlug {
  return PLATFORM_SLUGS.includes(value as PlatformSlug);
}
