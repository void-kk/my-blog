import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

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
            alt="My Blog Logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          My Blog
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Posts
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
