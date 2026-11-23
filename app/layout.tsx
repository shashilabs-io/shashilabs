import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shashi Bhushan | Shashi Labs",
  description: "Official portfolio and digital laboratory of Shashi Bhushan. Web developer, programmer, and creator sharing thoughts, projects, and tech insights.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-screen overflow-x-hidden bg-[#090d16] text-[#e2e8f0]">
        <main className="flex min-h-screen w-full max-w-6xl min-w-0 mx-auto">

    {/* Left Sidebar */}
    <div className="hidden w-16 shrink-0 border-r border-white/10 md:sticky md:top-0 md:flex md:h-screen md:flex-col lg:w-52 bg-[#060911]/90 backdrop-blur-md z-40">
      {/* Brand logo / title */}
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
          S
        </div>
        <span className="hidden lg:block font-bold text-base tracking-tight text-white">Shashi Labs</span>
      </div>

      {/* Navbar */}
      <nav className="flex-1 flex flex-col justify-between py-6">
        <ul className="flex w-full flex-col gap-2 px-3">

          {/* Home */}
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-3 rounded-xl 
                         text-gray-300 hover:text-white
                         transition-colors hover:bg-white/10 active:bg-white/15"
            >
              {/* Home SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 shrink-0 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.954a1.125 1.125 0 0 1 1.592 0L21.75 12M4.5 9.75v9.75A1.5 1.5 0 0 0 6 21h3.75v-6.75h4.5V21H18a1.5 1.5 0 0 0 1.5-1.5V9.75"
                />
              </svg>

              <span className="hidden lg:inline text-sm font-medium">Home</span>
            </Link>
          </li>

          {/* Projects */}
          <li>
            <Link
              href="/projects"
              className="flex items-center gap-3 px-3 py-3 rounded-xl 
                         text-gray-300 hover:text-white
                         transition-colors hover:bg-white/10 active:bg-white/15"
            >
              {/* Projects SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 shrink-0 text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span className="hidden lg:inline text-sm font-medium">Projects</span>
            </Link>
          </li>

          {/* Blog */}
          <li>
            <Link
              href="/blog"
              className="flex items-center gap-3 px-3 py-3 rounded-xl 
                         text-gray-300 hover:text-white
                         transition-colors hover:bg-white/10 active:bg-white/15"
            >
              {/* Blog SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 shrink-0 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-8.25A2.25 2.25 0 0 0 17.25 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12A2.25 2.25 0 0 0 6.75 20.25H18"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5h7.5M8.25 11.25h7.5M8.25 15h4.5"
                />
              </svg>

              <span className="hidden lg:inline text-sm font-medium">Blog</span>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              href="/about"
              className="flex items-center gap-3 px-3 py-3 rounded-xl 
                         text-gray-300 hover:text-white
                         transition-colors hover:bg-white/10 active:bg-white/15"
            >
              {/* About SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 shrink-0 text-amber-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 3.75.372
                     9.75 9.75 0 1 0-13.5 0
                     9.38 9.38 0 0 0 3.75-.372"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12.75a3 3 0 1 0 0-6
                     3 3 0 0 0 0 6ZM4.5 19.5a7.5 7.5 0 0 1 15 0"
                />
              </svg>

              <span className="hidden lg:inline text-sm font-medium">About</span>
            </Link>
          </li>

        </ul>

        {/* Bottom subtle profile snippet on sidebar */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-3 mx-2 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-400">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available to build</span>
        </div>
      </nav>
    </div>

    {/* Main Content */}
    <div className="min-w-0 flex-1 wrap-break-word pb-24 md:pb-12">
      {children}
    </div>

  </main>

  {/* Mobile bottom nav */}
  <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#090d16]/95 backdrop-blur-lg md:hidden">
    <ul className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
      <li>
        <Link href="/" className="flex flex-col items-center gap-1 p-2 text-xs text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-blue-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.954a1.125 1.125 0 0 1 1.592 0L21.75 12M4.5 9.75v9.75A1.5 1.5 0 0 0 6 21h3.75v-6.75h4.5V21H18a1.5 1.5 0 0 0 1.5-1.5V9.75" />
          </svg>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/projects" className="flex flex-col items-center gap-1 p-2 text-xs text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-emerald-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Projects</span>
        </Link>
      </li>
      <li>
        <Link href="/blog" className="flex flex-col items-center gap-1 p-2 text-xs text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-purple-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-8.25A2.25 2.25 0 0 0 17.25 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12A2.25 2.25 0 0 0 6.75 20.25H18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5M8.25 11.25h7.5M8.25 15h4.5" />
          </svg>
          <span>Blog</span>
        </Link>
      </li>
      <li>
        <Link href="/about" className="flex flex-col items-center gap-1 p-2 text-xs text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-amber-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 3.75.372 9.75 9.75 0 1 0-13.5 0 9.38 9.38 0 0 0 3.75-.372" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 19.5a7.5 7.5 0 0 1 15 0" />
          </svg>
          <span>About</span>
        </Link>
      </li>
    </ul>
  </nav>
</body>
    </html>
  );
}
