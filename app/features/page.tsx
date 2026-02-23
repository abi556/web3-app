import Link from "next/link";
import { ArrowLeft, Wallet, BarChart3, Shield, Zap, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "One-Click Connect",
    description:
      "Connect MetaMask, WalletConnect, or any injected wallet instantly. No sign-ups, no emails, no passwords.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Balances",
    description:
      "View your native ETH and ERC-20 token balances read directly from Ethereum Mainnet — always accurate, always live.",
  },
  {
    icon: Shield,
    title: "Non-Custodial",
    description:
      "Your private key never leaves your wallet. We only read public on-chain data — zero custody risk.",
  },
  {
    icon: Zap,
    title: "Production Infrastructure",
    description:
      "Powered by Alchemy RPC with automatic fallback to public nodes. No downtime, no rate limits on critical reads.",
  },
  {
    icon: Globe,
    title: "Multi-Wallet Support",
    description:
      "MetaMask, Coinbase Wallet, Brave Wallet, WalletConnect-compatible mobile wallets — connect however you prefer.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Designed mobile-first with touch-friendly targets. Works seamlessly on phones, tablets, and desktops.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-4xl mx-auto w-full fade-in-up">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
          Platform
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          Features
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-2xl">
          Everything you need to view and manage your Ethereum portfolio —
          nothing you don&apos;t.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group border border-accent/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-5 group-hover:bg-foreground/10 transition-colors">
              <Icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-accent/10 pt-12 pb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start?</h2>
        <p className="text-foreground/50 mb-8 max-w-md mx-auto">
          Connect your wallet on the homepage and see your portfolio in seconds.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
