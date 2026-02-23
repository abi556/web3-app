import { formatUnits } from "viem";

export function formatBalance(value: bigint, decimals: number, displayDecimals: number): string {
  const formatted = formatUnits(value, decimals);
  const [integer, fraction = ""] = formatted.split(".");
  return `${integer}.${fraction.padEnd(displayDecimals, "0").slice(0, displayDecimals)}`;
}

export function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
