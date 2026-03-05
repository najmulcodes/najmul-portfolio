"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about",      label: "About"    },
  { href: "#skills",     label: "Skills"   },
  { href: "#education",  label: "Education"},
  { href: "#experience", label: "Experience"},
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact"  },
];

export default function Navbar() {
  const [active, setActive]       = useState("");
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isActive = (href) => href === `#${active}`;

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(8,14,26,0.92)"
          : "rgba(8,14,26,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(148,163,184,0.1)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 20px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: "1.0625rem",
            color: "#f0f4ff",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
          aria-label="Najmul Hasan — home"
        >
          Najmul{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#3b82f6,#6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hasan
          </span>
        </a>

        {/* Desktop nav */}
        <ul
          role="list"
          style={{
            display: "flex",
            gap: "6px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                style={{
                  display: "block",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "0.8125rem",
                  fontWeight: isActive(href) ? 600 : 400,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  color: isActive(href) ? "#f0f4ff" : "#94a3b8",
                  background: isActive(href)
                    ? "rgba(99,102,241,0.12)"
                    : "transparent",
                  border: isActive(href)
                    ? "1px solid rgba(99,102,241,0.25)"
                    : "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(href)) {
                    e.currentTarget.style.color = "#f0f4ff";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(href)) {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#94a3b8",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", borderRadius: 2, transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", borderRadius: 2, transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", borderRadius: 2, transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(8,14,26,0.98)",
            borderTop: "1px solid rgba(148,163,184,0.08)",
            padding: "12px 20px 20px",
          }}
          className="mobile-menu"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: "0.9375rem",
                fontWeight: isActive(href) ? 600 : 400,
                color: isActive(href) ? "#f0f4ff" : "#94a3b8",
                textDecoration: "none",
                borderBottom: "1px solid rgba(148,163,184,0.06)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
