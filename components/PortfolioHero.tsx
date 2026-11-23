"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParticlePortrait from "./ParticlePortrait";

const NAME = "SHASHI BHUSHAN";
const ROLE = "Full-Stack Developer & Creative Technologist";
const TAGLINE = "I engineer high-performance web applications, build innovative software,\nand craft digital experiences that people love.";

export default function PortfolioHero() {
  const heroRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLCanvasElement>(null);

  // Background ambient stardust animation (lightweight 60fps)
  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", onResize);

    const stars = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        ctx.fillStyle = `rgba(147, 197, 253, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: -15, duration: 0.6 })
        .from(".hero-portrait-wrap", { opacity: 0, scale: 0.92, duration: 0.9 }, "-=0.3")
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.7 }, "-=0.4")
        .from(".hero-tagline", { opacity: 0, y: 15, duration: 0.6 }, "-=0.3")
        .from(".hero-actions", { opacity: 0, y: 15, duration: 0.5 }, "-=0.2");
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e1628] via-[#090d16] to-[#060810] px-6 py-12 md:py-16 text-white shadow-2xl overflow-hidden mb-12"
    >
      {/* Background stardust canvas */}
      <canvas
        ref={starsRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
      />

      {/* Hero noise texture */}
      <div className="hero-noise pointer-events-none absolute inset-0 z-0" />

      {/* Decorative radial lighting accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top availability badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono tracking-widest text-blue-300 uppercase mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>BASED IN INDIA • AVAILABLE FOR WORK</span>
        </div>

        {/* Hero Portrait - Prominent, Clear, and Beautiful */}
        <div className="hero-portrait-wrap relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-92 mb-8">
          <ParticlePortrait
            src="/shashi-hero.webp"
            alt="Shashi Bhushan Portrait"
            className="w-full h-full"
          />
        </div>

        {/* Name Header */}
        <h1 className="hero-title font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {NAME}
        </h1>

        {/* Role */}
        <p className="hero-subtitle mt-2 text-base sm:text-lg font-medium text-blue-400 tracking-wide">
          {ROLE}
        </p>

        {/* Tagline */}
        <p className="hero-tagline mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-300 whitespace-pre-line">
          {TAGLINE}
        </p>

        {/* Action Buttons */}
        <div className="hero-actions mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </a>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white/90 border border-white/15 font-medium text-sm backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Read Articles</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-purple-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/shashi-bhushan-40aa70360/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-sm transition-all"
          >
            <span>Connect</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

