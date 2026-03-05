"use client";
import { motion } from "framer-motion";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const VIEWPORT = { once: true, margin: "-80px" };

const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database & Tools",
    skills: ["MongoDB", "Git & GitHub", "Netlify", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p variants={fadeUpVariant} className="section-subtitle" style={{ marginBottom: 12 }}>
            Technical skills
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            id="skills-heading"
            className="section-title"
            style={{ marginBottom: 48 }}
          >
            What I work with
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {SKILL_GROUPS.map(({ category, skills }, groupIdx) => (
              <motion.div
                key={category}
                variants={fadeUpVariant}
                custom={groupIdx}
                className="card"
                style={{ padding: "28px 32px" }}
              >
                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#3b82f6,#6366f1)",
                      boxShadow: "0 0 8px rgba(99,102,241,0.5)",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#6366f1",
                    }}
                  >
                    {category}
                  </p>
                </div>

                {/* Skill badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
