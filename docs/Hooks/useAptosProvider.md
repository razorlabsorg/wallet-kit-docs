---
sidebar_position: 2
---

# useAptosProvider

## Introduction

This hook is used to provide the Aptos `AptosClient` interface in React Hooks style.

See [`aptos` package on npm](https://www.npmjs.com/package/aptos) for more information.

:::tip
This hook is internally **JUST** importing the `AptosClient` interface and **implemention** from [`aptos` package](https://www.npmjs.com/package/aptos). What we do is caring about versioning, state management, and other stuffs for you.
:::

```jsx
import { useAptosProvider } from '@razorlabs/wallet-kit';
function YourComponent() {
  const {
    getObject,
    getOwnedObjects,
    getBalance,
    // ... other methods
  } = useAptosProvider();

  return <>...</>;
}
```

### Using the AptosClient interface

But if you use the `AptosClient` provided by `useAptosProvider`, you can call the `signAndSubmitTransaction` RPC in a more convenient way:

```jsx
function YourComponent() {
  const { signAndSubmitTransaction } = useAptosProvider();

  return (
    <div
      onClick={async () => {
        // ... some code to get the raw transaction
        const resp = await signAndSubmitTransaction(rawTx);
        // resp is the response from the Client, and has detailed typings defination
      }}
    >...</>
  );
}
```
