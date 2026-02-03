import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Home, BookOpen, User, Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <Image
            src="/logo.png"
            alt="jylog Logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          jylog
        </Link>
        <nav className="flex items-center gap-1 md:gap-4">
          <Link
            href="/"
            className="p-1 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </Link>
          <Link
            href="/posts"
            className="p-1 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Posts"
          >
            <BookOpen className="w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="p-1 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="About Me"
          >
            <User className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/void-kk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 md:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
