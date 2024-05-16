---
title: Can I Use - Adapter Capabilities
sidebar_position: 2
---

## Preset Wallets

These preset wallets will be displayed as `Popular` on our kit modal by default.

> If you are a wallet developer and want to list your wallet below, feel free to contact our team 🥳 [Twitter@RazorDAO](https://twitter.com/RazorDAO)

- [Razor Wallet](https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii)
- [Sui Wallet](https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil)
- [Ethos Wallet](https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli)

## For Dapp Developers

### Can I Use with xxx Wallet?

Due to the adapter difference of each wallet, we present a function comparison table among wallet adapters.

:::tip
Remember to handle exceptional cases if some wallet adapters do not support certain features.
:::

### Hook `useWallet`

|                                               wallet                                                | signAndExecuteTransactionBlock | signPersonalMessage | chain | account.publicKey |
| :-------------------------------------------------------------------------------------------------: | :----------------------------: | :-----------------: | :---: | :---------------: |
|                              [Razor Wallet](https://razorwallet.xyz/)                               |               ✅               |         ✅          |  ✅   |        ✅         |
| [Sui Wallet](https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil) |               ✅               |         ✅          |  ✅   |        ❌         |
|                              [Ethos Wallet](https://ethoswallet.xyz/)                               |               ✅               |         ✅          |  ❌   |        ❌         |


### How to list my wallet on Razor Wallet Kit?

You can contact our team via [Twitter@RazorDAO](https://twitter.com/RazorDAO) to list your wallet on Razor Wallet Kit.

Or submit a PR to our [repo](https://github.com/razorlabsorg/razor-wallet-kit/pulls), modify the following files:

```ts
// packages/kit/src/wallet/preset-wallets/presets.ts
export enum PresetWallet {
  // ... resgisted wallet enum
  // note that this name should match with your wallet adapter's name
  // for auto detection and display purposes
  YOUR_WALLET = 'Your Wallet',
}

export const YourWallet = defineWallet({
  name: PresetWallet.YOUR_WALLET,
  iconUrl:
    'base64 encoded image (recommended, optimize the size!!) / external url',
  downloadUrl: {
    browserExtension: 'chrome extension installation url',
  },
});
```

```ts
// packages/kit/src/wallet/preset-wallets/index.ts
export const AllDefaultWallets = [
  ...[
    // ... registed wallets
    presets.YourWallet,
  ].sort((a, b) => (a.name < b.name ? -1 : 1)),
];
```
