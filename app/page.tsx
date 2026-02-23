export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="min-h-[60vh] flex flex-col justify-center gap-6">
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-[1.1]">
          The Future of <span className="text-accent">Web3</span> is Here.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl font-light">
          A decentralized protocol for the next generation of finance. Secure, transparent, and built for everyone.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-outline">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
