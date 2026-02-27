import type { IconType } from "react-icons";
import Link from "next/link";
import styles from "./PlatformCard.module.css";

type PlatformCardProps = {
  name: string;
  slug?: string;
  href?: string;
  external?: boolean;
  Icon: IconType;
};

export default function PlatformCard({ name, slug, href, external = false, Icon }: PlatformCardProps) {
  const resolvedHref = href || `/${slug}`;

  if (external) {
    return (
      <a
        className={styles.platformCard}
        href={resolvedHref}
        aria-label={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={36} className={styles.icon} aria-hidden="true" />
        <span className={styles.platformName}>{name}</span>
      </a>
    );
  }

  return (
    <Link className={styles.platformCard} href={resolvedHref} aria-label={name}>
      <Icon size={36} className={styles.icon} aria-hidden="true" />
      <span className={styles.platformName}>{name}</span>
    </Link>
  );
}
