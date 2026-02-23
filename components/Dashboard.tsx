"use client";

import { useAccount, useBalance, useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { erc20Abi } from "viem";
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCcw, Send, LucideIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

const USDT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7" as const;
const USDT_DECIMALS = 6;

const emptySubscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function formatBalance(value: bigint, decimals: number, displayDecimals: number): string {
  const formatted = formatUnits(value, decimals);
  const [integer, fraction = ""] = formatted.split(".");
  return `${integer}.${(fraction || "").padEnd(displayDecimals, "0").slice(0, displayDecimals)}`;
}

function ActionButton({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group p-2 hover:bg-foreground/5 rounded-lg transition-colors">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/10 flex items-center justify-center bg-background group-hover:border-foreground/30 transition-all duration-300">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground/80 group-hover:text-foreground" />
      </div>
      <span className="text-xs font-medium text-foreground/60 group-hover:text-foreground transition-colors">
        {label}
      </span>
    </button>
  );
}

function DisconnectedState() {
  return (
    <div className="border border-dashed border-accent/20 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center bg-accent/5 min-h-[300px]">
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent animate-in zoom-in duration-500">
        <Wallet className="w-8 h-8" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Connect Your Wallet</h3>
      <p className="text-foreground/60 max-w-sm mb-8 leading-relaxed">
        Connect your wallet to view your portfolio and manage your assets on the Ethereum Mainnet.
      </p>
      {/* Visual cue pointing to navbar */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-xs font-medium text-foreground/50">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Use the button in the top right
      </div>
    </div>
  );
}

export function Dashboard() {
  const { address, isConnected } = useAccount();
  const mounted = useHydrated();

  const {
    data: ethBalance,
    isLoading: ethLoading,
  } = useBalance({
    address,
    query: { enabled: isConnected },
  });

  const {
    data: usdtRaw,
    isLoading: usdtLoading,
  } = useReadContract({
    address: USDT_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: isConnected && !!address },
  });

  if (!mounted) return null;

  if (!isConnected) {
    return (
      <section aria-label="Wallet balances" className="mt-20 max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
        <DisconnectedState />
      </section>
    );
  }

  const ethFormatted = ethBalance
    ? formatBalance(ethBalance.value, ethBalance.decimals, 4)
    : undefined;

  const usdtFormatted = usdtRaw !== undefined
    ? formatBalance(usdtRaw as bigint, USDT_DECIMALS, 2)
    : undefined;

  return (
    <section className="mt-12 md:mt-20 max-w-md md:max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards px-4 md:px-0">
      {/* Portfolio Header */}
      <div className="mb-10 text-center">
        <p className="text-xs font-bold text-foreground/40 mb-3 uppercase tracking-[0.2em]">Total Estimated Value</p>
        <div className="flex items-baseline justify-center gap-2">
           <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter tabular-nums">
            $0.00
          </h2>
          <span className="text-lg md:text-xl text-foreground/40 font-medium">USD</span>
        </div>
        
        {/* Mock Action Buttons */}
        <div className="flex justify-center gap-4 md:gap-8 mt-8 md:mt-10">
          <ActionButton icon={ArrowDownLeft} label="Receive" />
          <ActionButton icon={Send} label="Send" />
          <ActionButton icon={RefreshCcw} label="Swap" />
          <ActionButton icon={ArrowUpRight} label="Buy" />
        </div>
      </div>

      {/* Asset List */}
      <div className="bg-background border border-accent/10 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/5">
        <div className="px-6 py-4 border-b border-accent/10 bg-foreground/5 flex justify-between items-center backdrop-blur-sm">
          <h3 className="font-bold text-sm uppercase tracking-wider text-foreground/70">Assets</h3>
        </div>
        
        <div className="divide-y divide-accent/5">
          <div className="p-4 hover:bg-foreground/5 transition-colors flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-500/20">
                ETH
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Ethereum</p>
                <p className="text-xs text-foreground/50 font-medium">ETH</p>
              </div>
            </div>
            <div className="text-right">
              {ethLoading ? (
                <div className="h-6 w-24 bg-foreground/5 rounded animate-pulse ml-auto" />
              ) : (
                <>
                  <p className="font-mono font-medium text-lg tracking-tight tabular-nums">
                    {ethFormatted ?? "0.0000"}
                  </p>
                  <p className="text-xs text-foreground/40 font-medium">≈ $0.00</p>
                </>
              )}
            </div>
          </div>

          <div className="p-4 hover:bg-foreground/5 transition-colors flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs border border-emerald-500/20">
                USDT
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Tether USD</p>
                <p className="text-xs text-foreground/50 font-medium">USDT</p>
              </div>
            </div>
            <div className="text-right">
               {usdtLoading ? (
                <div className="h-6 w-24 bg-foreground/5 rounded animate-pulse ml-auto" />
              ) : (
                <>
                  <p className="font-mono font-medium text-lg tracking-tight tabular-nums">
                    {usdtFormatted ?? "0.00"}
                  </p>
                  <p className="text-xs text-foreground/40 font-medium">≈ $1.00</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
