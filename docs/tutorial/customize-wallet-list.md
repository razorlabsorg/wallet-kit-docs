---
title: Customize Wallet List
sidebar_position: 3
---

You can configure your wallet list on the select modal by passing `defaultWallets` throught `<SuiWalletProvider />`.

We've prepared a set of [preset wallets](../CanIUse#preset-wallets) that you can import directly, also you can customize new wallet items. By default, we include all the preset wallets.

## Default Usage

:::tip

All the `defaultWallets` will be listed in the Popular section on the wallet-select modal.

:::

```jsx
import {
  SuiWalletProvider,
  RazorWallet,
  SuiWallet,
  EthosWallet,
  IDefaultWallet,
} from '@razorlabs/wallet-kit';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SuiWalletProvider defaultWallets={[
      // order defined by you
      RazorWallet,
      SuiWallet,
      EthosWallet,
      // ...
    ]}>
    {/* or just leave it as default which contains all preset wallets */}
    {/*<SuiWalletProvider>*/}
      <App />
    </SuiWalletProvider>
  </React.StrictMode>
)
```

## Using Hook Only

If you use our `useSuiWallet` hook only and have a customized wallet-select modal, then you can access configured wallet list by `configuredWallets` from `useSuiWallet`. Also we provide `detectedWallets` for those wallets which are not preconfigured but detected from user browser.

```tsx
// make sure this code is under <SuiWalletProvider />

function App() {
  const { configuredWallets, detectedWallets } = useSuiWallet();

  return (
    <>
      <CustomizedWalletModal
        list={[...configuredWallets, ...detectedWallets]}
      />
    </>
  );
}
```

## Define New Wallet

If our wallet presets do not cover the wallets you need, you can simply define it using our `defineWallet` function.

```jsx
import {
  SuiWalletProvider,
  defineWallet,
} from '@razorlabs/wallet-kit';

// customized wallet must support @mysten/wallet-standard
const CustomizeWallet = defineWallet({
  name: "myWallet",
  iconUrl: "external url or data url",
  downloadUrl: {
    browserExtension: 'download page url of chrome extension...'
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SuiWalletProvider defaultWallets={[
      CustomizeWallet,
      // ...
    ]}>
      <App />
    </SuiWalletProvider>
  </React.StrictMode>
)
```
