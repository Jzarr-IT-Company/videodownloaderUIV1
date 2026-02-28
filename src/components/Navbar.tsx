"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "https://downloadvideoonline.com/blog/", label: "Blog", external: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/" onClick={handleClose}>
            VideoDownloader
          </Link>
        </div>
        <button
          className={styles.hamburger}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={handleToggle}
          type="button"
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>

        <ul className={`${styles.navList} ${open ? styles.navListOpen : ""}`}>
          {navLinks.map((link) => {
            const normalizedPathname =
              pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
            const isExternal = Boolean(link.external);
            const normalizedHref =
              !isExternal && link.href.endsWith("/") && link.href !== "/"
                ? link.href.slice(0, -1)
                : link.href;
            const isActive = !isExternal && normalizedPathname === normalizedHref;

            if (isExternal) {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleClose}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? styles.active : ""}
                  onClick={handleClose}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
