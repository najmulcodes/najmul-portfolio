"use client";
import { motion } from "framer-motion";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const VIEWPORT = { once: true, margin: "-80px" };

const EXPERIENCE = [
  {
    role: "Data Entry Specialist",
    company: "Nation IT Limited",
    period: "2023 – Present",
    current: true,
    description:
      "Managing structured data operations, maintaining records and ensuring data accuracy across business workflows.",
  },
  {
    role: "Computer Operator",
    company: "IT Solution Feni",
    period: "2015 – 2017",
    current: false,
    description:
      "Provided IT support and computer operations, handling technical troubleshooting and system maintenance.",
  },
  {
    role: "Cashier",
    company: "Alkhimah Allraqiyat Restaurant",
    period: "Saudi Arabia",
    current: false,
    description:
      "Managed point-of-sale transactions, customer service, and daily cash reconciliation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p variants={fadeUpVariant} className="section-subtitle" style={{ marginBottom: 12 }}>
            Experience
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            id="experience-heading"
            className="section-title"
            style={{ marginBottom: 48 }}
          >
            Professional history
          </motion.h2>

          <div style={{ maxWidth: 640, position: "relative" }}>
            {EXPERIENCE.map(({ role, company, period, current, description }, i) => (
              <motion.div
                key={`${role}-${company}`}
                variants={fadeUpVariant}
                custom={i}
                className="timeline-item"
                style={{ marginBottom: 32 }}
              >
                <div className="card" style={{ padding: "22px 28px" }}>
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
                    <div>
                      <h3
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: 600,
                          color: "#f0f4ff",
                          letterSpacing: "-0.01em",
                          margin: "0 0 2px",
                        }}
                      >
                        {role}
                      </h3>
                      <p
                        className="body-sm"
                        style={{ margin: 0, fontSize: "0.8125rem" }}
                      >
                        {company}
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
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
                      {current && (
                        <span
                          style={{
                            fontSize: "0.6875rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#22c55e",
                            padding: "2px 8px",
                            borderRadius: 999,
                            background: "rgba(34,197,94,0.08)",
                            border: "1px solid rgba(34,197,94,0.2)",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body-sm" style={{ marginTop: 12, marginBottom: 0 }}>
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
