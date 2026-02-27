"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        width: "100%",
        margin: "3rem auto",
        padding: "2.5rem 2rem",
        background: "#18191c",
        borderRadius: 16,
        boxShadow: "0 2px 18px rgba(0,0,0,0.12)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Contact Us
      </h1>

      {submitted ? (
        <div style={{ color: "#1da1f2", marginTop: "1rem", textAlign: "center" }}>
          Thank you for contacting us! We will get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}
        >
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: 6,
                border: "1px solid #333",
                background: "#222",
                color: "#fff",
                marginTop: 4,
              }}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: 6,
                border: "1px solid #333",
                background: "#222",
                color: "#fff",
                marginTop: 4,
              }}
              required
            />
          </label>

          <label>
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: 6,
                border: "1px solid #333",
                background: "#222",
                color: "#fff",
                marginTop: 4,
                resize: "vertical",
              }}
              required
            />
          </label>

          {error && <div style={{ color: "red" }}>{error}</div>}

          <button
            type="submit"
            style={{
              background: "#1da1f2",
              color: "#181818",
              border: "none",
              borderRadius: 6,
              padding: "0.8rem 1.2rem",
              fontSize: "1.1rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              width: "100%",
              marginTop: "0.5rem",
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
