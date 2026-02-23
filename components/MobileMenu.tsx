"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Side Panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-[300px] bg-background border-r border-accent/20 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-heading font-bold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="text-base font-medium text-foreground/80 group-hover:text-foreground">
                  {label}
                </span>
                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-accent/10">
            <p className="text-xs text-foreground/40 text-center">
              &copy; {new Date().getFullYear()} Web3 Protocol
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
