import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto w-full">
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
          Legal
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          Terms of Use
        </h1>
        <p className="text-sm text-foreground/40">
          Last updated: February 2026
        </p>
      </div>

      <div className="space-y-12 text-foreground/70 leading-relaxed">
        {/* Acceptance */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using this application, you acknowledge that you
            have read, understood, and agree to be bound by these Terms of Use.
            If you do not agree, please do not use the application.
          </p>
        </section>

        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            2. Description of Service
          </h2>
          <p>
            This application is a client-side interface that allows users to
            connect an Ethereum-compatible wallet and view their on-chain asset
            balances. It does not facilitate, execute, or process any
            transactions on your behalf.
          </p>
        </section>

        {/* Non-Custodial */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            3. Non-Custodial Nature
          </h2>
          <p>
            This application is non-custodial. We do not hold, store, or have
            access to your private keys, seed phrases, or funds. You are solely
            responsible for the security of your wallet and credentials.
          </p>
        </section>

        {/* No Financial Advice */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            4. No Financial Advice
          </h2>
          <p>
            Nothing displayed in this application constitutes financial,
            investment, or trading advice. Balance information is read directly
            from the Ethereum blockchain and is provided for informational
            purposes only. Always do your own research.
          </p>
        </section>

        {/* Accuracy */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            5. Accuracy of Information
          </h2>
          <p>
            While we strive to display accurate data, balances are sourced from
            third-party RPC providers and the Ethereum blockchain. We make no
            guarantees regarding the accuracy, completeness, or timeliness of
            the displayed information. Network congestion, RPC outages, or
            blockchain reorganizations may cause temporary discrepancies.
          </p>
        </section>

        {/* Third-Party */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            6. Third-Party Services
          </h2>
          <p>
            This application relies on third-party services including Alchemy
            (RPC infrastructure), WalletConnect (wallet relay protocol), and
            your chosen wallet provider. We are not responsible for the
            availability, security, or privacy practices of these services.
          </p>
        </section>

        {/* Limitation */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, this application and its
            developers shall not be liable for any direct, indirect, incidental,
            or consequential damages arising from the use or inability to use
            this service, including but not limited to loss of funds, data, or
            profits.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            8. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the application after changes constitutes acceptance of the
            updated terms. Material changes will be reflected in the
            &quot;Last updated&quot; date above.
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
