import Link from "next/link";

const posts = [
  { date: "2026. 09. 07", readTime: "6 min read", category: "Architecture & Systems", title: "What if Stripe could work the way your business does?", slug: "stripe-for-your-business" },
  { date: "2026. 08. 28", readTime: "4 min read", category: "AI Engineering", title: "AI didn't write our SDK. It changed how we built it.", slug: "ai-and-sdk-development" },
  { date: "2026. 08. 26", readTime: "8 min read", category: "Distributed Proxies", title: "Building a data plane from scratch: Stripe's own high-performance distributed proxy", slug: "building-a-data-plane" },
  { date: "2026. 08. 14", readTime: "5 min read", category: "Payment Systems", title: "Reading the signals: Helping your AI-built payment integration understand business intent", slug: "reading-the-signals" },
  { date: "2026. 08. 10", readTime: "7 min read", category: "Billing Engineering", title: "From charging a blended rate to IC++: pass network costs to your connected accounts", slug: "passing-network-costs" },
  { date: "2026. 08. 07", readTime: "5 min read", category: "Autonomous Commerce", title: "Agentic payments for marketplaces: How a smart fridge can shop safely", slug: "agentic-payments" },
  { date: "2026. 07. 30", readTime: "6 min read", category: "Knowledge AI", title: "Meet Stripe's Knowledge AI Platform", slug: "knowledge-ai-platform" },
  { date: "2026. 07. 16", readTime: "9 min read", category: "Database Reliability", title: "How Stripe uses graph search and state machines to auto-remediate a global database", slug: "graph-search-and-state-machines" },
  { date: "2026. 07. 02", readTime: "6 min read", category: "Fintech Compliance", title: "Keeping funds where they belong: Implementing fund segregation in Stripe Connect", slug: "fund-segregation" },
];

export default function Blog() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-12 text-[#c8d0db]">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-wider mb-3">
            <span>PUBLICATIONS &amp; WRITING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Insights &amp; Articles
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Thoughts on distributed infrastructure, developer developer tooling, AI pipelines, and platform design.
          </p>
        </div>

        {/* Posts Table Header */}
        <div className="grid grid-cols-[7.5rem_minmax(0,1fr)_1.25rem] items-center border-b border-white/10 pb-3 text-xs font-mono uppercase tracking-wider text-gray-400 sm:grid-cols-[10rem_minmax(0,1fr)_6rem]">
          <span>/ Date</span>
          <span>/ Article Title</span>
          <span className="hidden sm:inline text-right">/ Read Time</span>
        </div>

        {/* Posts List */}
        <div className="divide-y divide-white/5">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group grid min-h-20 grid-cols-[7.5rem_minmax(0,1fr)_1.25rem] items-center py-4 px-3 rounded-xl transition-all hover:bg-white/5 sm:grid-cols-[10rem_minmax(0,1fr)_6rem]"
            >
              <span className="flex items-center gap-2 text-xs sm:text-sm text-purple-400 font-mono">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-purple-400/80 group-hover:scale-125 transition-transform" />
                <span>{post.date}</span>
              </span>

              <div className="min-w-0 pr-4">
                <div className="text-[11px] font-mono text-gray-400 mb-1">
                  {post.category}
                </div>
                <span className="text-base sm:text-lg font-medium text-white group-hover:text-purple-300 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </span>
              </div>

              <span className="hidden sm:inline text-right text-xs text-gray-400 font-mono">
                {post.readTime}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
