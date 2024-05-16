---
sidebar_position: 3
---

# useAptosWallet

## Description

`useAptosWallet` is the most useful React Hook to play with. For details of React Hook, check
the [React doc](https://reactjs.org/docs/hooks-intro.html).

It retrieves all the properties and functions from [AptosWalletProvider](/docs/components/aptoswalletprovider), with which you can
get properties and call functions of a connected wallet.

:::tip

Make sure it runs in a React component under `AptosWalletProvider`

:::

## Examples

### Basic Usage

We start with a simple senario like getting information from the connected wallet .

```jsx
import { useAptosWallet } from '@razorlabs/wallet-kit';

function App() {
  const wallet = useAptosWallet();
  console.log('wallet status', wallet.status);
  console.log('connected wallet name', wallet.name);
  console.log('connected account info', wallet.account);
}
```

### Sign Message

[Message signing](https://en.bitcoin.it/wiki/Message_signing#:~:text=Message%20signing%20is%20the%20action,they%20correspond%20to%20each%20other.)
is an important action to **verify whether an approval is confirmed by the owner of an account**.

It is useful for DApp to ask user's approval for scenarios like approving Terms of Service and Privacy Policy (Below is
an example of message signing in OpenSea, the NFT marketplace in Ethereum)

![Example of message signing in the NFT marketplace OpenSea](/img/signmsg.png)

Here is an example for signing a simple message "Hello World".

```tsx
import { useAptosWallet } from '@razorlabs/wallet-kit';

function App() {
  const wallet = useAptosWallet();

  async function handleSignMsg() {
    try {
      const msg = 'Hello world!';

      const result = await wallet.signMessage({
        message: msg,
      });
      // verify signature with publicKey and SignedMessage (params are all included in result)
      if (!result) {
        console.log(
          'signMessage succeed, but verify signedMessage failed'
        );
      } else {
        console.log(
          'signMessage succeed, and verify signedMessage succeed!'
        );
      }
    } catch (e) {
      console.error('signMessage failed', e);
    }
  }

  return <button onClick={handleSignMsg}> Sign Message </button>;
}
```

### Get the connected chain (network) of wallet

:::caution

Since this is not a standard feature, not all the wallet has implemented. Check [Can I Use](/docs/CanIUse) for further
information.

:::

Your dapp can get the current connected chain of wallet.

:::info
For most wallets, if **user switches network inside the wallet**, the value **WOULD NOT** get updated. (Except for Razor Wallet, we implemented this network change notification for a better development experience)
:::

```tsx
import { useAptosWallet } from '@razorlabs/wallet-kit';

function App() {
  const wallet = useAptosWallet();

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('current connected chain (network)', wallet.chain?.name); // example 
  }, [wallet.connected]);
}
```

## API References

### name

The name of connected wallet.

| Type                | Default   |
| ------------------- | --------- |
| string \| undefined | undefined |

### connection status

The connection status of wallet.

| Properties | Type                                          | Default        |
| ---------- | --------------------------------------------- | -------------- |
| connecting | boolean                                       | false          |
| connected  | boolean                                       | false          |
| status     | 'disconnected' \| 'connecting' \| 'connected' | 'disconnected' |

```ts
const { status, connected, connecting } = useAptosWallet();

// the assert expressions are equally the same
assert(status === 'disconnected', !connecting && !connected); // not connect to wallet
assert(status === 'connecting', connecting); // now connecting to the wallet
assert(status === 'connected', connected); // connected to the wallet
```

### account

The account info in the connected wallet, including address, publicKey etc.

| Type                                       | Default   |
| ------------------------------------------ | --------- |
| [WalletAccount](/docs/Types#WalletAccount) | undefined |

```ts
const { connected, account } = useAptosWallet();

function printAccountInfo() {
  if (!connected) return;
  console.log(account?.address);
  console.log(account?.publicKey);
}
```

### address

Alias for `account.address`

### select

| Type                         | Default |
| ---------------------------- | ------- |
| (WalletName: string) => void |         |

### getAccounts

Get all the accessible accounts returned by wallet.

| Type                      | Default |
| ------------------------- | ------- |
| `() => Promise<string[]>` |         |

The getAccounts will get the current wallet's account address. Now one wallet only have one account.

```jsx
import { useAptosWallet } from '@razorlabs/wallet-kit';

function YourComponent() {
  const wallet = useAptosWallet();

  function handleGetAccounts() {
    if (!wallet.connected) return;
    getAccounts().then((accounts) => {
      console.log(accounts);
    });
  }
}
```

### chains

Configuration of supported chains from WalletProvider

| Type                          | Default                             |
| ----------------------------- | ----------------------------------- |
| [Chain](/docs/Types/#Chain)[] | [DefaultChains](/docs/Types/#Chain) |

### chain

Current connected chain of wallet.

Might not be synced with the wallet if the wallet doesn't support wallet-standard "change" event.

| Type   | Default                                                                                 |
| ------ | --------------------------------------------------------------------------------------- |
| string | the first value of configured [chains](./#chains) or [UnknownChain](/docs/Types/#Chain) |

### adapter

The adapter normalized from the raw adapter of the connected wallet. You can call all the properties and functions on
it, which is followed
the [@razorlabs/wallet-standard](https://github.com/razorlabsorg/wallet-standard)

| Type                                         | Default   |
| -------------------------------------------- | --------- | --------- |
| [IWalletAdapter](/docs/Types#IWalletAdapter) | undefined | undefined |

