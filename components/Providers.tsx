"use client";

import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function Providers({
  children,
  ...themeProps
}: { children: React.ReactNode } & Omit<ThemeProviderProps, "children">) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <NextThemesProvider {...themeProps}>
      <WagmiProvider config={config} reconnectOnMount={false}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </NextThemesProvider>
  );
}
