"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import { ChevronDown } from "lucide-react";

const emptySubscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function ConnectWalletButton() {
  const mounted = useHydrated();
  const { address, isConnected, isConnecting, isReconnecting } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const [showConnectors, setShowConnectors] = useState(false);
  const [showDisconnect, setShowDisconnect] = useState(false);
  const connectRef = useRef<HTMLDivElement>(null);
  const disconnectRef = useRef<HTMLDivElement>(null);

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

  if (!mounted || isConnecting || isReconnecting) {
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
          className="flex items-center gap-2 px-5 py-2 border border-current rounded-full hover:bg-foreground hover:text-background transition-colors font-medium text-sm"
          aria-label="Wallet options"
          aria-expanded={showDisconnect}
        >
          <span className="w-2 h-2 rounded-full bg-green-500" />
          {truncateAddress(address)}
          <ChevronDown className="w-3 h-3" />
        </button>

        {showDisconnect && (
          <div className="absolute right-0 mt-2 w-48 bg-background border border-accent/20 shadow-lg rounded-sm py-1 z-50">
            <div className="px-4 py-2 text-xs text-foreground/50 border-b border-accent/10">
              Connected
            </div>
            <div className="px-4 py-2 text-xs text-foreground/70 font-mono">
              {truncateAddress(address)}
            </div>
            <button
              onClick={() => {
                disconnect();
                setShowDisconnect(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-foreground/5 transition-colors"
            >
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
        onClick={() => setShowConnectors(!showConnectors)}
        className="px-6 py-2 border border-current rounded-full hover:bg-foreground hover:text-background transition-colors font-medium text-sm"
        aria-label="Connect wallet"
        aria-expanded={showConnectors}
      >
        Connect Wallet
      </button>

      {showConnectors && (
        <div className="absolute right-0 mt-2 w-56 bg-background border border-accent/20 shadow-lg rounded-sm py-1 z-50">
          <div className="px-4 py-2 text-xs text-foreground/50 border-b border-accent/10">
            Choose wallet
          </div>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector });
                setShowConnectors(false);
              }}
              className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-foreground/5 transition-colors"
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
