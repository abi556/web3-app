import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ConnectWalletButton } from "@/components/ConnectWalletButton";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <Link
        href="/"
        className="text-2xl font-heading font-bold tracking-tighter hover:opacity-80 transition-opacity"
      >
        Web3.
      </Link>

      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link href="#" className="hover:text-accent transition-colors">
          Manifesto
        </Link>
        <Link href="#" className="hover:text-accent transition-colors">
          Protocol
        </Link>
        <Link href="#" className="hover:text-accent transition-colors">
          Governance
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <ConnectWalletButton />
      </div>
    </nav>
  );
}
