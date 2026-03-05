"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px 80px",
        position: "relative",
      }}
      aria-label="Hero section"
    >
      {/* Ambient background ring */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-60%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Profile photo */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: 32, position: "relative" }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            padding: 3,
            background: "linear-gradient(135deg,#3b82f6,#6366f1)",
            display: "inline-block",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              background: "var(--bg-elevated)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Najmul Hasan — Full Stack Developer"
              width={114}
              height={114}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>
        </div>

        {/* Online indicator */}
        <span
          aria-label="Available for work"
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#22c55e",
            border: "2px solid var(--bg-base)",
            boxShadow: "0 0 8px rgba(34,197,94,0.5)",
          }}
        />
      </motion.div>

      {/* Eyebrow label */}
      <motion.p {...fadeUp(0.1)} className="section-subtitle" style={{ marginBottom: 16 }}>
        Available for opportunities
      </motion.p>

      {/* Main heading */}
      <motion.h1
        {...fadeUp(0.2)}
        className="display-xl"
        style={{ marginBottom: 16, maxWidth: 640, margin: "0 auto 16px" }}
      >
        Hi, I'm{" "}
        <span className="gradient-text">Najmul Hasan</span>
      </motion.h1>

      {/* Role */}
      <motion.p
        {...fadeUp(0.3)}
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "#94a3b8",
          fontWeight: 400,
          marginBottom: 24,
          letterSpacing: "-0.01em",
        }}
      >
        Full Stack Developer &mdash; React · Node.js · MongoDB
      </motion.p>

      {/* Bio */}
      <motion.p
        {...fadeUp(0.4)}
        className="body-lg"
        style={{ maxWidth: 560, margin: "0 auto 40px" }}
      >
        Business graduate turned developer — I build structured, scalable web
        applications with a focus on clean code and great user experience.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        {...fadeUp(0.5)}
        style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}
      >
        <a href="#projects" className="btn-primary" aria-label="View my projects">
          View Projects
          <HiArrowDown size={15} />
        </a>
        <a href="#contact" className="btn-outline" aria-label="Contact me">
          Get in touch
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        {...fadeUp(0.6)}
        style={{ display: "flex", gap: 20, justifyContent: "center" }}
        role="list"
        aria-label="Social links"
      >
        {[
          { href: "https://github.com/Shariarx6T9", Icon: FaGithub, label: "GitHub" },
          { href: "https://www.linkedin.com/in/shaariar", Icon: FaLinkedin, label: "LinkedIn" },
          { href: "https://wa.me/8801840242448", Icon: FaWhatsapp, label: "WhatsApp" },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            role="listitem"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 10,
              color: "#94a3b8",
              border: "1px solid rgba(148,163,184,0.1)",
              background: "rgba(255,255,255,0.03)",
              transition: "all 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f0f4ff";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
              e.currentTarget.style.background = "rgba(99,102,241,0.08)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.borderColor = "rgba(148,163,184,0.1)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
