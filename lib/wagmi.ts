import { http, createConfig, fallback } from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    walletConnect({ projectId: walletConnectProjectId }),
  ],
  transports: {
    [mainnet.id]: alchemyKey
      ? fallback([
          http(`https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}`),
          http(),
        ])
      : http(),
  },
});
