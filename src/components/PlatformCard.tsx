import type { IconType } from "react-icons";
import Link from "next/link";
import styles from "./PlatformCard.module.css";

type PlatformCardProps = {
  name: string;
  slug: string;
  Icon: IconType;
};

export default function PlatformCard({ name, slug, Icon }: PlatformCardProps) {
  return (
    <Link className={styles.platformCard} href={`/${slug}`} aria-label={name}>
      <Icon size={36} className={styles.icon} aria-hidden="true" />
      <span className={styles.platformName}>{name}</span>
    </Link>
  );
}
