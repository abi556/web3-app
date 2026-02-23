import Link from "next/link";
import { ArrowLeft, Lock, Eye, EyeOff, Server, FileCheck, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: EyeOff,
    title: "Zero Knowledge of Your Keys",
    description:
      "Your private key and seed phrase never leave your wallet extension. This application has no mechanism to request, store, or transmit them.",
  },
  {
    icon: Eye,
    title: "Read-Only Access",
    description:
      "We call two standard Ethereum JSON-RPC methods: eth_getBalance for native ETH, and a balanceOf view on the USDT contract. Both are read-only — no transactions are ever initiated.",
  },
  {
    icon: Server,
    title: "Trusted Infrastructure",
    description:
      "Blockchain data is fetched through Alchemy's enterprise-grade RPC nodes with an automatic fallback to public endpoints. No single point of failure.",
  },
  {
    icon: Lock,
    title: "No Backend, No Database",
    description:
      "This is a fully static frontend application. There is no server, no database, and no user accounts. Your wallet address is never stored anywhere.",
  },
  {
    icon: FileCheck,
    title: "Open Source & Auditable",
    description:
      "The entire codebase is available for review. Every dependency — wagmi, viem, next-themes — is a widely audited, open-source library maintained by the community.",
  },
  {
    icon: ShieldCheck,
    title: "Environment-Isolated Secrets",
    description:
      "API keys (Alchemy, WalletConnect) are stored in environment variables and never committed to version control. The .env.local file is strictly gitignored.",
  },
];

export default function SecurityPage() {
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
          Trust Model
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          Security
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-2xl">
          How we keep your assets safe — by never touching them in the first place.
        </p>
      </div>

      {/* Principles */}
      <div className="space-y-8 mb-20">
        {principles.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className="flex gap-6 items-start group"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <Icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
            </div>
            <div className="pt-1">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-mono text-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Banner */}
      <div className="border border-accent/10 rounded-2xl p-8 md:p-12 text-center bg-foreground/5 mb-12">
        <Lock className="w-8 h-8 mx-auto mb-4 text-accent" />
        <h2 className="text-xl md:text-2xl font-bold mb-3">Your keys. Your coins.</h2>
        <p className="text-foreground/50 max-w-md mx-auto leading-relaxed">
          We believe the safest application is one that never has access to
          your funds. This is that application.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-accent/10 pt-12 pb-8 text-center">
        <Link href="/" className="btn-primary inline-block">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
