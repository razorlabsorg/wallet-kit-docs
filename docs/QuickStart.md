---
title: Quick Start
sidebar_position: 1
---

Hello frens 👋 Welcome onboard 🛳

Razor wallet kit is a wallet aggregator for DApps to interact with all the wallets in Movement ecosystem easily. 🥳

Try out our kit and connect your dapp in just few seconds. 🪄

> ⭐️ Have fun with [Demo Playground](https://kit-demo.razorwallet.xyz/)

- [Example repo](https://github.com/razorlabs/wallet-kit-vite-example)

## 🔨 Setup

First of all, let's install the npm package `@razorlabs/wallet-kit` to your project.

> npm package: https://www.npmjs.com/package/@razorlabs/wallet-kit

```shell
npm install @razorlabs/wallet-kit
# or
yarn add @razorlabs/wallet-kit
# or
pnpm install @razorlabs/wallet-kit
```

Next, make sure `@mysten/sui.js` is installed in your project. If not, install it as well.

```shell
npm install @mysten/sui.js
# or
yarn add @mysten/sui.js
# or
pnpm install @mysten/sui.js
```

Then wrap your `<App />` with our context provider, so that our hooks can work nicely inside your dapp.

Oh don't forget to import our css to enable default styles 🎨

```jsx
import { WalletProvider } from '@razorlabs/wallet-kit';
import '@razorlabs/wallet-kit/style.css';

// take react@18 project as an example
ReactDOM.createRoot(document.getElementById('root')).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);
```

> By default, razor wallet kit will load all the [preset wallets](./CanIUse#preset-wallets) to the list💡

## 🕹 Place ConnectButton

:::tip
We recommend to use hooks together with our components. But if you want to use our hooks only with your customized UI
components, follow the instruction [#Use Hooks Only](/docs/tutorial/hooks-only)
:::

Just import our `<ConnectButton />` and place it to wherever you like, such as Header.

```jsx
import {ConnectButton} from '@razorlabs/wallet-kit';

const App = () => {
  return (
    <>
      <header>
        <ConnectButton/>
      </header>
      <
      ... />
    </>
  )
};
```

## 🪝 Use Wallet Capabilities

After your dapp connects to a wallet that
supports [Movement wallet-standard](https://github.com/razorlabsorg/wallet-standard),
your dapp is already empowered and able to call wallet capabilities.🎉

> Please explore the docs for further usage information 💡

```jsx
import {useWallet} from '@razorlabs/wallet-kit';
import {TransactionBlock} from "@mysten/sui.js";

const App = () => {
  const wallet = useWallet()

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name)
    console.log('account address: ', wallet.account?.address)
    console.log('account publicKey: ', wallet.account?.publicKey)
  }, [wallet.connected])

  // launch a move call for the connected account via wallet
  async function handleMoveCall() {
    const tx = new TransactionBlock();
    const packageObjectId = "0x1";
    tx.moveCall({
      target: `${packageObjectId}::nft::mint`,
      arguments: [tx.pure("Example NFT")],
    });
    await wallet.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
  }

  // launch a move call for the connected account via wallet
  async function handleSignMessage() {
    await wallet.signPersonalMessage({
      message: new TextEncoder().encode("Hello World"),
    });
  }

  return (<.../>)
};
```

Continue to BUIDL your amazing dapp and join the ongoing Movement!

## 📚 More Tutorials

Check out this section: [#Tutorials](/docs/category/tutorials)

## 💧 Demo Playground

Feel free to play with our [Demo Playground](https://kit-demo.razorwallet.xyz)
🔗 ([Github repo](https://github.com/razorlabsorg/wallet-kit-vite-example))
