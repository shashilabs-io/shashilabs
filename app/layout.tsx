import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashi Labs",
  description: "Shashi Labs is a personal website and blog by Shashi Bhushan, where I share my thoughts, projects, and experiences in technology, programming, and software development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-6xl min-w-0 mx-auto">

    {/* Left Sidebar */}
    <div className="hidden w-40 shrink-0 border-r border-gray-300 md:sticky md:top-0 md:flex md:h-screen md:flex-col lg:w-48">

      {/* Navbar */}
      <nav className="flex-1 flex items-center justify-center">
        <ul className="flex w-full flex-col gap-4 p-4">

          {/* Home */}
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 p-4 rounded-xl 
                         text-white wrap-break-word
                         transition-colors"
            >
              {/* Home SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.954a1.125 1.125 0 0 1 1.592 0L21.75 12M4.5 9.75v9.75A1.5 1.5 0 0 0 6 21h3.75v-6.75h4.5V21H18a1.5 1.5 0 0 0 1.5-1.5V9.75"
                />
              </svg>

              <span>Home</span>
            </Link>
          </li>

          {/* Blog */}
          <li>
            <Link
              href="/blog"
              className="flex items-center gap-3 p-4 rounded-xl 
                         text-white wrap-break-word
                         transition-colors"
            >
              {/* Blog SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
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

              <span>Blog</span>
            </Link>
          </li>

          {/* Projects */}
          <li>
            <Link
              href="/projects"
              className="flex items-center gap-3 p-4 rounded-xl 
                         text-white wrap-break-word
                         transition-colors"
            >
              {/* Projects SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span>Projects</span>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              href="/about"
              className="flex items-center gap-3 p-4 rounded-xl 
                         text-white wrap-break-word
                         transition-colors"
            >
              {/* About SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
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

              <span>About</span>
            </Link>
          </li>

        </ul>
      </nav>
    </div>

    

    {/* Main Content */}
    <div className="min-w-0 flex-1 wrap-break-word pb-20 md:pb-0">
      {children}
    </div>

  </main>
  <nav className="fixed inset-x-0 bottom-0 z-10 border-t rounded-t-2xl border-gray-300 bg-white md:hidden">
    <ul className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
      <li>
        <Link href="/" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.954a1.125 1.125 0 0 1 1.592 0L21.75 12M4.5 9.75v9.75A1.5 1.5 0 0 0 6 21h3.75v-6.75h4.5V21H18a1.5 1.5 0 0 0 1.5-1.5V9.75" />
          </svg>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/blog" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-8.25A2.25 2.25 0 0 0 17.25 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12A2.25 2.25 0 0 0 6.75 20.25H18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5M8.25 11.25h7.5M8.25 15h4.5" />
          </svg>
          <span>Blog</span>
        </Link>
      </li>
      <li>
        <Link href="/projects" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Projects</span>
        </Link>
      </li>
      <li>
        <Link href="/about" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
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
