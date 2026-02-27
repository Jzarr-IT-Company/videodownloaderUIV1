import {
  FaEraser,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMagic,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import PlatformCard from "./PlatformCard";
import styles from "./SupportedPlatforms.module.css";

const platforms = [
  {
    name: "AI Image Generation",
    href: "https://www.hdpiks.com/ai/ai-generator",
    external: true,
    Icon: FaMagic,
  },
  { name: "Facebook", slug: "facebook", Icon: FaFacebook },
  { name: "Twitter", slug: "twitter", Icon: FaTwitter },
  { name: "Instagram", slug: "instagram", Icon: FaInstagram },
  { name: "TikTok", slug: "tiktok", Icon: SiTiktok },
  { name: "LinkedIn", slug: "linkedin", Icon: FaLinkedin },
  {
    name: "AI Bg Remover",
    href: "https://www.hdpiks.com/ai/ai-bg-remove",
    external: true,
    Icon: FaEraser,
  },
  { name: "Pinterest", slug: "pinterest", Icon: FaPinterest },
];

export default function SupportedPlatforms() {
  return (
    <section className={styles.platformsSection} aria-label="Supported Platforms">
      <div className={styles.platformsGrid}>
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.slug || platform.href}
            name={platform.name}
            slug={platform.slug}
            href={platform.href}
            external={platform.external}
            Icon={platform.Icon}
          />
        ))}
      </div>
    </section>
  );
}
