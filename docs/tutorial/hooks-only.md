---
title: Use Hooks Only (without UI)
sidebar_position: 4
---

This section will introduce how to only use the provided hooks.

It could be useful when you want to customize your UI components together with our hooks.

### Customize your UI components with Kit Hooks

Firstly, add `SuiWalletProvider` to wrap your App. The SuiWalletProvider component provides the context of data and functions.

> For customizing the default wallet list, check [SuiWalletProvider](/docs/components/SuiWalletProvider#customize-your-wallet-list-on-modal)

```jsx
import { SuiWalletProvider } from '@razorlabs/wallet-kit';

function RootComponent() {
  return (
    <SuiWalletProvider>
      <App />
    </SuiWalletProvider>
  );
}
```

Next, you are supposed to have **a connect button for wallet connection** and **a display area for account info after connection**.

In this case, you can manage these two components by `connected` status from `useSuiWallet` hook.
And get active account address after connected.

```jsx
import { useSuiWallet } from '@razorlabs/wallet-kit';
import { useState, useEffect } from 'react';

function App() {
  const wallet = useSuiWallet();

  return (
    <div>
      {wallet.connected ? (
        <AccountInfo address={wallet?.address} />
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
```

For your wallet-select modal component, let's just call it WalletSelector.

You can use `select` method from `useSuiWallet` hook to connect the one of the SUI wallets.

```jsx
import { useSuiWallet } from '@razorlabs/wallet-kit';

function WalletSelector() {
  const {
    select, // select
    configuredWallets, // default wallets
    detectedWallets, // Movement-standard wallets detected from browser env
    allAvailableWallets, // all the installed Movement-standard wallets
  } = useSuiWallet();

  return [...configuredWallets, ...detectedWallets].map((wallet) => (
    <button
      key={wallet.name}
      onClick={() => {
        // check if user installed the wallet
        if (!wallet.installed) {
          // do something like guiding users to install
          return;
        }
        select(wallet.name);
      }}
    >
      Connect to {wallet.name}
    </button>
  ));
}
```

T
