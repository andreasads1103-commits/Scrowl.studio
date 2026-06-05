"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // Verrouille le scroll pendant le chargement
  useEffect(() => {
    if (done) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [done]);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const DURATION = 1700; // progression visuelle
    let fontsReady = false;
    (document.fonts?.ready ?? Promise.resolve()).then(() => { fontsReady = true; });

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // easing easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      // bloque à 96% tant que les polices ne sont pas prêtes
      const cap = fontsReady ? 100 : 96;
      setProgress(Math.min(cap, Math.round(eased * 100)));
      if (t >= 1 && fontsReady) {
        setTimeout(() => setDone(true), 380);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
            overflow: "hidden",
            backgroundColor: "#faf9ff",
            backgroundImage: `
              linear-gradient(rgba(76,29,149,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76,29,149,0.05) 1px, transparent 1px),
              radial-gradient(ellipse 70% 60% at 50% 45%, rgba(216,210,254,0.55) 0%, transparent 70%)
            `,
            backgroundSize: "60px 60px, 60px 60px, auto",
          }}
        >
          {/* halo doux */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "50%", top: "44%", transform: "translate(-50%,-50%)",
            width: "70vw", height: "50vh", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.16), rgba(190,24,93,0.08) 45%, transparent 70%)",
            filter: "blur(70px)", pointerEvents: "none",
          }} />

          {/* Wordmark SCROWL avec révélation par balayage vertical */}
          <div style={{ position: "relative", overflow: "hidden", padding: "0 2vw" }}>
            <motion.h1
              initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Heroes', serif",
                fontSize: "clamp(3.5rem, 16vw, 13rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.01em",
                margin: 0,
                background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 45%, #701a75 80%, #831843 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                zIndex: 1,
              }}
            >
              SCROWL
            </motion.h1>
            {/* reflet glissant */}
            <motion.div
              aria-hidden="true"
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatDelay: 0.6 }}
              style={{
                position: "absolute", top: 0, bottom: 0, left: 0, width: "40%",
                background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.55), transparent)",
                mixBlendMode: "overlay", pointerEvents: "none", zIndex: 2,
              }}
            />
          </div>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.62rem, 1vw, 0.78rem)",
              fontWeight: 600,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "rgba(76,29,149,0.55)",
              margin: 0,
              paddingLeft: "0.42em",
            }}
          >
            Studio · Montage vidéo
          </motion.p>

          {/* Barre de progression + compteur */}
          <div style={{ position: "relative", width: "min(320px, 64vw)", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ height: 2, width: "100%", background: "rgba(76,29,149,0.12)", borderRadius: 9999, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #4c1d95, #831843)",
                borderRadius: 9999,
                transition: "width 0.15s linear",
                boxShadow: "0 0 12px rgba(131,24,67,0.4)",
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: "0.1em", color: "rgba(76,29,149,0.5)" }}>
              <span>CHARGEMENT</span>
              <span>{String(progress).padStart(3, "0")}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
