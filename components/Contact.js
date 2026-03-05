"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const VIEWPORT = { once: true, margin: "-80px" };

const SOCIALS = [
  { href: "https://github.com/Shariarx6T9",          Icon: FaGithub,   label: "GitHub",   color: "#f0f4ff" },
  { href: "https://www.linkedin.com/in/shaariar",     Icon: FaLinkedin, label: "LinkedIn", color: "#3b82f6" },
  { href: "https://wa.me/8801840242448",              Icon: FaWhatsapp, label: "WhatsApp", color: "#22c55e" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          <motion.p variants={fadeUpVariant} className="section-subtitle" style={{ marginBottom: 12 }}>
            Get in touch
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            id="contact-heading"
            className="section-title"
            style={{ marginBottom: 16 }}
          >
            Let's work together
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="body-lg" style={{ marginBottom: 40 }}>
            Open to full-time roles, freelance projects and collaborations.
            I'd love to hear about what you're building.
          </motion.p>

          {/* Email card */}
          <motion.a
            variants={fadeUpVariant}
            href="mailto:najmulhasanshahin@gmail.com"
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: "20px 32px",
              marginBottom: 32,
              textDecoration: "none",
              cursor: "pointer",
            }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineMail size={20} color="#6366f1" />
            <span
              style={{
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#f0f4ff",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              najmulhasanshahin@gmail.com
            </span>
          </motion.a>

          {/* Social icons */}
          <motion.div
            variants={staggerContainer}
            style={{ display: "flex", gap: 16, justifyContent: "center" }}
            role="list"
            aria-label="Social media links"
          >
            {SOCIALS.map(({ href, Icon, label, color }, i) => (
              <motion.a
                key={label}
                variants={fadeUpVariant}
                custom={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                role="listitem"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                  background: "rgba(255,255,255,0.03)",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                }}
                whileHover={{
                  y: -2,
                  color,
                  borderColor: "rgba(148,163,184,0.25)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <Icon size={16} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
