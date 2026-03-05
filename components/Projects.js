"use client";
import { motion } from "framer-motion";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const VIEWPORT = { once: true, margin: "-80px" };
import { FiExternalLink, FiGithub } from "react-icons/fi";

const PROJECTS = [
  {
    name: "ClubSphere",
    tagline: "Membership & Event Management System",
    description:
      "A full-stack application for local clubs to manage members, events and admin workflows. Features role-based dashboards, JWT-protected routes and a complete membership approval flow.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    live: "https://clubsphere-client1.netlify.app/",
    github: "https://github.com/Shariarx6T9/clubsphere-client",
    featured: true,
  },
  {
    name: "The Book Heaven",
    tagline: "Online Book Platform",
    description:
      "A dynamic book browsing and management platform. Users can explore, add, edit and delete books via a REST API with real-time state synchronisation.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://bookhub-heaven.surge.sh",
    github: "https://github.com/Shariarx6T9/bookhub-client",
    featured: false,
  },
  {
    name: "GreenNest",
    tagline: "Indoor Plant Care & Store",
    description:
      "A responsive plant care and store-inspired web app for plant enthusiasts. Emphasises clean UI design, interactive components and responsive layouts across all devices.",
    stack: ["React", "Tailwind CSS", "Netlify"],
    live: "https://neon-cendol-639b69.netlify.app",
    github:
      "https://github.com/Shariarx6T9/GreenNest---Indoor-Plant-Care-and-Store",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
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
            Selected work
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            id="projects-heading"
            className="section-title"
            style={{ marginBottom: 48 }}
          >
            Projects
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PROJECTS.map(
              ({ name, tagline, description, stack, live, github, featured }, i) => (
                <motion.article
                  key={name}
                  variants={fadeUpVariant}
                  custom={i}
                  className="card"
                  aria-label={`Project: ${name}`}
                  style={{
                    padding: "32px 36px",
                    borderColor: featured ? "rgba(99,102,241,0.2)" : undefined,
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <h3
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: 700,
                            color: "#f0f4ff",
                            letterSpacing: "-0.02em",
                            margin: 0,
                          }}
                        >
                          {name}
                        </h3>
                        {featured && (
                          <span className="badge" style={{ fontSize: "0.6875rem", letterSpacing: "0.08em" }}>
                            Featured
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: "0.8125rem",
                          color: "#6366f1",
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {tagline}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        aria-label={`View ${name} live`}
                        style={{ padding: "7px 16px", fontSize: "0.8125rem" }}
                      >
                        Live <FiExternalLink size={13} />
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        aria-label={`${name} GitHub repository`}
                        style={{ padding: "6px 14px", fontSize: "0.8125rem" }}
                      >
                        <FiGithub size={14} /> Code
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body-sm" style={{ marginBottom: 20, maxWidth: 680 }}>
                    {description}
                  </p>

                  {/* Tech stack */}
                  <div
                    role="list"
                    aria-label="Technologies used"
                    style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                  >
                    {stack.map((tech) => (
                      <span key={tech} className="badge" role="listitem">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
