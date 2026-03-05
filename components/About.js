"use client";
import { motion } from "framer-motion";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const VIEWPORT = { once: true, margin: "-80px" };

const HIGHLIGHTS = [
  { value: "3+",  label: "Years Experience"   },
  { value: "10+", label: "Projects Built"     },
  { value: "3",   label: "Tech Stacks"        },
];

export default function About() {
  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Section label */}
          <motion.p variants={fadeUpVariant} className="section-subtitle" style={{ marginBottom: 12 }}>
            About me
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            id="about-heading"
            className="section-title"
            style={{ marginBottom: 40, maxWidth: 480 }}
          >
            Background &amp; motivation
          </motion.h2>

          {/* Main card */}
          <motion.div
            variants={fadeUpVariant}
            className="card"
            style={{
              padding: "36px 40px",
              borderLeft: "3px solid",
              borderImage: "linear-gradient(180deg,#3b82f6,#6366f1) 1",
              marginBottom: 32,
            }}
          >
            <p className="body-lg" style={{ marginBottom: 20 }}>
              I hold a <strong style={{ color: "#f0f4ff", fontWeight: 600 }}>Bachelor of Business Administration
              in Accounting &amp; Finance</strong>, and have worked across data operations and IT
              support — fields that sharpened my analytical thinking and problem-solving mindset.
            </p>
            <p className="body-lg" style={{ marginBottom: 0 }}>
              I transitioned into full-stack web development to build structured, scalable
              systems. I work with <strong style={{ color: "#f0f4ff", fontWeight: 600 }}>React,
              Node.js and MongoDB</strong> to craft clean applications that solve real problems.
            </p>
          </motion.div>

          {/* Highlight stats */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 16,
            }}
          >
            {HIGHLIGHTS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUpVariant}
                custom={i}
                className="card"
                style={{ padding: "24px 28px", textAlign: "center" }}
              >
                <p
                  className="gradient-text"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    marginBottom: 4,
                  }}
                >
                  {value}
                </p>
                <p className="body-sm">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
