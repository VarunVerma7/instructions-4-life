import React from "react";
import ReactDOM from "react-dom";

import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

export function Example() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  return (
    <div>
      {!account && (
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      )}
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
    </div>
  );
}
