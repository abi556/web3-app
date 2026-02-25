"use client";

import Link from "next/link";

export function Hero() {
  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[60vh] flex flex-col justify-center gap-6">
      <div className="w-12 h-px bg-accent mb-2" aria-hidden="true" />
      <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-[1.1]">
        The Future of <span className="text-accent">Web3</span> is <span className="text-accent">Nexus.</span>
      </h1>
      <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl font-light leading-relaxed">
        The most intuitive interface for managing your decentralized assets. 
        Securely connect your wallet to view real-time ETH and USDT balances with total clarity.
      </p>
      <div className="flex flex-wrap gap-4 mt-8">
        <button onClick={scrollToDashboard} className="btn-primary">
          Get Started
        </button>
        <Link href="/about" className="btn-outline">
          Learn More
        </Link>
      </div>
    </section>
  );
}
