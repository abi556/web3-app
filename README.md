## Nexus Web3 Portfolio

Professional Web3 landing page and asset manager built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.  
Nexus allows you to securely connect your Ethereum wallets (MetaMask, browser wallets, WalletConnect), view live **ETH** and **USDT** balances on **Ethereum Mainnet**, and manage your decentralized finance portfolio in a clean, responsive dashboard.

## Features

- **Wallet connection**
  - Connect/disconnect via **Injected** wallets (e.g., MetaMask, Rabby, OKX, etc.)
  - Connect via **WalletConnect v2** (QR code / mobile wallets)
  - Clear connected / disconnected / wrong-network states
- **Balance display**
  - Live **ETH** balance on Ethereum Mainnet
  - Live **USDT** balance on Ethereum Mainnet
  - Uses `wagmi` + `viem` with `formatUnits` for precise formatting
- **UI/UX**
  - Modern, minimalist landing page with hero section and dashboard-style portfolio view
  - Mobile‑first responsive layout, including a dedicated mobile navigation drawer
  - Light/dark theme support with **`next-themes`**
  - Micro‑interactions for buttons, cards, dropdowns, and toasts
- **Error handling & resilience**
  - Inline error messages for failed connections and network issues
  - Global React **Error Boundary** to catch unexpected runtime errors
  - Hydration safety via `useHydrated` and `suppressHydrationWarning`

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router, Turbopack)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS v4
- **Web3**: `wagmi`, `viem`, WalletConnect v2, Injected connectors
- **State / Data**: React hooks, `@tanstack/react-query` for Web3 query caching
- **Theming**: `next-themes` (light / dark / system)
- **Icons**: `lucide-react` (tree‑shaken via `optimizePackageImports`)

## Project Structure (high level)

- `app/`
  - `page.tsx` – Landing page (hero + dashboard)
  - `about/page.tsx` – Project overview, FAQ, and explanation
  - `features/page.tsx` – Product features
  - `security/page.tsx` – Security and best‑practices overview
  - `privacy/page.tsx` – Privacy policy
  - `terms/page.tsx` – Terms of use
  - `layout.tsx` – Root layout, fonts, metadata, global providers
- `components/`
  - `Navbar`, `MobileMenu`, `Footer`, `Hero`, `Dashboard`
  - `ConnectWalletButton`, `ThemeToggle`, `ErrorBoundary`, `Providers`
- `lib/`
  - `wagmi.ts` – Wagmi + WalletConnect config
  - `contracts.ts` – Contract constants (e.g., USDT address/decimals)
  - `format.ts` – Formatting helpers (balances, addresses)
  - `useHydrated.ts` – SSR hydration‑safe hook

## Environment Variables

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_ALCHEMY_KEY=your_alchemy_mainnet_api_key
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

- `NEXT_PUBLIC_ALCHEMY_KEY` is optional but recommended for reliable Ethereum Mainnet RPC.
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` is required for WalletConnect v2.

## Getting Started (Local Development)

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

You can then edit the UI (for example, the main landing page) in `app/page.tsx`. Changes are hot‑reloaded.

## Production Build

```bash
npm run build
npm run start
```

## Linting

```bash
npm run lint
```

The project uses **ESLint 9** and Next.js recommended rules. Warnings about Tailwind v4 custom at‑rules are handled via workspace settings.

## Deployment

- **Live deployment**: [`https://web3-app-indol.vercel.app/`](https://web3-app-indol.vercel.app/)
- The app is deployed via **Vercel** using the default Next.js build command (`npm run build`) and start command (`npm start`).
- Any push to the main branch will trigger an automatic redeploy on Vercel (if connected to this repository).