import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <Link href="/" className="text-2xl font-heading font-bold tracking-tighter hover:opacity-80 transition-opacity">
        Web3.
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link href="#" className="hover:text-accent transition-colors">Manifesto</Link>
        <Link href="#" className="hover:text-accent transition-colors">Protocol</Link>
        <Link href="#" className="hover:text-accent transition-colors">Governance</Link>
      </div>

      <button className="px-6 py-2 border border-current rounded-full hover:bg-foreground hover:text-background transition-colors font-medium text-sm">
        Connect Wallet
      </button>
    </nav>
  );
}
