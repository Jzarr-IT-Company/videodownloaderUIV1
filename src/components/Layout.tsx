import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Link className={styles.footerLogo} href="/">
              VideoDownloader
            </Link>
            <span className={styles.footerTagline}>
              Download videos from all major platforms
            </span>
          </div>

          <nav className={styles.footerLinks} aria-label="Footer links">
            <Link href="/download">How to Download Videos</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className={styles.footerNoticeBox}>
            <h3 className={styles.footerNoticeHeading}>Disclaimer</h3>
            <p>
              <strong>Notice:</strong> This service does not host any videos on its servers. All videos you download are hosted on the original platform&apos;s CDNs.
            </p>
            <p>
              <strong>
                This website is a Social Media Services website and is not associated by any means to any social media brand and does not have anything to do with their parent companies.
              </strong>
            </p>
            <Link
              href="/disclaimer"
              style={{
                color: "#1da1f2",
                textDecoration: "underline",
                display: "inline-block",
                marginTop: "0.5em",
              }}
            >
              read more...
            </Link>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} VideoDownloader. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
