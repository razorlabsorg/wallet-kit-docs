---
sidebar_position: 2
---

# useAptosProvider

## Introduction

This hook is used to provide the Aptos `Aptos` interface in React Hooks style.

See [`aptos` package on npm](https://www.npmjs.com/package/@aptos-labs/ts-sdk) for more information.

:::tip
This hook is internally **JUST** importing the `Aptos` interface and **implemention** from [`@aptos-labs/ts-sdk` package](https://www.npmjs.com/package/@aptos-labs/ts-sdk). What we do is caring about versioning, state management, and other stuffs for you.
:::

```jsx
import { useAptosProvider } from '@razorlabs/wallet-kit';
function YourComponent() {
  const endpoint = 'https://aptos.devnet.m1.movementlabs.xyz';
  const provider = useAptosProvider(endpoint);

  return <>...</>;
}
```

### Using the Aptos interface

But if you use the `Aptos` provided by `useAptosProvider`, you can call the `signAndSubmitTransaction` endpoint in a more convenient way:

```jsx
function YourComponent() {
  const endpoint = 'https://aptos.devnet.m1.movementlabs.xyz';
  const { signAndSubmitTransaction } = useAptosProvider(endpoint);

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
