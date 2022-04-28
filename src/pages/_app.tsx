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
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/abel";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
};

const theme = extendTheme({
  fonts: {
    body: { "font-family": "Abel" },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DAppProvider>
  );
}
