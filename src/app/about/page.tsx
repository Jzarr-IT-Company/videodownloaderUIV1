import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Free Online Video Downloader Platform",
  description:
    "Learn more about our free online video downloader. We provide a fast, secure, and easy way to download videos without signup or limits.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        padding: "2rem",
        background: "#23272a",
        borderRadius: 12,
        color: "#fff",
      }}
    >
      <h1 style={{ color: "#1da1f2", fontWeight: 800, marginBottom: "1rem" }}>About Us</h1>
      <p>
        Welcome to our Video Downloader, a simple, fast, and reliable platform designed to help users download videos online with ease. Our goal is to make video downloading accessible to everyone without complicated steps, registrations, or hidden charges.
      </p>
      <p>
        We understand how important offline access to videos can be, whether it is for learning, entertainment, or saving important content. That is why we built a tool that allows you to download videos from popular social media platforms in just a few clicks. Simply paste the video link, choose your preferred quality, and download instantly.
      </p>
      <p>
        Our platform works smoothly on all devices, including mobile phones, tablets, laptops, and desktops. There is no need to install any software or create an account. Everything runs directly in your browser, making the process fast and secure.
      </p>
      <p>
        User privacy and safety are our top priority. We do not store any personal data, video links, or downloaded files. Our system is designed to respect user privacy while delivering a smooth and hassle-free experience.
      </p>
      <p>
        At our core, we believe in simplicity, speed, and freedom. We are continuously improving our service to support more platforms, better quality options, and a more user-friendly experience.
      </p>
      <p>
        Thank you for choosing our Video Downloader. Your trusted solution for downloading videos online.
      </p>
    </section>
  );
}
