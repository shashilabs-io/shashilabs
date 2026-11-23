"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ParticlePortraitProps {
  src: string;
  className?: string;
  alt?: string;
}

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
};

export default function ParticlePortrait({
  src,
  className = "",
  alt = "Shashi Bhushan",
}: ParticlePortraitProps) {
  const [particleMode, setParticleMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!particleMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let particles: Particle[] = [];
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      // Sample grid points for ultra-fast 60 FPS computation
      const sampleW = 75;
      const sampleH = Math.round((sampleW * img.naturalHeight) / img.naturalWidth);
      const offscreen = document.createElement("canvas");
      offscreen.width = sampleW;
      offscreen.height = sampleH;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, sampleW, sampleH);
      const imgData = offCtx.getImageData(0, 0, sampleW, sampleH).data;

      particles = [];
      const scaleX = w / sampleW;
      const scaleY = h / sampleH;

      for (let y = 0; y < sampleH; y += 1) {
        for (let x = 0; x < sampleW; x += 1) {
          const idx = (y * sampleW + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          const a = imgData[idx + 3];

          if (a < 20) continue;
          const brightness = (r + g + b) / 3;
          // Filter far corners to emphasize subject portrait
          if (brightness > 242 && Math.abs(r - g) < 10 && Math.abs(g - b) < 10) continue;

          const posX = x * scaleX;
          const posY = y * scaleY;

          particles.push({
            x: posX,
            y: posY,
            originX: posX,
            originY: posY,
            vx: 0,
            vy: 0,
            color: `rgba(${r},${g},${b},0.92)`,
            size: 1.8 + (1 - brightness / 255) * 1.5,
          });
        }
      }

      const animate = () => {
        ctx.clearRect(0, 0, w, h);
        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Mouse repel physics
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 70 && dist > 0) {
              const force = (70 - dist) / 70;
              p.vx -= (dx / dist) * force * 5;
              p.vy -= (dy / dist) * force * 5;
            }
          }

          // Spring return to origin
          p.vx += (p.originX - p.x) * 0.08;
          p.vy += (p.originY - p.y) * 0.08;

          // Friction dampening
          p.vx *= 0.82;
          p.vy *= 0.82;

          p.x += p.vx;
          p.y += p.vy;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        rafId = requestAnimationFrame(animate);
      };

      animate();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [particleMode, src]);

  return (
    <div className={`relative group ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-purple-600/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Portrait card frame */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-slate-950/80 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.01]">
        
        {/* Crystal Clear HD Portrait Image */}
        <div className={`relative w-full h-full transition-opacity duration-500 ${particleMode ? "opacity-20" : "opacity-100"}`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
            priority
            quality={95}
            className={`object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? "blur-0" : "blur-sm"
            }`}
            onLoad={() => setIsLoaded(true)}
          />

          {/* Elegant subtle gradient overlay at bottom for depth */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent pointer-events-none" />
        </div>

        {/* Dynamic Interactive Particle Canvas Overlay */}
        {particleMode && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-20 cursor-crosshair"
          />
        )}

        {/* Top Floating Badge: Mode Toggle */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setParticleMode(!particleMode)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide bg-black/60 hover:bg-black/90 text-white/90 border border-white/20 backdrop-blur-md transition-all shadow-lg active:scale-95"
            title="Toggle between Crisp Photo and Interactive Particle View"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${particleMode ? "bg-cyan-400 animate-ping" : "bg-emerald-400"}`} />
            <span>{particleMode ? "FX: Particle" : "FX: HD Photo"}</span>
          </button>
        </div>

        {/* Bottom Floating Status Tag */}
        <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between text-xs text-white/90 px-3 py-2 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-xs tracking-wide">Shashi Bhushan</span>
          </div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">Creator</span>
        </div>
      </div>
    </div>
  );
}
