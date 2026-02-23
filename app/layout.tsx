import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Web3Provider } from "@/components/Web3Provider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web3 Landing Page",
  description: "Connect your wallet and explore the decentralized web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-background text-foreground font-sans min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Provider>
            <header>
              <Navbar />
            </header>
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-10 md:py-20">
              {children}
            </main>
            <footer className="w-full py-12 px-6 md:px-12 border-t border-accent/20">
              <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-foreground/60">
                <p>&copy; 2026 Web3 Protocol. All rights reserved.</p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </footer>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
