import "../styles/globals.css";

import type { AppProps } from "next/app";

import store from "../app/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { getDefaultProvider } from "ethers";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DAppProvider>
  );
}
