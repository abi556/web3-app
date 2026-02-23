"use client";

import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { mainnet } from "wagmi/chains";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Copy, Check, LogOut, AlertTriangle } from "lucide-react";
import { useHydrated } from "@/lib/useHydrated";
import { truncateAddress } from "@/lib/format";

function friendlyError(error: Error): string {
  const msg = error.message.toLowerCase();
  if (msg.includes("user rejected") || msg.includes("user denied")) {
    return "Connection rejected";
  }
  if (msg.includes("not installed") || msg.includes("no provider")) {
    return "Wallet not found — install MetaMask";
  }
  if (msg.includes("already pending")) {
    return "Check your wallet for a pending request";
  }
  return "Connection failed — try again";
}

function WrongNetworkBanner() {
  const { switchChain, isPending } = useSwitchChain();

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-sm">
      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
      <div className="flex-1">
        <p className="font-medium text-amber-600 dark:text-amber-400">Wrong network</p>
        <p className="text-xs text-foreground/50">Switch to Ethereum Mainnet to view balances</p>
      </div>
      <button
        onClick={() => switchChain({ chainId: mainnet.id })}
        disabled={isPending}
        className="px-3 py-1.5 text-xs font-medium bg-amber-500/20 hover:bg-amber-500/30 text-amber-600 dark:text-amber-400 rounded-md transition-colors disabled:opacity-50"
      >
        {isPending ? "Switching..." : "Switch"}
      </button>
    </div>
  );
}

export function ConnectWalletButton() {
  const mounted = useHydrated();
  const { address, isConnected, isConnecting, isReconnecting, chain } = useAccount();
  const { connect, connectors, error: connectError, reset } = useConnect();
  const { disconnect } = useDisconnect();

  const [showConnectors, setShowConnectors] = useState(false);
  const [showDisconnect, setShowDisconnect] = useState(false);
  const [copied, setCopied] = useState(false);
  const connectRef = useRef<HTMLDivElement>(null);
  const disconnectRef = useRef<HTMLDivElement>(null);

  const isWrongNetwork = isConnected && chain?.id !== mainnet.id;

  const copyAddress = useCallback(async () => {
    if (!address) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [address]);

  useEffect(() => {
    if (!showConnectors && connectError) {
      const timer = setTimeout(reset, 3000);
      return () => clearTimeout(timer);
    }
  }, [showConnectors, connectError, reset]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (connectRef.current && !connectRef.current.contains(event.target as Node)) {
        setShowConnectors(false);
      }
      if (disconnectRef.current && !disconnectRef.current.contains(event.target as Node)) {
        setShowDisconnect(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowConnectors(false);
        setShowDisconnect(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!mounted || isReconnecting) {
    return (
      <button
        disabled
        className="px-6 py-2 border border-foreground/30 rounded-full text-sm font-medium animate-pulse"
      >
        {!mounted ? "Connect Wallet" : "Connecting..."}
      </button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="relative" ref={disconnectRef}>
        <button
          onClick={() => setShowDisconnect(!showDisconnect)}
          className={`flex items-center gap-2 px-5 py-2 border rounded-full hover:bg-foreground hover:text-background transition-colors font-medium text-sm ${
            isWrongNetwork ? "border-amber-500 text-amber-500" : "border-current"
          }`}
          aria-label="Wallet options"
          aria-expanded={showDisconnect}
        >
          <span className={`w-2 h-2 rounded-full ${isWrongNetwork ? "bg-amber-500" : "bg-green-500"}`} />
          {truncateAddress(address)}
          <ChevronDown className="w-3 h-3" />
        </button>

        {showDisconnect && (
          <div className="absolute right-0 mt-2 w-64 bg-background border border-accent/20 shadow-lg rounded-lg py-2 z-50">
            {/* Wrong Network Warning */}
            {isWrongNetwork && (
              <div className="px-3 pb-2 mb-2 border-b border-accent/10">
                <WrongNetworkBanner />
              </div>
            )}

            {/* Network */}
            <div className="px-4 pb-2 mb-2 border-b border-accent/10">
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 font-bold mb-1">Network</p>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isWrongNetwork ? "bg-amber-500" : "bg-green-500"}`} />
                <span className="text-sm font-medium">{chain?.name ?? "Unknown"}</span>
              </div>
            </div>

            {/* Address + Copy */}
            <div className="px-4 pb-2 mb-2 border-b border-accent/10">
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 font-bold mb-1">Address</p>
              <button
                onClick={copyAddress}
                className="flex items-center gap-2 w-full text-left group hover:bg-foreground/5 -mx-1 px-1 py-1 rounded transition-colors"
              >
                <span className="text-sm font-mono text-foreground/80 truncate">
                  {address}
                </span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-foreground/30 group-hover:text-foreground/60 shrink-0 transition-colors" />
                )}
              </button>
            </div>

            {/* Disconnect */}
            <button
              onClick={() => {
                disconnect();
                setShowDisconnect(false);
              }}
              className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-500/5 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Disconnect
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={connectRef}>
      <button
        onClick={() => {
          reset();
          setShowConnectors(!showConnectors);
        }}
        disabled={isConnecting}
        className={`px-6 py-2 border border-current rounded-full hover:bg-foreground hover:text-background transition-colors font-medium text-sm ${
          isConnecting ? "animate-pulse opacity-70" : ""
        }`}
        aria-label="Connect wallet"
        aria-expanded={showConnectors}
      >
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </button>

      {showConnectors && (
        <div className="absolute right-0 mt-2 w-56 bg-background border border-accent/20 shadow-lg rounded-lg py-2 z-50">
          <div className="px-4 py-1 text-xs text-foreground/50 border-b border-accent/10 pb-2 mb-1">
            Choose wallet
          </div>

          {connectError && (
            <div className="px-4 py-2 text-xs text-red-500 bg-red-500/5 border-b border-accent/10">
              {friendlyError(connectError)}
            </div>
          )}

          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                reset();
                connect({ connector });
              }}
              disabled={isConnecting}
              className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-foreground/5 transition-colors disabled:opacity-50"
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
