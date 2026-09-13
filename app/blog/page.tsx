import Link from "next/link";

const posts = [
  { date: "2026. 9. 07", title: "What if Stripe could work the way your business does?", slug: "stripe-for-your-business" },
  { date: "2026. 8. 28", title: "AI didn't write our SDK. It changed how we built it.", slug: "ai-and-sdk-development" },
  { date: "2026. 8. 26", title: "Building a data plane from scratch: Stripe's own high-performance distributed proxy", slug: "building-a-data-plane" },
  { date: "2026. 8. 14", title: "Reading the signals: Helping your AI-built payment integration understand business intent", slug: "reading-the-signals" },
  { date: "2026. 8. 10", title: "From charging a blended rate to IC++: pass network costs to your connected accounts", slug: "passing-network-costs" },
  { date: "2026. 8. 07", title: "Agentic payments for marketplaces: How a smart fridge can shop safely", slug: "agentic-payments" },
  { date: "2026. 7. 30", title: "Meet Stripe's Knowledge AI Platform", slug: "knowledge-ai-platform" },
  { date: "2026. 7. 16", title: "How Stripe uses graph search and state machines to auto-remediate a global database", slug: "graph-search-and-state-machines" },
  { date: "2026. 7. 02", title: "Keeping funds where they belong: Implementing fund segregation in Stripe Connect", slug: "fund-segregation" },
];

export default function Blog() {
  return (
    <section className="min-h-screen bg-[#001824] px-6 py-8 text-[#c8d0db] sm:px-10 sm:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-[7.5rem_minmax(0,1fr)_1.25rem] items-center border-b border-[#607788] pb-2 text-xs font-medium uppercase tracking-wide text-[#7892a7] sm:grid-cols-[9.9rem_minmax(0,1fr)_1.25rem]">
          <span>/ Date</span>
          <span>/ Name</span>
        </div>

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid min-h-16 grid-cols-[7.5rem_minmax(0,1fr)_1.25rem] items-center border-b border-[#385565] transition-colors hover:bg-[#082636] sm:grid-cols-[9.9rem_minmax(0,1fr)_1.25rem]"
            >
              <span className="flex items-center gap-2 text-sm text-[#79a9ff] sm:gap-2.5">
                <span aria-hidden="true" className="h-2.5 w-2.5 bg-[#75a6ff]" />
                <span>{post.date}</span>
              </span>
              <span className="min-w-0 truncate pr-3 text-[1.45rem] font-medium leading-tight tracking-tight sm:text-[1.9rem]">
                {post.title}
              </span>
              <span aria-hidden="true" className="text-xl font-light text-[#c8d0db] transition-transform group-hover:rotate-90">+</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}