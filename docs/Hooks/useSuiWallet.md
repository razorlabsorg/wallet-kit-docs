---
sidebar_position: 6
---

# useSuiWallet

## Description

`useSuiWallet` is the most useful React Hook to play with. For details of React Hook, check
the [React doc](https://reactjs.org/docs/hooks-intro.html).

It retrieves all the properties and functions from [WalletProvider](/docs/components/SuiWalletProvider), with which you can
get properties and call functions of a connected wallet.

:::tip

Make sure it runs in a React component under `WalletProvider`

:::

## Examples

### Basic Usage

We start with a simple senario like getting information from the connected wallet .

```jsx
import { useSuiWallet } from '@razorlabs/wallet-kit';

function App() {
  const wallet = useSuiWallet();
  console.log('wallet status', wallet.status);
  console.log('connected wallet name', wallet.name);
  console.log('connected account info', wallet.account);
}
```

### Sign and Execute Transactions

Here we define a `moveCall` transaction to implement a simple nft minting example.

```jsx
import { useSuiWallet } from '@razorlabs/wallet-kit';
import { Transaction } from '@mysten/sui';

function App() {
  const wallet = useSuiWallet();

  async function handleSignAndExecuteTx() {
    if (!wallet.connected) return;

    // define a programmable transaction
    const tx = new Transaction();
    const packageObjectId = '0xXXX';
    tx.moveCall({
      target: `${packageObjectId}::nft::mint`,
      arguments: [tx.pure('Example NFT')],
    });

    try {
      // execute the programmable transaction
      const resData = await wallet.signAndExecuteTransaction({
        transaction: tx,
      });
      console.log('nft minted successfully!', resData);
      alert('Congrats! your nft is minted!');
    } catch (e) {
      console.error('nft mint failed', e);
    }
  }

  return <button onClick={handleSignAndExecuteTx}> Mint Your NFT !</button>;
}
```

### Sign Message

[Message signing](https://en.bitcoin.it/wiki/Message_signing#:~:text=Message%20signing%20is%20the%20action,they%20correspond%20to%20each%20other.)
is an important action to **verify whether an approval is confirmed by the owner of an account**.

It is useful for DApp to ask user's approval for scenarios like approving Terms of Service and Privacy Policy (Below is
an example of message signing in OpenSea, the NFT marketplace in Ethereum)

![Example of message signing in the NFT marketplace OpenSea](/img/signmsg.png)

Here is an example for signing a simple message "Hello World".

> Notice that all the params are Uint8Array (i.e. bytes) type. For browser app, you can
> use [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) to encode and decode.

```tsx
import { useSuiWallet } from '@razorlabs/wallet-kit';
import * as tweetnacl from 'tweetnacl';

function App() {
  const wallet = useSuiWallet();

  async function handleSignMsg() {
    try {
      const msg = 'Hello world!';
      // convert string to Uint8Array
      const msgBytes = new TextEncoder().encode(msg);

      const result = await wallet.signPersonalMessage({
        message: msgBytes,
      });
      // verify signature with publicKey and SignedMessage (params are all included in result)
      const verifyResult = await wallet.verifySignedMessage(
        result,
        wallet.account.publicKey
      );
      if (!verifyResult) {
        console.log(
          'signPersonalMessage succeed, but verify signedMessage failed'
        );
      } else {
        console.log(
          'signPersonalMessage succeed, and verify signedMessage succeed!'
        );
      }
    } catch (e) {
      console.error('signPersonalMessage failed', e);
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

This is because Sui team suggests each dapp should separate the environments for each chain (sui:devnet, sui:testnet, sui:mainnet).
And the active chain returned by the connected wallet could be used to match the dapp's environment.

In a nutshell, eliminating the need to switch network for dapp is a better user experience for a long term.
:::

```tsx
import { useSuiWallet } from '@razorlabs/wallet-kit';
import * as tweetnacl from 'tweetnacl';

function App() {
  const wallet = useSuiWallet();

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('current connected chain (network)', wallet.chain?.name); // example output: "movement:m2:devnet", "movement:m2:testnet" or "movement:m2:mainnet"
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
const { status, connected, connecting } = useSuiWallet();

// the assert expressions are equally the same
assert(status === 'disconnected', !connecting && !connected); // not connect to wallet
assert(status === 'connecting', connecting); // now connecting to the wallet
assert(status === 'connected', connected); // connected to the wallet
```

### account

The account info in the connected wallet, including address, publicKey etc.

| Type                                       | Default   |
| ------------------------------------------ | --------- |
| [WalletAccount](/docs/Types#walletaccount) | undefined |

```ts
const { connected, account } = useSuiWallet();

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
import { useSuiWallet } from '@razorlabs/wallet-kit';

function YourComponent() {
  const wallet = useSuiWallet();

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
| [Chain](/docs/Types#chain)[] | [DefaultChains](/docs/Types#chain) |

### chain

Current connected chain of wallet.

Might not be synced with the wallet if the wallet doesn't support wallet-standard "change" event.

| Type   | Default                                                                                 |
| ------ | --------------------------------------------------------------------------------------- |
| string | the first value of configured [chains](/docs/Types#chain) or [UnknownChain](/docs/Types#chain) |

### adapter

The adapter normalized from the raw adapter of the connected wallet. You can call all the properties and functions on
it, which is followed
the [@mysten/wallet-standard](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/wallet-standard)

| Type                                         | Default   |
| -------------------------------------------- | --------- | --------- |
| [IWalletAdapter](/docs/Types#iwalletadapter) | undefined | undefined |

### signAndExecuteTransaction

The universal function to send and execute transactions via connected wallet.

| Type                                                                                                                                                                                    | Default |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `({transaction: Transaction, requestType?: ExecuteTransactionRequestType, options?: SuiTransactionBlockResponseOptions}) => Promise<SuiSignAndExecuteTransactionOutput>` |         |

### signPersonalMessage

The function is for message signing.

| Type                                                                            | Default |
| ------------------------------------------------------------------------------- | ------- |
| `(input: {message: Uint8Array}) => Promise<{signature: string; bytes: string}>` |         |

### verifySignedMessage

This function is for verifying the output of `signPersonalMessage` following the Sui standard. Returns `true` if the returned signature matches the message to be signed and the signer's publicKey.

For details please check [here](https://github.com/razorlabsorg/razor-wallet-kit/blob/master/packages/m2-sdk/src/utils/verifySignedMessage.ts)

| Type                                                                     | Default |
| ------------------------------------------------------------------------ | ------- |
| `(input: {signature: string; messageBytes: string}) => Promise<boolean>` |         |

### on

The function for wallet event listening. Returns the off function to remove listener.

| Type                                                                                    | Default |
| --------------------------------------------------------------------------------------- | ------- |
| `<E extends WalletEvent>(event: E, listener: WalletEventListeners[E], ) => () => void;` |         |

All the wallet events:

| Event         | Listener                                                                               | Description                                               |
| ------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| accountChange | `(params: { account: WalletAccount; }) => void;`                                       | Emit when wallet app changes its account                  |
| featureChange | `(params: { features: string[]; }) => void;`                                           | Emit when wallet app changes its wallet-standard features |
| change        | `(params: { chain?: string, account?: WalletAccount; features?: string[]; }) => void;` | Raw change event defined by wallet-standard               |

## Deprecated API

### signAndExecuteTransactionBlock

Deprecated, use [signAndExecuteTransaction](#signandexecutetransaction) instead.

### executeMoveCall and executeSerializedMoveCall

Deprecated, use [signAndExecuteTransaction](#signandexecutetransaction) instead.

### wallet

Deprecated, use [adapter](#adapter) instead.

```diff
const wallet = useSuiWallet();
- console.log(wallet.wallet.name);
+ console.log(wallet.adapter.name);
```

### getPublicKey

Deprecated, use [account.publicKey](#account) instead.

```diff
const wallet = useSuiWallet();
- console.log(wallet.getPublicKey());
+ console.log(wallet.account.publicKey);
```

### signMessage

Deprecated, use [signPersonalMessage](#signpersonalmessage) instead.

| Type                                                                                   | Default |
| -------------------------------------------------------------------------------------- | ------- |
| `(input: {message: Uint8Array}) => Promise<{signature: string; messageBytes: string}>` |         |
