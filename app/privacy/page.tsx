import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors duration-200 mb-12"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-foreground/40">
          Last updated: February 2026
        </p>
      </div>

      <div className="space-y-12 text-foreground/70 leading-relaxed">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Overview</h2>
          <p>
            Nexus Web3 (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;)
            is a static, client-side web application. We are committed to
            protecting your privacy. This policy explains what data we collect
            (almost none) and how we handle it.
          </p>
        </section>

        {/* Data We Don't Collect */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Data We Do Not Collect
          </h2>
          <ul className="space-y-3 pl-1">
            {[
              "Private keys or seed phrases; we have no mechanism to access them",
              "Personal information; there are no sign-ups, emails, or passwords",
              "Transaction history; we only read current balances, not past activity",
              "Cookies or tracking identifiers; we do not use analytics or ad tracking",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Data That Is Processed */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Data Processed Locally
          </h2>
          <p className="mb-4">
            When you connect your wallet, the following data is processed
            entirely in your browser:
          </p>
          <ul className="space-y-3 pl-1">
            {[
              "Your public wallet address, used to query on-chain balances",
              "Network information, used to display the connected chain",
              "Theme preference, stored in localStorage by your browser",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            None of this data is transmitted to our servers because we do not
            operate any servers. All blockchain queries are made directly from
            your browser to the Ethereum RPC provider.
          </p>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Third-Party Services
          </h2>
          <p className="mb-4">
            The app interacts with the following third-party services:
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Alchemy",
                desc: "Provides RPC node infrastructure for reading blockchain data. Alchemy may log RPC requests; see their privacy policy for details.",
              },
              {
                name: "WalletConnect",
                desc: "Provides the relay protocol for mobile wallet connections. WalletConnect operates its own relay servers; see their privacy policy.",
              },
              {
                name: "Vercel",
                desc: "Hosts the static frontend files. Standard web server logs (IP, user agent) may be collected by the hosting provider.",
              },
            ].map(({ name, desc }) => (
              <div
                key={name}
                className="border border-accent/10 rounded-xl p-5 card-interactive hover:border-accent/30"
              >
                <h3 className="font-bold text-base text-foreground mb-1">{name}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Changes</h2>
          <p>
            We may update this policy as the application evolves. Material
            changes will be reflected in the &quot;Last updated&quot; date
            above.
          </p>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-accent/10 mt-16 pt-12 pb-8 text-center">
        <Link href="/" className="btn-primary inline-block">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
