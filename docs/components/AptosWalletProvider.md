---
sidebar_position: 2
---

# AptosWalletProvider

## Description

The `AptosWalletProvider` provides the essential data and functions for our kit. And it is the entrypoint for customized configurations.

:::tip

So you need to wrap all the kit hooks and components under `AptosWalletProvider` before you start to use them.

:::

## Examples

### Basic Usage

```jsx
import ReactDOM from 'react-dom';
import { AptosWalletProvider } from '@razorlabs/wallet-kit';

function Root() {
  // wrap your app component
  <AptosWalletProvider>
    <App />
  </AptosWalletProvider>;
}

ReactDOM.render(<Root />, docoument.getElementById('root'));
```

### Customize your wallet list on modal

Check [#Tutorial/Customize Wallet List](/docs/tutorial/customize-wallet-list) for details.

### Configure supported chains (networks)

Check [#Tutorial/Configure supported chains (networks)](/docs/tutorial/configure-chain) for details.

## API

### Props

|      Prop      |                     Type                     |                      Default                       |                                Description                                |
| :------------: | :------------------------------------------: | :------------------------------------------------: | :-----------------------------------------------------------------------: |
| defaultWallets | [IDefaultWallet](/docs/Types#idefaultwallet) | [...[AllPresetWallets](../CanIUse#preset-wallets)] | Configure wallet list for dapp, by default we load all the preset wallets |
|     chains     |         [Chain](/docs/Types#chain)[]         |         [DefaultChains](/docs/Types#chain)         |              Configure supported chains (networks) for dapp               |
|  autoConnect   |                   boolean                    |                        true                        |          Auto connect to the last connected wallet when launched          |
