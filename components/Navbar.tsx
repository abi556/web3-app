"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ConnectWalletButton } from "@/components/ConnectWalletButton";

const MobileMenu = dynamic(
  () => import("@/components/MobileMenu").then((m) => m.MobileMenu),
  { ssr: false }
);

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
];

const allMobileLinks = [
  { href: "/", label: "Home" },
  ...navLinks,
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between py-8 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="md:hidden">
        <MobileMenu links={allMobileLinks} />
      </div>

      <Link
        href="/"
        className="hidden md:inline-block text-2xl font-heading font-bold tracking-tighter hover:opacity-70 transition-all duration-200"
      >
        Web3.
      </Link>

      <div className="hidden md:flex items-center gap-8 font-medium">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`group relative py-1 transition-colors duration-200 ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-foreground/60 hover:text-accent"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-200 ease-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <ConnectWalletButton />
      </div>
    </nav>
  );
}
