import PortfolioHero from "@/components/PortfolioHero";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: "shashilabs",
    title: "Shashi Labs Web Platform",
    tag: "Flagship / Full-Stack",
    description:
      "A high-performance digital laboratory and developer platform built with Next.js 16, React 19, and Tailwind CSS. Features GPU-optimized particle canvases, responsive layouts, and sub-second load times.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "GSAP"],
    githubLink: "https://github.com/shashilabs-io",
    liveLink: "https://shashilabs.com",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    id: "ai-orchestrator",
    title: "Autonomous Agent & Workflow Engine",
    tag: "AI & Distributed Systems",
    description:
      "Lightweight orchestration framework designed for multi-agent workflows, streaming tool execution, and dynamic prompt scheduling with built-in guardrails and telemetry.",
    tech: ["Python", "Next.js", "TypeScript", "WebSockets", "Docker"],
    githubLink: "https://github.com/shashilabs-io",
    liveLink: "/projects",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  {
    id: "distributed-proxy",
    title: "Cloud Sentinel & Edge Proxy",
    tag: "Systems & Networking",
    description:
      "A distributed reverse proxy and traffic router designed for ultra-low latency routing, automated circuit-breaking, and live telemetry aggregation across microservices.",
    tech: ["Go", "Next.js", "REST APIs", "Tailwind CSS"],
    githubLink: "https://github.com/shashilabs-io",
    liveLink: "/projects",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
];

const featuredPosts = [
  {
    date: "Sep 07, 2026",
    readTime: "6 min read",
    category: "Architecture & Systems",
    title: "What if Stripe could work the way your business does?",
    description:
      "Exploring how programmable financial pipelines and customized billing state machines can adapt dynamically to complex modern platforms.",
    slug: "stripe-for-your-business",
  },
  {
    date: "Aug 28, 2026",
    readTime: "4 min read",
    category: "AI Engineering",
    title: "AI didn't write our SDK. It changed how we built it.",
    description:
      "How agentic verification loops, type synthesis, and developer ergonomics transformed the way we architect developer tooling.",
    slug: "ai-and-sdk-development",
  },
  {
    date: "Aug 26, 2026",
    readTime: "8 min read",
    category: "Distributed Proxies",
    title: "Building a data plane from scratch: high-performance distributed proxy",
    description:
      "Deep dive into zero-copy I/O, memory pooling, and achieving sub-millisecond p99 latencies in modern distributed systems.",
    slug: "building-a-data-plane",
  },
  {
    date: "Aug 07, 2026",
    readTime: "5 min read",
    category: "Autonomous Agents",
    title: "Agentic payments for marketplaces: How a smart fridge can shop safely",
    description:
      "Constrained cryptographic budgets, intent verification, and security boundaries for machine-to-machine commerce.",
    slug: "agentic-payments",
  },
];

export default function Home() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-10 space-y-16">
      {/* Hero Section */}
      <PortfolioHero />

      {/* About & Bio Section */}
      <section className="relative rounded-3xl border border-white/10 bg-[#0d1322]/80 backdrop-blur-md p-6 md:p-10 shadow-xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider">
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Shashi Bhushan
              </span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              I am an enthusiast for web development, programming, and building
              innovative digital solutions. I love crafting modern, intuitive
              websites and resilient software systems that solve real problems.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              When I am not coding, you can find me playing chess, reading books on
              science and technology, or practicing the acoustic guitar — an
              inspiring hobby sparked by one of my closest friends.
            </p>

            {/* Core Tech Skills */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-3">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 16",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Python",
                  "GSAP Animations",
                  "REST & GraphQL",
                  "Git & GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-blue-400/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links & Connect Card */}
          <div className="w-full lg:w-72 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">
              Connect With Me
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Find my work on GitHub, connect professionally on LinkedIn, or say hi on social media.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="https://www.linkedin.com/in/shashi-bhushan-40aa70360/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-xs font-medium text-gray-300 hover:text-white transition-all group"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </Link>

              <Link
                href="https://github.com/shashilabs-io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-gray-700/30 border border-white/10 hover:border-white/30 text-xs font-medium text-gray-300 hover:text-white transition-all group"
              >
                <img src="/github.svg" alt="GitHub" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </Link>

              <Link
                href="https://twitter.com/shashibhushan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400/40 text-xs font-medium text-gray-300 hover:text-white transition-all group"
              >
                <img src="/twitter.svg" alt="Twitter" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Twitter</span>
              </Link>

              <Link
                href="https://www.instagram.com/shashi.sh_01/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/40 text-xs font-medium text-gray-300 hover:text-white transition-all group"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider mb-2">
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Production systems, web platforms, and open-source explorations.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>View All Projects</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d1322]/80 hover:bg-[#121a30] p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wide border ${project.badgeColor}`}
                  >
                    {project.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
                  <span>Source</span>
                </a>

                <Link
                  href={project.liveLink}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-medium transition-all"
                >
                  <span>Live Demo</span>
                  <span className="text-xs">↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-wider mb-2">
              <span>WRITING & INSIGHTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Latest Blog Posts
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Articles on modern architecture, web engineering, and developer tooling.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>Explore All Posts</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href="/blog"
              className="flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-[#0d1322]/80 hover:bg-[#121a30] transition-all duration-300 hover:border-purple-500/30 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span className="text-purple-400 font-medium">{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>{post.readTime}</span>
                <span className="font-medium text-purple-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read article <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer CTA / Contact Banner */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-[#0d1322] p-8 md:p-12 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Have a project in mind, an opportunity, or just want to discuss code and chess? My inbox is always open.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/shashi-bhushan-40aa70360/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              Reach Out on LinkedIn
            </a>
            <a
              href="https://github.com/shashilabs-io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-medium text-sm backdrop-blur-md transition-all hover:scale-105"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
