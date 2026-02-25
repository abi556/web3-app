import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "optional",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Nexus Web3 | Secure Decentralized Finance Portfolio",
    template: "%s | Nexus Web3",
  },
  description: "Manage your digital assets with Nexus Web3. Securely connect your wallet, view real-time ETH and USDT balances, and explore the future of decentralized finance.",
  keywords: ["Web3", "Ethereum", "MetaMask", "Crypto Portfolio", "DeFi", "USDT", "ETH Balance", "Nexus Web3", "Blockchain"],
  authors: [{ name: "Nexus Web3 Team" }],
  creator: "Nexus Web3",
  publisher: "Nexus Web3",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://web3-app-indol.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/fav.png" },
      { url: "/fav.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/fav.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://web3-app-indol.vercel.app",
    siteName: "Nexus Web3",
    title: "Nexus Web3 | Secure Decentralized Finance Portfolio",
    description: "The most intuitive way to manage your Web3 assets. Connect your wallet to view real-time balances on the Ethereum network.",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Nexus Web3 Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Web3 | Secure Decentralized Finance Portfolio",
    description: "Manage your digital assets with Nexus Web3. Securely connect your wallet and view real-time ETH and USDT balances.",
    images: ["/cover.png"],
    creator: "@nexusweb3",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||((!t||t==="system")&&window.matchMedia("(prefers-color-scheme:dark)").matches);if(d)document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark")}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Nexus Web3",
              "url": "https://web3-app-indol.vercel.app",
              "description": "Securely connect your wallet and manage your digital assets with Nexus Web3. View real-time ETH and USDT balances on Ethereum Mainnet.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-background text-foreground font-sans min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Navbar />
          </header>
          <main id="main-content" className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-10 md:py-20">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
