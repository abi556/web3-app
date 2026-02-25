import Link from "next/link";

const footerLinks = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/security", label: "Security" },
    { href: "/about", label: "About" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <p className="text-lg font-heading font-bold tracking-tighter mb-2">Nexus.</p>
            <p className="text-sm text-foreground/50 max-w-xs">
              The most intuitive interface for managing your decentralized assets with total clarity.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-3">Product</p>
              <nav className="flex flex-col gap-2" aria-label="Product links">
                {footerLinks.product.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-foreground/60 hover:text-accent hover:translate-x-0.5 transition-all duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-3">Legal</p>
              <nav className="flex flex-col gap-2" aria-label="Legal links">
                {footerLinks.legal.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-foreground/60 hover:text-accent hover:translate-x-0.5 transition-all duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-accent/10 text-xs text-foreground/40">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Nexus Web3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
