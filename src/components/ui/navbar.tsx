"use client";

import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: "fit-content",
        maxWidth: "calc(100vw - 32px)",
      }}
    >
      {/* Liquid glass pill */}
      <nav
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 12px 10px 22px",
          gap: 6,
          borderRadius: "9999px",
          /* Glass layers */
          background: scrolled
            ? "rgba(255, 255, 255, 0.18)"
            : "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          /* Liquid glass borders & shadows */
          border: "1px solid rgba(255, 255, 255, 0.45)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(120, 80, 200, 0.15), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
            : "0 4px 24px rgba(120, 80, 200, 0.10), 0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
          transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Logo — left → haut de page */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "'Heroes', serif",
            fontSize: 18,
            color: "#1a0a2e",
            letterSpacing: "0.04em",
            flexShrink: 0,
            userSelect: "none",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Scrowl
        </a>

        {/* Separator */}
        <div style={{ width: 1, height: 18, background: "rgba(30,20,60,0.12)", flexShrink: 0 }} />

        {/* Links — center */}
        <div style={{ display: "flex", alignItems: "center", gap: 2, padding: "0 8px" }}>
          {[
            { label: "Réalisations", href: "#realisations" },
            { label: "Témoignages", href: "#temoignages" },
            { label: "Process", href: "#process" },
            { label: "FAQ", href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                padding: "7px 16px",
                borderRadius: "9999px",
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(30, 20, 60, 0.75)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.35)";
                e.currentTarget.style.color = "rgba(30, 20, 60, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(30, 20, 60, 0.75)";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Separator */}
        <div style={{ width: 1, height: 18, background: "rgba(30,20,60,0.12)", flexShrink: 0 }} />

        {/* CTA */}
        <a
          href="https://calendly.com/andreas-ads1103/new-meeting?back=1&month=2026-06"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "9px 22px",
            borderRadius: "9999px",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "0.02em",
            background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
            border: "1.5px solid rgba(255,255,255,0.12)",
            boxShadow: "0 4px 24px rgba(76,29,149,0.30), inset 0 1px 0 rgba(255,255,255,0.12)",
            transition: "all 0.25s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(76,29,149,0.45), inset 0 1px 0 rgba(255,255,255,0.15)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(76,29,149,0.30), inset 0 1px 0 rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Réserver
        </a>
      </nav>
    </div>
  );
};
