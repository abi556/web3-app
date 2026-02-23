"use client";

import Link from "next/link";

export function Hero() {
  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[60vh] flex flex-col justify-center gap-6">
      <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-[1.1]">
        The Future of <span className="text-accent">Web3</span> is Here.
      </h1>
      <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl font-light">
        A decentralized protocol for the next generation of finance. Secure,
        transparent, and built for everyone.
      </p>
      <div className="flex gap-4 mt-8">
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
