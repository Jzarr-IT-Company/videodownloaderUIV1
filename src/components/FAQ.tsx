"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Is this video downloader free to use?",
    a: "Yes, our video downloader is completely free. You can download videos without any subscription, payment, or hidden charges.",
  },
  {
    q: "Which platforms are supported?",
    a: "You can download videos from popular platforms such as YouTube, Instagram, Facebook, TikTok, and other supported social media websites.",
  },
  {
    q: "Do I need to create an account to download videos?",
    a: "No sign-up or login is required. Just paste the video URL and download instantly.",
  },
  {
    q: "Can I download videos in different quality options?",
    a: "Yes, multiple video quality options are available depending on the source, including HD and standard resolutions.",
  },
  {
    q: "Is it safe to use this website?",
    a: "Yes, the website is safe and secure. We do not store user data, video links, or downloaded content.",
  },
  {
    q: "Can I use this downloader on mobile and desktop?",
    a: "Absolutely. Our video downloader works smoothly on mobile phones, tablets, laptops, and desktop devices.",
  },
  {
    q: "Are there any limits on the number of downloads?",
    a: "No, there are no daily or monthly limits. You can download as many videos as you want.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "1.5rem",
        background: "#23272a",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <div key={faq.q} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestionBtn} ${open === idx ? styles.faqQuestionBtnActive : ""}`}
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-answer-${idx}`}
              type="button"
            >
              {faq.q}
              <span className={styles.faqArrow}>{open === idx ? "?" : "?"}</span>
            </button>
            {open === idx && (
              <div id={`faq-answer-${idx}`} className={styles.faqAnswer}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
