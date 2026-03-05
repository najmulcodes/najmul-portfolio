export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "32px 20px",
        textAlign: "center",
      }}
      role="contentinfo"
    >
      {/* Accent line */}
      <div
        aria-hidden="true"
        style={{
          width: 40,
          height: 2,
          background: "linear-gradient(135deg,#3b82f6,#6366f1)",
          borderRadius: 999,
          margin: "0 auto 20px",
        }}
      />

      <p
        style={{
          fontSize: "0.8125rem",
          color: "var(--text-muted)",
          letterSpacing: "0.01em",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--text-secondary)" }}>Najmul Hasan</span>
        {" "}— Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
