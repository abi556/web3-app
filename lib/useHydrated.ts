import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns `false` during SSR and the first client render,
 * then `true` after hydration completes.
 * Use this to guard any UI that depends on client-only state
 * (wallet connection, theme, window size, etc.).
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}
