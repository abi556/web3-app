import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-accent/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Web3 Protocol. All rights reserved.</p>
        <nav className="flex gap-6" aria-label="Footer">
          <Link href="/privacy" className="hover:text-accent transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-accent transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
