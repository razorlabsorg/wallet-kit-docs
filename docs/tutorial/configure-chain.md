---
title: Configure supported chains (networks)
sidebar_position: 1
---

You can configure the supported chains (networks) for your dapp.

```tsx
import {
  SuiWalletProvider,
  Chain,
  SuiDevnetChain,
  SuiTestnetChain,
  SuiMainnetChain,
  DefaultChains,
} from '@razorlabs/wallet-kit';

const customChain: Chain = {
  id: '',
  name: '',
  rpcUrl: '',
};

const SupportedChains: Chain[] = [
  // ...DefaultChains,
  M2DevnetChain,
  M2TestnetChain,
  M2MainnetChain,
  // NOTE: you can add custom chain (network),
  // but make sure the connected wallet does support it
  // customChain,
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SuiWalletProvider chains={SupportedChains}>
      <App />
    </SuiWalletProvider>
  </React.StrictMode>
);
```
