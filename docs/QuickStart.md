---
title: Quick Start
sidebar_position: 1
---

Hello frens 👋 Welcome onboard 🛳

Razor wallet kit is a wallet aggregator for DApps to interact with all the wallets in Movement ecosystem easily. 🥳

Try out our kit and connect your dapp in just few seconds. 🪄

> ⭐️ Have fun with [Demo Playground](https://kit-demo.razorwallet.xyz/)

- [Example repo](https://github.com/razorlabsorg/wallet-kit-vite-example)

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

Next, make sure `@mysten/sui` is installed in your project if your app is built on Sui Move. For Aptos Move apps, make sure you have `@aptos-labs/ts-sdk` installed. If not, install either one of them depending on the chain you're building on.

```shell
npm install @mysten/sui
# or
yarn add @mysten/sui
# or
pnpm install @mysten/sui
```

```shell
npm install @aptos-labs/ts-sdk
# or
yarn add @aptos-labs/ts-sdk
# or
pnpm install @aptos-labs/ts-sdk
```

Then wrap your `<App />` within one of our context providers, so that our hooks can work nicely inside your dapp. If your app is Aptos based you should use `<AptosWalletProvider>`. If your App is Sui based you should use `<SuiWalletProvider>`. If your app supports both networks you can use both context providers. When using both providers, order of nesting doesn't matter.

Oh don't forget to import our css to enable default styles 🎨

```jsx
import { SuiWalletProvider } from '@razorlabs/wallet-kit';
import '@razorlabs/wallet-kit/style.css';

// take react@18 project as an example
ReactDOM.createRoot(document.getElementById('root')).render(
  <SuiWalletProvider>
    <App />
  </SuiWalletProvider>
);
```
# or 

```jsx
import { AptosWalletProvider } from '@razorlabs/wallet-kit';
import '@razorlabs/wallet-kit/style.css';

// take react@18 project as an example
ReactDOM.createRoot(document.getElementById('root')).render(
  <AptosWalletProvider>
    <App />
  </AptosWalletProvider>
);
```

> By default, razor wallet kit will load all the [preset wallets](./CanIUse#preset-wallets) to the list💡

## 🕹 Place ConnectButton

:::tip
We recommend to use hooks together with our components. But if you want to use our hooks only with your customized UI
components, follow the instruction [#Use Hooks Only](/docs/tutorial/hooks-only)
:::

Just import our `<SuiConnectButton />` or `<AptosConnectButton />` and place it to wherever you like, such as Header.

```jsx
import { SuiConnectButton } from '@razorlabs/wallet-kit';


const App = () => {
  return (
    <>
      <header>
        <SuiConnectButton/>
      </header>
      <
      ... />
    </>
  )
};
```

# or

```jsx
import { AptosConnectButton } from '@razorlabs/wallet-kit';

const App = () => {
  return (
    <>
      <header>
        <AptosConnectButton/>
      </header>
      <
      ... />
    </>
  )
};
```

## 🪝 Use Wallet Capabilities

After your dapp connects to a wallet that is supported
your dapp is already empowered and able to call wallet capabilities.🎉

> Please explore the docs for further usage information 💡

```jsx
import {useSuiWallet} from '@razorlabs/wallet-kit';
import {Transaction} from "@mysten/sui";

const App = () => {
  const wallet = useSuiWallet()

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name)
    console.log('account address: ', wallet.account?.address)
    console.log('account publicKey: ', wallet.account?.publicKey)
  }, [wallet.connected])

  // launch a move call for the connected account via wallet
  async function handleMoveCall() {
    const tx = new Transaction();
    const packageObjectId = "0x1";
    tx.moveCall({
      target: `${packageObjectId}::nft::mint`,
      arguments: [tx.pure("Example NFT")],
    });
    await wallet.signAndExecuteTransaction({
      transaction: tx,
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

# or

```jsx
import {useAptosWallet} from '@razorlabs/wallet-kit';

const App = () => {
  const wallet = useAptosWallet()

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name)
    console.log('account address: ', wallet.account?.address)
    console.log('account publicKey: ', wallet.account?.publicKey)
  }, [wallet.connected])

  // launch a move call for the connected account via wallet
  async function handleSignMessage() {
    await wallet.signMessage({
      message: "Hello World",
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
