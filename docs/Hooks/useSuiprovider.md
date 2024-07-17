---
sidebar_position: 5
---

# useSuiProvider

## Introduction

This hook is used to provide the Sui `SuiClient` interface in React Hooks style.

See [`@mysten/sui.js` package on npm](https://www.npmjs.com/package/@mysten/sui.js) or [SuiClient](https://sdk.mystenlabs.com/typescript/sui-client) for more information.

:::tip
This hook is internally **JUST** importing the `SuiClient` interface and **implemention** from [`@mysten/sui.js` package](https://www.npmjs.com/package/@mysten/sui.js). What we do is caring about versioning, state management, and other stuffs for you.
:::

```jsx
import { useSuiProvider } from '@razorlabs/wallet';
const endpoint = 'https://sui.devnet.m2.movementlabs.xyz'
function YourComponent() {
  const {
    getObject,
    getOwnedObjects,
    getBalance,
    // ... other methods
  } = useSuiProvider(endpoint);

  return <>...</>;
}
```

### Using the SuiClient interface

But if you use the `SuiClient` provided by `useSuiProvider`, you can call the `sui_executeTransaction` RPC endpoint in a more convenient way:

```jsx
function YourComponent() {
  const endpoint = 'https://sui.devnet.m2.movementlabs.xyz'
  const { executeTransactionBlock } = useSuiProvider(endpoint);

  return (
    <div
      onClick={async () => {
        // ... some code to get the tx_bytes, signature, and pub_key
        const resp = await executeTransactionBlock({
          transactionBlock: tx,
          signature: signature,
        });
        // resp is the response from the Client, and has detailed typings defination
      }}
    >...</>
  );
}
```
