import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Free Online Video Downloader",
  description:
    "Read our disclaimer regarding the use of our free online video downloader and its relationship to social media platforms.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
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
      <h1 style={{ color: "#1da1f2", fontWeight: 800, marginBottom: "1rem" }}>Disclaimer</h1>
      <p>
        The video downloader tool available on this website is provided strictly for personal, educational, and fair-use purposes only. We do not host, store, or control any video, media file, or copyrighted content on our servers. All content accessed through this tool is obtained from publicly available third-party platforms.
      </p>
      <p>
        We do not encourage, support, or promote the downloading, copying, redistribution, or commercial use of copyrighted material without the explicit permission of the content owner. It is the sole responsibility of the user to ensure that their actions comply with applicable copyright laws, regulations, and the terms of service of the respective platforms.
      </p>
      <p>
        The website owner shall not be held responsible for any misuse of this tool, including but not limited to copyright infringement, legal disputes, policy violations, or damages arising from improper use. Users access and use this service at their own risk.
      </p>
      <p>
        All services and information on this website are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties regarding accuracy, reliability, availability, or uninterrupted access to the service. We are not liable for any direct, indirect, incidental, or consequential loss, including data loss or device damage.
      </p>
      <p>
        By using this website, you agree to this disclaimer and accept full responsibility for your actions. If you are a copyright owner and believe that any use of this tool infringes upon your rights, please contact us, and we will take appropriate action promptly.
      </p>
      <hr style={{ margin: "2rem 0", borderColor: "#444" }} />
      <p>
        <strong>Notice:</strong> This service does not host any videos on its servers. All videos you download are hosted on the original platform&apos;s CDNs.
      </p>
      <p>
        <strong>
          This website is a Social Media Services website and is not associated by any means to any social media brand and does not have anything to do with their parent companies.
        </strong>
      </p>
    </section>
  );
}
