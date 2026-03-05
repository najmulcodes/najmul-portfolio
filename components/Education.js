"use client";
import { motion } from "framer-motion";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const VIEWPORT = { once: true, margin: "-80px" };

const EDUCATION = [
  {
    degree: "BBA — Accounting & Finance",
    institution: "City College",
    period: "2019 – 2023",
    detail: "CGPA: 3.04 / 4.00",
    highlight: true,
  },
  {
    degree: "HSC — Business Studies",
    institution: "South East Degree College",
    period: "2013 – 2015",
    detail: null,
  },
  {
    degree: "SSC — Business Studies",
    institution: "FazilPur Farhad Nagar Zinnah High School",
    period: "2007 – 2013",
    detail: null,
  },
  {
    degree: "Certification — Complete Web Development",
    institution: "Programming Hero",
    period: "Batch 12",
    detail: "Full Stack Track",
    highlight: true,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-heading"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p variants={fadeUpVariant} className="section-subtitle" style={{ marginBottom: 12 }}>
            Education
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            id="education-heading"
            className="section-title"
            style={{ marginBottom: 48 }}
          >
            Academic background
          </motion.h2>

          {/* Timeline */}
          <div style={{ maxWidth: 640, position: "relative" }}>
            {EDUCATION.map(({ degree, institution, period, detail, highlight }, i) => (
              <motion.div
                key={degree}
                variants={fadeUpVariant}
                custom={i}
                className="timeline-item"
                style={{ marginBottom: 32 }}
              >
                <div
                  className="card"
                  style={{
                    padding: "22px 28px",
                    borderColor: highlight ? "rgba(99,102,241,0.2)" : undefined,
                  }}
                >
                  {/* Top row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "#f0f4ff",
                        letterSpacing: "-0.01em",
                        margin: 0,
                      }}
                    >
                      {degree}
                    </h3>

                    <span
                      className="mono"
                      style={{
                        color: "#6366f1",
                        fontSize: "0.75rem",
                        padding: "2px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(99,102,241,0.2)",
                        background: "rgba(99,102,241,0.06)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {period}
                    </span>
                  </div>

                  {/* Institution */}
                  <p className="body-sm" style={{ marginBottom: detail ? 10 : 0 }}>
                    {institution}
                  </p>

                  {/* Detail badge */}
                  {detail && (
                    <span className="badge" style={{ marginTop: 4 }}>
                      {detail}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
