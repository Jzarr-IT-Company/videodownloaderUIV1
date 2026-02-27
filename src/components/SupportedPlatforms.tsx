import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiDailymotion, SiTiktok } from "react-icons/si";
import PlatformCard from "./PlatformCard";
import styles from "./SupportedPlatforms.module.css";

const platforms = [
  { name: "YouTube", slug: "youtube", Icon: FaYoutube },
  { name: "Facebook", slug: "facebook", Icon: FaFacebook },
  { name: "Twitter", slug: "twitter", Icon: FaTwitter },
  { name: "Instagram", slug: "instagram", Icon: FaInstagram },
  { name: "TikTok", slug: "tiktok", Icon: SiTiktok },
  { name: "LinkedIn", slug: "linkedin", Icon: FaLinkedin },
  { name: "Dailymotion", slug: "dailymotion", Icon: SiDailymotion },
  { name: "Pinterest", slug: "pinterest", Icon: FaPinterest },
];

export default function SupportedPlatforms() {
  return (
    <section className={styles.platformsSection} aria-label="Supported Platforms">
      <div className={styles.platformsGrid}>
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.slug}
            name={platform.name}
            slug={platform.slug}
            Icon={platform.Icon}
          />
        ))}
      </div>
    </section>
  );
}
