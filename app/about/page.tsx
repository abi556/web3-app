import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
        About <span className="text-accent">Web3.</span>
      </h1>
      <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-16">
        A modern Web3 portfolio interface that lets you connect your Ethereum
        wallet and view your on-chain balances — no sign-ups, no middlemen,
        no custody risk.
      </p>

      {/* What It Does */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What It Does</h2>
        <div className="space-y-4 text-foreground/70 leading-relaxed">
          <p>
            This application connects directly to the Ethereum Mainnet through
            your browser wallet. Once connected, it reads your on-chain data in
            real time:
          </p>
          <ul className="space-y-3 pl-1">
            {[
              "Native ETH balance on Ethereum Mainnet",
              "USDT (Tether) ERC-20 token balance",
              "Wallet connection state with clear visual feedback",
              "Network detection and address display",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Next.js 16", desc: "App Router, server components, static generation" },
            { name: "React 19", desc: "Client components with hooks-based architecture" },
            { name: "TypeScript", desc: "End-to-end type safety across the entire codebase" },
            { name: "Tailwind CSS v4", desc: "Utility-first styling with custom design tokens" },
            { name: "wagmi + viem", desc: "Type-safe Ethereum interactions and wallet management" },
            { name: "Alchemy RPC", desc: "Production-grade node infrastructure with fallback" },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className="border border-accent/10 rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <h3 className="font-bold text-base mb-1">{name}</h3>
              <p className="text-sm text-foreground/50">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Web3 */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Web3?</h2>
        <div className="space-y-4 text-foreground/70 leading-relaxed">
          <p>
            Traditional finance requires intermediaries — banks, brokers, and
            custodians — each adding fees, delays, and counterparty risk.
            Web3 eliminates these layers by letting users interact directly
            with the blockchain.
          </p>
          <p>
            Your keys, your coins. This interface never asks for a password,
            never stores your private key, and never moves your funds. It
            simply reads public blockchain data through your wallet&apos;s
            connection.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do I need MetaMask to use this?",
              a: "MetaMask is the most common option, but any injected Ethereum wallet (Coinbase Wallet, Brave Wallet, etc.) or WalletConnect-compatible mobile wallet will work.",
            },
            {
              q: "Is my private key shared with this site?",
              a: "Never. The app only reads your public address and on-chain balances. Your private key stays in your wallet at all times.",
            },
            {
              q: "Why do I see 0.00 USDT?",
              a: "If your wallet doesn't hold USDT on Ethereum Mainnet, the balance will be zero. USDT on other chains (Tron, BSC, etc.) is not displayed.",
            },
            {
              q: "What network does this support?",
              a: "Currently, Ethereum Mainnet only. Support for additional chains may be added in the future.",
            },
            {
              q: "Are the Send/Receive/Swap buttons functional?",
              a: "Not yet — they are designed as a preview of the planned feature set. The current scope focuses on wallet connection and balance display.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-accent/10 pb-6">
              <h3 className="font-bold text-base mb-2">{q}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back CTA */}
      <div className="text-center py-12 border-t border-accent/10">
        <Link href="/" className="btn-primary inline-block">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
