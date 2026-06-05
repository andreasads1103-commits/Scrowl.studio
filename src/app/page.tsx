"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RippleBackground } from "@/components/ui/ripple-background";
import { Navbar } from "@/components/ui/navbar";
import { FadeUp } from "@/components/ui/fade-up";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Preloader } from "@/components/ui/preloader";
import styles from "./page.module.css";

// Filtre SVG de distorsion pour l'effet "liquid glass" réel (utilisé via backdrop-filter: url(#container-glass))
function GlassFilter() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.012" numOctaves="1" seed="4" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="42" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="1" />
        </filter>
      </defs>
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-rise");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{
      backgroundColor: "#faf9ff",
      backgroundImage: `
        linear-gradient(rgba(76,29,149,0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(76,29,149,0.045) 1px, transparent 1px),
        radial-gradient(ellipse 75% 55% at 8% 15%,  rgba(216,210,254,0.55) 0%, transparent 65%),
        radial-gradient(ellipse 55% 65% at 92% 10%,  rgba(251,207,232,0.40) 0%, transparent 60%),
        radial-gradient(ellipse 65% 45% at 50% 95%,  rgba(199,210,254,0.35) 0%, transparent 55%),
        radial-gradient(ellipse 80% 80% at 50% 50%,  rgba(245,243,255,0.90) 0%, transparent 100%)
      `,
      backgroundSize: "64px 64px, 64px 64px, auto, auto, auto, auto",
    }}>
      <Preloader />
      <GlassFilter />
      <Navbar />
      <RippleBackground>
        <div
          style={{
            minHeight: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "120px 48px 0px",
            textAlign: "center",
          }}
        >
          <FadeUp delay={0}>
          <h1
            style={{
              fontFamily: "'Heroes', serif",
              fontSize: "clamp(5.5rem, 18vw, 16rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              margin: "0 0 24px",
              background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 45%, #701a75 80%, #831843 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SCROWL
          </h1>
          </FadeUp>

          <FadeUp delay={150}>
          <div
            style={{
              width: "clamp(40px, 6vw, 80px)",
              height: 2,
              margin: "0 0 20px",
              background: "linear-gradient(90deg, #4c1d95, #831843)",
              borderRadius: 2,
              opacity: 0.5,
            }}
          />
          </FadeUp>

          <FadeUp delay={250}>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "clamp(0.8rem, 1.1vw, 1.05rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              lineHeight: 1,
              whiteSpace: "nowrap",
              background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: "0 0 40px",
              opacity: 0.75,
            }}
          >
            Le monteur qui empêche votre audience de scroller pour la concurrence.
          </p>
          </FadeUp>

          <FadeUp delay={380}>
          <div
            style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}
          >
            {/* Ghost — Réalisations */}
            <a
              href="#realisations"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                borderRadius: 9999,
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "clamp(0.72rem, 0.9vw, 0.82rem)",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1.5px solid rgba(76,29,149,0.25)",
                color: "#4c1d95",
                transition: "all 0.25s ease",
                boxShadow: "0 2px 12px rgba(76,29,149,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(245,240,255,0.8)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(76,29,149,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.55)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(76,29,149,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Réalisations
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            {/* Fill — Réserver */}
            <a
              href="https://calendly.com/andreas-ads1103/new-meeting?back=1&month=2026-06"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "13px 32px",
                borderRadius: 9999,
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "clamp(0.72rem, 0.9vw, 0.82rem)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.12)",
                boxShadow: "0 4px 24px rgba(76,29,149,0.30), inset 0 1px 0 rgba(255,255,255,0.12)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(76,29,149,0.45), inset 0 1px 0 rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(76,29,149,0.30), inset 0 1px 0 rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Réserver
            </a>
          </div>
          </FadeUp>

          <FadeUp delay={520}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            {/* Pile d'avatars */}
            <div style={{ display: "flex" }}>
              {[
                { src: "/clients/scsp.png", label: "SCSP" },
                { src: "/clients/co-design.webp", label: "Co" },
                { src: "/clients/client-1.webp", label: "A" },
                { src: "/clients/client-2.png", label: "M" },
              ].map((c, i) => (
                <Avatar
                  key={i}
                  className="h-9 w-9"
                  style={{
                    marginLeft: i === 0 ? 0 : -12,
                    border: "2px solid #faf9ff",
                    boxShadow: "0 2px 8px rgba(76,29,149,0.18)",
                    zIndex: 4 - i,
                    background: "#fff",
                  }}
                >
                  <AvatarImage src={c.src} alt={c.label} style={{ objectFit: "cover" }} />
                  <AvatarFallback style={{ background: "linear-gradient(135deg,#4c1d95,#831843)", color: "#fff" }}>
                    {c.label.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            {/* Texte preuve sociale */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2, textAlign: "left" }}>
              <div style={{ display: "flex", gap: 2, color: "#f59e0b" }} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.78rem", fontWeight: 500, color: "rgba(76,29,149,0.7)", letterSpacing: "0.02em" }}>
                Ils ont décidé de me faire confiance
              </span>
            </div>
          </div>
          </FadeUp>
        </div>
      </RippleBackground>

      {/* ── Section vidéo de présentation ── */}
      <VideoSection />

      {/* ── Section Portfolio ── */}
      <PortfolioSection />

      {/* ── Section Format long (carousel horizontal) ── */}
      <LongFormatSection />

      {/* ── Section Témoignages ── */}
      <TestimonialsSection />

      {/* ── Section Process ── */}
      <ProcessSection />

      {/* ── Section FAQ ── */}
      <FaqSection />

      {/* ── Footer ── */}
      <SiteFooter />
    </main>
  );
}

function SiteFooter() {
  return (
    <footer id="reserver" className={styles.footer}>
      {/* Texte géant en fond — police Heroes (comme le hero) */}
      <span aria-hidden="true" className={styles.footerGiant}>SCROWL</span>

      {/* Contenu central */}
      <div className={styles.footerCenter}>
        <FadeUp delay={0}>
          <h2 className={styles.footerTitle}>Prêt à commencer ?</h2>
        </FadeUp>

        <FadeUp delay={120}>
          <a
            href="https://calendly.com/andreas-ads1103/new-meeting?back=1&month=2026-06"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerCta}
          >
            Démarrer un projet <span aria-hidden="true">↗</span>
          </a>
        </FadeUp>
      </div>

      {/* Barre du bas */}
      <div className={styles.footerBottom}>
        <span className={styles.footerCopy}>© 2026 Scrowl Studio</span>
        <div className={styles.footerLinks}>
          {[
            { label: "Mentions légales", href: "/mentions-legales" },
            { label: "Confidentialité", href: "/confidentialite" },
          ].map(l => (
            <a key={l.href} href={l.href} className={styles.footerLink}>{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function VideoSection() {
  return (
    <section style={{
      position: "relative",
      background: "transparent",
      padding: "0 clamp(24px, 5vw, 80px) 90px",
      marginTop: "-120px",
      overflow: "visible",
      textAlign: "center",
    }}>
      {/* Zone visuelle : texte géant + statue + arc */}
      <div className="reveal-rise" style={{ position: "relative", maxWidth: 1300, margin: "0 auto", height: "clamp(340px, 42vw, 520px)" }}>
        {/* Texte géant PRÉSENTATION (police Heroes) */}
        <span aria-hidden="true" style={{
          position: "absolute",
          left: "50%",
          top: "62%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Heroes', serif",
          fontSize: "clamp(52px, 13.5vw, 200px)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
          color: "rgba(110,70,200,0.16)",
          zIndex: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}>
          PRÉSENTATION
        </span>

        {/* Arc + point */}
        <svg
          viewBox="0 0 1000 260"
          aria-hidden="true"
          style={{ position: "absolute", left: "50%", top: "50%", transform: "translateX(-50%)", width: "min(1120px, 100%)", height: "auto", zIndex: 2, overflow: "visible", maskImage: "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)" }}
        >
          <path d="M0 28 Q 500 300 1000 28" fill="none" stroke="rgba(30,20,60,0.35)" strokeWidth="1.2" />
          <circle cx="500" cy="164" r="11" fill="#4c1d95" />
        </svg>

        {/* Statue (détourée) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/presentation.svg"
          alt="Présentation Scrowl Studio"
          style={{
            position: "absolute",
            left: "50%",
            bottom: "40%",
            transform: "translateX(-50%)",
            width: "clamp(230px, 28vw, 380px)",
            height: "auto",
            zIndex: 0,
            mixBlendMode: "multiply",
            maskImage: "linear-gradient(to bottom, #000 0%, #000 58%, transparent 90%), linear-gradient(to left, transparent 0%, #000 26%)",
            maskComposite: "intersect",
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 58%, transparent 90%), linear-gradient(to left, transparent 0%, #000 26%)",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      {/* Textes */}
      <FadeUp delay={160}>
        <h3 style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#1a1033",
          margin: "0 0 16px",
        }}>
          Montage, Motion Design, Étalonnage
        </h3>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
          lineHeight: 1.7,
          color: "rgba(40,30,70,0.7)",
          maxWidth: 620,
          margin: "0 auto",
        }}>
          Je crée des contenus visuels sur mesure, du branding au storytelling, en passant par les formats courts et immersifs. Chaque projet est conçu pour mettre en valeur votre identité avec une attention particulière portée à la narration et à l'esthétique.
        </p>
      </FadeUp>
    </section>
  );
}

// ─── Portfolio data ────────────────────────────────────────────────────────────
const PORTFOLIO = [
  {
    title: "Cinématiques",
    items: [
      { id: "YOUTUBE_ID_1", label: "Projet 01" },
      { id: "YOUTUBE_ID_2", label: "Projet 02" },
      { id: "YOUTUBE_ID_3", label: "Projet 03" },
      { id: "YOUTUBE_ID_4", label: "Projet 04" },
    ],
  },
  {
    title: "Shorts",
    portrait: true,
    items: [
      { id: "YOUTUBE_SHORT_1", label: "Short 01" },
      { id: "YOUTUBE_SHORT_2", label: "Short 02" },
      { id: "YOUTUBE_SHORT_3", label: "Short 03" },
      { id: "YOUTUBE_SHORT_4", label: "Short 04" },
    ],
  },
  {
    title: "Animation & Motion Design",
    items: [
      { id: "YOUTUBE_ID_5", label: "Motion 01" },
      { id: "YOUTUBE_ID_6", label: "Motion 02" },
      { id: "YOUTUBE_ID_7", label: "Motion 03" },
      { id: "YOUTUBE_ID_8", label: "Motion 04" },
    ],
  },
  {
    title: "Immobilier",
    items: [
      { id: "YOUTUBE_ID_9",  label: "Bien 01" },
      { id: "YOUTUBE_ID_10", label: "Bien 02" },
      { id: "YOUTUBE_ID_11", label: "Bien 03" },
      { id: "YOUTUBE_ID_12", label: "Bien 04" },
    ],
  },
];

function VideoCard({ item, portrait = false }: { item: { id: string; label: string }; portrait?: boolean }) {
  const [open, setOpen] = useState(false);
  const isPlaceholder = item.id.startsWith("YOUTUBE");

  return (
    <>
      <div
        onClick={() => !isPlaceholder && setOpen(true)}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          aspectRatio: portrait ? "9/16" : "16/9",
          background: "linear-gradient(145deg, #1a1730 0%, #0f0c1a 100%)",
          border: "1px solid rgba(76,29,149,0.15)",
          cursor: "pointer",
        }}
        className="portfolio-card"
      >
        {isPlaceholder ? (
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ position:"absolute",top:10,left:10,width:12,height:12,borderTop:"1px solid rgba(255,255,255,0.12)",borderLeft:"1px solid rgba(255,255,255,0.12)" }}/>
            <div style={{ position:"absolute",top:10,right:10,width:12,height:12,borderTop:"1px solid rgba(255,255,255,0.12)",borderRight:"1px solid rgba(255,255,255,0.12)" }}/>
            <div style={{ position:"absolute",bottom:10,left:10,width:12,height:12,borderBottom:"1px solid rgba(255,255,255,0.12)",borderLeft:"1px solid rgba(255,255,255,0.12)" }}/>
            <div style={{ position:"absolute",bottom:10,right:10,width:12,height:12,borderBottom:"1px solid rgba(255,255,255,0.12)",borderRight:"1px solid rgba(255,255,255,0.12)" }}/>
            <svg width="18" height="18" fill="rgba(255,255,255,0.18)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
            alt={item.label}
            style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover" }}
          />
        )}

        {/* Hover overlay */}
        <div className="overlay" style={{
          position:"absolute",inset:0,
          background:"rgba(15,12,26,0.75)",
          display:"flex",alignItems:"center",justifyContent:"center",
          transition:"opacity 0.3s ease",
        }}>
          <div style={{
            width:44,height:44,borderRadius:"50%",
            border:"1px solid rgba(255,255,255,0.2)",
            display:"flex",alignItems:"center",justifyContent:"center",
            background:"rgba(255,255,255,0.06)",
          }}>
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>

        {/* Label */}
        <div style={{
          position:"absolute",bottom:0,left:0,right:0,
          padding:"20px 12px 10px",
          background:"linear-gradient(transparent,rgba(10,8,20,0.85))",
        }}>
          <p style={{ fontFamily:"var(--font-body)",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)" }}>
            {item.label}
          </p>
        </div>
      </div>

      {open && (
        <div onClick={()=>setOpen(false)} style={{ position:"fixed",inset:0,zIndex:200,background:"rgba(10,8,20,0.96)",display:"flex",alignItems:"center",justifyContent:"center" }}>
          <div onClick={e=>e.stopPropagation()} style={{ width:"min(900px,92vw)",aspectRatio:portrait?"9/16":"16/9",maxHeight:"90vh" }}>
            <iframe src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`} style={{ width:"100%",height:"100%",border:"none",borderRadius:8 }} allow="autoplay;encrypted-media" allowFullScreen/>
          </div>
          <button onClick={()=>setOpen(false)} style={{ position:"absolute",top:24,right:32,fontSize:28,color:"rgba(255,255,255,0.4)",background:"none",border:"none",cursor:"pointer" }}>×</button>
        </div>
      )}
    </>
  );
}

const SHORTS = [
  "WRLuaUKAQBY",
  "38u3xLQZhzg",
  "qNEVdO2WIPc",
  "rJGjGgAuvE0",
  "pJxD3CEydME",
];

function ShortsCarousel() {
  return <VideoCarousel ids={SHORTS} vertical />;
}

function VideoCarousel({ ids, vertical = true, cardWidth, edgeFade = "22%", spread, tilt = 16 }: { ids: string[]; vertical?: boolean; cardWidth?: number; edgeFade?: string; spread?: number; tilt?: number }) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(ids.length / 2));
  const [hovered, setHovered] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const n = ids.length;

  const handleNext = useCallback(() => setCurrentIndex(i => (i + 1) % n), [n]);

  useEffect(() => {
    if (hovered || playingId) return;
    const t = setInterval(handleNext, 4000);
    return () => clearInterval(t);
  }, [handleNext, hovered, playingId]);

  // Dimensions selon l'orientation
  const cardW = cardWidth ?? (vertical ? 330 : 600);
  const cardH = vertical ? Math.round(cardW * 16 / 9) : Math.round(cardW * 9 / 16);  // 9:16 ou 16:9
  const containerH = cardH + (vertical ? 130 : 120);
  const txPct = spread ?? (vertical ? 56 : 40);
  const iframeScale = vertical ? 1.5 : 1.32;
  const modalW = vertical ? "min(380px, 92vw)" : "min(900px, 94vw)";
  const modalAR = vertical ? "9/16" : "16/9";

  return (
    <div style={{ paddingBottom: 0 }}>
      <div
        style={{
          position:"relative", width:"100%", height:containerH, display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* 3D carousel with perspective */}
        <div style={{ position:"relative", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", perspective:"1100px" }}>
          {ids.map((id, index) => {
            const offset = index - currentIndex;
            const total = ids.length;
            let pos = (offset + total) % total;
            if (pos > Math.floor(total / 2)) pos = pos - total;
            const abs = Math.abs(pos);
            const isCenter = pos === 0;
            if (abs > 3) return null;
            const scale = 1 - abs * 0.12;
            const tx = pos * txPct;
            const ry = pos * -tilt;
            const blur = abs <= 1 ? 0 : (abs - 1) * 2.5;
            const veil = isCenter ? 0 : Math.min(0.62, 0.22 + (abs - 1) * 0.2);
            const opacity = abs >= 3 ? 0.5 : 1;
            return (
              <div
                key={index}
                onClick={() => {
                  if (!isCenter) { setCurrentIndex(index); return; }
                  if (id) setPlayingId(id);
                }}
                style={{
                  position: "absolute",
                  width: cardW, height: cardH,
                  transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease, filter 0.6s ease",
                  cursor: "pointer",
                  transform: `translateX(${tx}%) scale(${scale}) rotateY(${ry}deg)`,
                  transformStyle: "preserve-3d",
                  zIndex: 10 - abs,
                  opacity,
                  filter: `blur(${blur}px)`,
                  borderRadius: 26,
                  overflow: "hidden",
                  background: "linear-gradient(160deg, #221842 0%, #0d0b18 58%, #160e26 100%)",
                  border: isCenter ? "1px solid rgba(139,92,246,0.5)" : "1px solid rgba(120,60,200,0.14)",
                  pointerEvents: abs > 1 ? "none" : "auto",
                }}
              >
                {/* Vidéo en autoplay muet + boucle, ou placeholder si emplacement vide */}
                {id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&modestbranding=1&rel=0&showinfo=0`}
                    title=""
                    allow="autoplay; encrypted-media"
                    style={{ position:"absolute", top:"50%", left:"50%", width:"100%", height:"100%", transform:`translate(-50%,-50%) scale(${iframeScale})`, border:"none", pointerEvents:"none" }}
                  />
                ) : (
                  <div style={{ position:"absolute",inset:0,opacity:0.05,backgroundImage:"linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",backgroundSize:"22px 22px",pointerEvents:"none" }} />
                )}
                <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"45%",background:"linear-gradient(to top,rgba(10,6,20,0.9),transparent)",pointerEvents:"none" }} />
                {isCenter && <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 55% at 50% 18%,rgba(139,92,246,0.12),transparent)",pointerEvents:"none" }} />}
                <div style={{ position:"absolute",top:0,left:0,right:0,height:"42%",background:"linear-gradient(150deg,rgba(255,255,255,0.07),transparent 70%)",pointerEvents:"none" }} />
                <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <div style={{ width:isCenter?60:42, height:isCenter?60:42, borderRadius:"50%", background:isCenter?"rgba(139,92,246,0.3)":"rgba(0,0,0,0.35)", border:isCenter?"1px solid rgba(255,255,255,0.6)":"1px solid rgba(255,255,255,0.25)", display:"flex",alignItems:"center",justifyContent:"center", boxShadow:isCenter?"0 0 40px rgba(139,92,246,0.5)":"none", transition:"all 0.5s ease", backdropFilter:"blur(2px)" }}>
                    <svg width={isCenter?19:14} height={isCenter?19:14} fill="rgba(255,255,255,0.95)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div style={{ position:"absolute",inset:0,background:`rgba(8,5,18,${veil})`,transition:"background 0.6s ease",pointerEvents:"none" }} />
              </div>
            );
          })}
        </div>

        {/* Bords flous blancs sur les côtés */}
        <div aria-hidden="true" style={{ position:"absolute", top:0, bottom:0, left:0, width:edgeFade, zIndex:15, pointerEvents:"none", background:"linear-gradient(to right, #faf9ff 8%, rgba(250,249,255,0.85) 35%, rgba(250,249,255,0) 100%)", backdropFilter:"blur(3px)", WebkitBackdropFilter:"blur(3px)", maskImage:"linear-gradient(to right, black 30%, transparent 100%)", WebkitMaskImage:"linear-gradient(to right, black 30%, transparent 100%)" }} />
        <div aria-hidden="true" style={{ position:"absolute", top:0, bottom:0, right:0, width:edgeFade, zIndex:15, pointerEvents:"none", background:"linear-gradient(to left, #faf9ff 8%, rgba(250,249,255,0.85) 35%, rgba(250,249,255,0) 100%)", backdropFilter:"blur(3px)", WebkitBackdropFilter:"blur(3px)", maskImage:"linear-gradient(to left, black 30%, transparent 100%)", WebkitMaskImage:"linear-gradient(to left, black 30%, transparent 100%)" }} />
      </div>

      {/* Counter + dots */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:20, marginTop:16 }}>
        <div style={{ position:"relative", overflow:"hidden", width:52, textAlign:"center" }}>
          <AnimatePresence mode="popLayout">
            <motion.span key={currentIndex} initial={{ y:14, opacity:0, filter:"blur(4px)" }} animate={{ y:0, opacity:1, filter:"blur(0px)" }} exit={{ y:-14, opacity:0, filter:"blur(4px)" }} transition={{ duration:0.28, ease:[0.22,1,0.36,1] }} style={{ display:"block", fontFamily:"var(--font-body)", fontSize:11, fontWeight:500, letterSpacing:"0.18em", color:"rgba(76,29,149,0.6)", whiteSpace:"nowrap" }}>
              {String(currentIndex + 1).padStart(2,"0")} <span style={{ opacity:0.35 }}>/ {String(n).padStart(2,"0")}</span>
            </motion.span>
          </AnimatePresence>
        </div>
        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
          {ids.map((_,i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} style={{ width:i===currentIndex?20:5, height:5, borderRadius:9999, background:i===currentIndex?"linear-gradient(90deg,#4c1d95,#831843)":"rgba(76,29,149,0.2)", border:"none", cursor:"pointer", padding:0, transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)" }}/>
          ))}
        </div>
      </div>

      {/* Lecteur vidéo (modal) — rendu via portail pour rester plein écran même si un parent est mis à l'échelle */}
      {mounted && createPortal(
        <AnimatePresence>
          {playingId && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setPlayingId(null)}
              style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(8,5,18,0.82)", backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)", padding:20 }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                transition={{ type:"spring", stiffness:300, damping:28 }}
                onClick={e => e.stopPropagation()}
                style={{ position:"relative", width:modalW, aspectRatio:modalAR, borderRadius:20, overflow:"hidden", boxShadow:"0 30px 80px rgba(0,0,0,0.6)", border:"1px solid rgba(139,92,246,0.4)" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${playingId}?autoplay=1&rel=0&playsinline=1`}
                  title="Vidéo"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:"none" }}
                />
              </motion.div>
              <button onClick={() => setPlayingId(null)} aria-label="Fermer" style={{ position:"absolute", top:24, right:24, width:44, height:44, borderRadius:"50%", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.25)", color:"#fff", fontSize:22, lineHeight:1, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)" }}>×</button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

const LONGS = [
  "4ClqjHUqd0o",
  "fURQn5C1UEw",
  "EGbRcn8mRCw",
  "i0uxVVjAoNM",
  "zsGu9osKdwc",
  "KlYumOWLGBY",
];

function LongFormatSection() {
  return (
    <section style={{ padding: "20px 0 90px", background: "transparent", overflow: "hidden" }}>
      {/* 2 colonnes : texte à gauche, carousel horizontal (réduit, identique) à droite */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: "clamp(16px, 3vw, 56px)",
        maxWidth: 1320,
        margin: "0 auto",
        padding: "0 clamp(24px, 5vw, 80px)",
      }}>
        <FadeUp delay={120}>
          <div className="liquid-glass" style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18, padding: "clamp(28px, 3vw, 40px)", borderRadius: 24 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(139,92,246,0.6)" }}>
              Format long
            </span>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, color: "rgba(22,14,50,0.92)", margin: 0 }}>
              Des vidéos qui racontent votre histoire
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.75, color: "rgba(40,30,70,0.7)", margin: 0, maxWidth: 440 }}>
              Motion design, vidéos VSL, contenus YouTube ou publicités : un montage narratif structuré, un étalonnage soigné et un sound design immersif pour transmettre votre message avec impact.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          {/* Carousel complet mis à l'échelle : rendu identique à l'original, juste réduit */}
          <div style={{ width: 1000 * 0.6, height: 520 * 0.6, overflow: "hidden" }}>
            <div style={{ width: 1000, height: 520, transformOrigin: "top left", transform: "scale(0.6)" }}>
              <VideoCarousel ids={LONGS} vertical={false} />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Maxime Deloche", role: "Gérant de commerce", quote: "J'ai fait appel à son service pour le montage de mes vidéos promotionnelles et le résultat a dépassé mes attentes. Le rendu est professionnel et dynamique." },
  { name: "SCSP Football", role: "Club SCSP St Pourçain Football", quote: "Nous avons fait appel à Scrowl pour la production de notre film commémoratif des 100 ans de notre club. Le travail et la collaboration ont été excellents !" },
  { name: "The Comcept Design Studio", role: "Studio de Branding", quote: "J'ai confié le tournage et le montage de mes vidéos à Scrowl. Le rendu était professionnel, fluide et parfaitement livré." },
];

function TestimonialsSection() {
  return (
    <section id="temoignages" style={{ padding: "80px clamp(24px,5vw,80px) 90px", background: "transparent", scrollMarginTop: 100 }}>
      <FadeUp delay={0}>
        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: 48,
          paddingBottom: "0.12em",
          textAlign: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Témoignages clients
        </h2>
      </FadeUp>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 20,
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {TESTIMONIALS.map((t, i) => (
          <FadeUp key={i} delay={100 + i * 90}>
            <div className={i === 1 ? undefined : "liquid-glass"} style={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              padding: "clamp(24px, 2.5vw, 34px)",
              borderRadius: 22,
              overflow: "hidden",
              ...(i === 1 ? {
                background: "linear-gradient(135deg, #4c1d95 0%, #831843 100%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 20px 50px rgba(131,24,67,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
              } : {}),
            }}>
              <div aria-hidden="true" style={{ position:"absolute", top:0, left:0, right:0, height:"55%", background:"linear-gradient(150deg, rgba(255,255,255,0.4), transparent 70%)", pointerEvents:"none", opacity: i === 1 ? 0.25 : 1 }} />
              {/* Étoiles */}
              <div style={{ position:"relative", display:"flex", gap:3, color: i === 1 ? "#ffd27a" : "#f59e0b" }} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p style={{ position:"relative", fontFamily:"var(--font-body)", fontSize:"0.95rem", lineHeight:1.7, color: i === 1 ? "rgba(255,255,255,0.92)" : "rgba(30,18,60,0.82)", margin:0, fontStyle:"italic" }}>
                {t.quote}
              </p>
              <div style={{ position:"relative", marginTop:"auto", display:"flex", flexDirection:"column", gap:2 }}>
                <span style={{ fontFamily:"var(--font-body)", fontSize:"0.95rem", fontWeight:700, color: i === 1 ? "#fff" : "rgba(22,14,50,0.92)" }}>{t.name}</span>
                <span style={{ fontFamily:"var(--font-body)", fontSize:"0.8rem", color: i === 1 ? "rgba(255,255,255,0.7)" : "rgba(76,29,149,0.55)" }}>{t.role}</span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

const PROCESS_STEPS = [
  { n: "01", title: "Échange & brief", desc: "On commence par une conversation directe : vos objectifs, votre audience, ce que vous voulez que les gens ressentent en regardant la vidéo. Pas de brief, pas de montage." },
  { n: "02", title: "Récupération des rushs", desc: "Vous m'envoyez vos fichiers bruts. Je trie, j'organise, j'identifie ce qui est utilisable — et je vous dis honnêtement si ce qu'on a suffit ou non." },
  { n: "03", title: "Montage & motion", desc: "Sound design, motion design, étalonnage. C'est là que tout se joue — chaque coupe a une raison d'être." },
];

function ProcessSection() {
  return (
    <section id="process" style={{ padding: "60px clamp(24px,5vw,80px) 100px", background: "transparent", scrollMarginTop: 100 }}>
      <FadeUp delay={0}>
        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: 56,
          paddingBottom: "0.12em",
          textAlign: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Process
        </h2>
      </FadeUp>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {PROCESS_STEPS.map((step, i) => (
          <FadeUp key={step.n} delay={120 + i * 90}>
            <div className={i === 1 ? undefined : "liquid-glass"} style={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              padding: "clamp(24px, 2.5vw, 34px)",
              borderRadius: 22,
              background: i === 1 ? "linear-gradient(135deg, #4c1d95 0%, #831843 100%)" : "rgba(255,255,255,0.14)",
              backdropFilter: i === 1 ? "none" : "blur(18px) saturate(160%)",
              WebkitBackdropFilter: i === 1 ? "none" : "blur(18px) saturate(160%)",
              border: i === 1 ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.5)",
              borderBottom: i === 1 ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.2)",
              boxShadow: i === 1 ? "0 20px 50px rgba(131,24,67,0.32), inset 0 1px 0 rgba(255,255,255,0.18)" : "0 10px 40px rgba(120,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
              overflow: "hidden",
            }}>
              <div aria-hidden="true" style={{ position:"absolute", top:0, left:0, right:0, height:"55%", background:"linear-gradient(150deg, rgba(255,255,255,0.4), transparent 70%)", pointerEvents:"none", opacity: i === 1 ? 0.25 : 1 }} />
              <span style={{
                position: "relative",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(2rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                ...(i === 1
                  ? { color: "rgba(255,255,255,0.95)" }
                  : { background: "linear-gradient(135deg, #4c1d95 0%, #831843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", opacity: 0.9 }),
              }}>
                {step.n}
              </span>
              <h3 style={{ position:"relative", fontFamily:"var(--font-body)", fontSize:"1.05rem", fontWeight:700, letterSpacing:"-0.01em", color: i === 1 ? "#fff" : "rgba(26,16,52,0.92)", margin:0 }}>
                {step.title}
              </h3>
              <p style={{ position:"relative", fontFamily:"var(--font-body)", fontSize:"0.85rem", lineHeight:1.65, color: i === 1 ? "rgba(255,255,255,0.82)" : "rgba(40,30,70,0.7)", margin:0 }}>
                {step.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Comment concevez-vous mes vidéos ?",
    a: "Je conçois mes vidéos selon un principe simple : la stratégie avant la technique. Avant notre première rencontre, je vous envoie un document de prise de contact afin de comprendre votre activité, vos objectifs et votre positionnement. Pendant ce temps, je réalise déjà un travail d'analyse : audit de votre communication, étude de votre marché et définition de votre persona client. Lors de notre rendez-vous, je clarifie avec vous votre audience, vos objectifs et vos canaux de diffusion, puis je vous propose une direction narrative précise comprenant moodboard, storyboard et script, afin que vous sachiez exactement ce qui sera filmé et dans quel but. Une fois cette proposition validée, je planifie le tournage en veillant à ce que chaque plan serve le message et le storytelling, et pas uniquement l'esthétique. La postproduction vient ensuite structurer l'ensemble avec un montage narratif clair, l'étalonnage, le mixage sonore et, si nécessaire, des effets visuels. Le résultat : un film prêt à être diffusé, accompagné de formats adaptés à vos différents canaux.",
  },
  {
    q: "Qu'est-ce qui me différencie vraiment des autres prestataires ?",
    a: "Je ne fais pas juste des films d'entreprise ou des pubs : je crée des vidéos qui servent vraiment vos objectifs. Chaque projet commence par comprendre qui vous êtes, ce que vous voulez atteindre et à qui vous vous adressez. Ensuite, tout est pensé pour raconter votre histoire de manière claire et stratégique, du tournage à la postproduction, en faisant en sorte que chaque plan ait un sens. Le résultat, ce n'est pas juste un joli film : c'est un outil de communication réutilisable, qui met en valeur vos équipes, prolonge la portée de votre marque et génère un vrai impact — plus de visibilité, d'engagement et de résultats concrets auprès de vos clients, partenaires ou investisseurs.",
  },
  {
    q: "Est-il possible de demander des modifications après le montage ?",
    a: "Chaque projet inclut un nombre défini de révisions pour ajuster le montage selon vos retours. Je travaille jusqu'à ce que vous soyez entièrement satisfait du résultat final.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "60px clamp(24px,5vw,80px) 40px", background: "transparent", scrollMarginTop: 100 }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: "clamp(32px, 5vw, 72px)",
        alignItems: "stretch",
      }}>
        {/* Colonne droite — texte + FAQ en dessous */}
        <FadeUp delay={0}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3/4",
            minHeight: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/presentation.svg"
              alt="FAQ — Scrowl Studio"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 24px 50px rgba(76,29,149,0.25))",
                maskImage: "linear-gradient(to bottom, #000 60%, transparent 96%), linear-gradient(to left, transparent 2%, #000 26%)",
                maskComposite: "intersect",
                WebkitMaskImage: "linear-gradient(to bottom, #000 60%, transparent 96%), linear-gradient(to left, transparent 2%, #000 26%)",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
        </FadeUp>

        {/* Colonne gauche — texte + FAQ en dessous */}
        <div style={{ order: -1, display: "flex", flexDirection: "column", gap: 28 }}>
          <h2 style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            margin: 0,
            paddingBottom: "0.12em",
            background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Les questions qu'on me pose souvent.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <FadeUp key={i} delay={100 + i * 80}>
              <div className="liquid-glass" style={{
                borderRadius: 20,
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
              }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px clamp(20px,3vw,28px)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "rgba(26,16,52,0.92)",
                  }}
                >
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(76,29,149,0.1)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4c1d95" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        margin: 0,
                        padding: "0 clamp(20px,3vw,28px) 22px",
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                        lineHeight: 1.75,
                        color: "rgba(40,30,70,0.78)",
                      }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          );
        })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="realisations" style={{ padding: "40px 0 0", background: "transparent", overflow: "hidden", scrollMarginTop: 100 }}>

      <FadeUp delay={0}>
        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: 56,
          paddingLeft: "clamp(48px, 10vw, 160px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
          paddingBottom: "0.12em",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Réalisations — Format court &amp; Format long
        </h2>
      </FadeUp>

      {/* 2 colonnes : carousel (réduit, identique) à gauche, texte à droite */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "center",
        gap: "clamp(16px, 3vw, 56px)",
        maxWidth: 1320,
        margin: "0 auto",
        padding: "0 clamp(24px, 5vw, 80px)",
      }}>
        <FadeUp delay={120}>
          {/* Carousel complet mis à l'échelle : rendu identique à l'original, juste réduit */}
          <div style={{ width: 760 * 0.62, height: 760 * 0.62, overflow: "hidden" }}>
            <div style={{ width: 760, height: 760, transformOrigin: "top left", transform: "scale(0.62)" }}>
              <VideoCarousel ids={SHORTS} vertical />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="liquid-glass" style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18, padding: "clamp(28px, 3vw, 40px)", borderRadius: 24 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(139,92,246,0.6)" }}>
              Format court
            </span>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, color: "rgba(22,14,50,0.92)", margin: 0 }}>
              Des formats courts qui captent l'attention
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.75, color: "rgba(40,30,70,0.7)", margin: 0, maxWidth: 440 }}>
              Reels, Shorts et TikToks pensés pour le scroll : un montage rythmé, un hook dès la première seconde et un sound design qui retient. Chaque vidéo est calibrée pour votre audience et votre plateforme.
            </p>
          </div>
        </FadeUp>
      </div>

    </section>
  );
}
