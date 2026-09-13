import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-5">
      <img src="/placeholder.jpg" alt="Placeholder" className="w-full h-50" />
      <h1 className="text-2xl leading-10">Hi! I am <span className="font-bold bg-blue-500 text-white px-2 py-1 rounded">Shashi Bhushan</span>. I am an enthusiast for web development and programming. I love creating <span className="font-bold bg-green-500 text-white px-2 py-1 rounded">innovative</span> solutions and beautiful
        websites that people <span className="font-bold bg-pink-300 text-white px-2 py-1 rounded">love</span>. 
        <p className="mt-2 text-[1.4rem]">In my free time, I play chess and read books. I also want to learn how to play the guitar because my friend plays it, and I’ve been inspired to learn it too.</p>
      </h1>

      {/* Social Media Links */}
      <div className="flex gap-10 mt-8">
        <Link href="https://www.linkedin.com/in/shashi-bhushan-40aa70360/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </Link>
        <Link href="https://github.com/shashilabs-io" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
        </Link>
        <Link href="https://twitter.com/shashibhushan" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.svg" alt="Twitter" className="w-8 h-8" />
        </Link>
        <Link href="https://www.instagram.com/shashi.sh_01/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
        </Link>
      </div>

      {/* Projects Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/projects/project1" className="text-blue-500 hover:underline">
              Project 1
            </Link>
          </li>
          <li>
            <Link href="/projects/project2" className="text-blue-500 hover:underline">
              Project 2
            </Link>
          </li>
          <li>
            <Link href="/projects/project3" className="text-blue-500 hover:underline">
              Project 3
            </Link>
          </li>
        </ul>
      </div>

      {/* Blog Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Blog</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/blog/post1" className="text-blue-500 hover:underline">
              Blog Post 1
            </Link>
          </li>
          <li>
            <Link href="/blog/post2" className="text-blue-500 hover:underline">
              Blog Post 2
            </Link>
          </li>
          <li>
            <Link href="/blog/post3" className="text-blue-500 hover:underline">
              Blog Post 3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}     