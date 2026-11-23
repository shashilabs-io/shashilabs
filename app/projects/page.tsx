import Link from "next/link";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink: string;
  highlight?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Shashi Labs Web Platform",
      category: "Full-Stack / Platform",
      description:
        "Personal engineering laboratory and showcase designed with Next.js 16, React 19, and Tailwind CSS. Features high-performance WebP media delivery, GPU-accelerated particle systems, and dark theme ergonomics.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "GSAP"],
      githubLink: "https://github.com/shashilabs-io",
      liveLink: "https://shashilabs.com",
      highlight: true,
    },
    {
      title: "Autonomous Agent & Workflow Engine",
      category: "AI & Distributed Systems",
      description:
        "Low-latency autonomous orchestration pipeline capable of coordinating multi-agent steps, dynamic tool calling, streaming inference, and execution telemetry with robust safety boundaries.",
      tech: ["Python", "Next.js", "TypeScript", "WebSockets", "Docker"],
      githubLink: "https://github.com/shashilabs-io",
      liveLink: "https://shashilabs.com",
    },
    {
      title: "Cloud Sentinel Edge Proxy",
      category: "Systems & Infrastructure",
      description:
        "High-performance reverse proxy and microservice gateway designed for zero-copy traffic routing, active health probes, automatic circuit-breaking, and live telemetry aggregation.",
      tech: ["Go", "Next.js", "REST APIs", "Tailwind CSS"],
      githubLink: "https://github.com/shashilabs-io",
      liveLink: "https://shashilabs.com",
    },
    {
      title: "Interactive Particle Canvas Engine",
      category: "Creative Coding & Visuals",
      description:
        "GPU-friendly physics-based dot-matrix and particle constellation simulator supporting dynamic repelling physics, spring dampening, and high-DPI retina rendering.",
      tech: ["HTML5 Canvas", "TypeScript", "GSAP", "Vector Math"],
      githubLink: "https://github.com/shashilabs-io",
      liveLink: "https://shashilabs.com",
    },
  ];

  return (
    <div className="px-4 py-8 md:px-8 md:py-12 space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider mb-3">
          <span>PORTFOLIO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Projects &amp; Systems
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl">
          A collection of software architectures, open-source projects, and digital products I have engineered.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, key) => (
          <div
            key={key}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d1322]/80 hover:bg-[#121a30] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wide bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  {item.category}
                </span>
                {item.highlight && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {item.title}
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 hover:text-white border border-white/10 transition-colors"
              >
                <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-600/30"
              >
                <span>Live Demo</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
