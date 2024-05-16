---
sidebar_position: 1
---

# useAptosAccountBalance

## Introduction

You can get the balance of the current account under the selected network. The useAptosAccountBalance will return the current account's balance, loading status, error object. When fetching the banlance data, loading will set to true, otherwise false. If fetch failed, error will be an Error object instance and shows why fetch failed.

:::tip
If error is not null, it means fetch balance failed. In this case, the balance will set to be 0.
:::

## API

| Properties | Description                                           | Type          | Default |
| ---------- | ----------------------------------------------------- | ------------- | ------- |
| error      | error or null                                         | Error \| null | null    |
| loading    | fetch status                                          | boolean       | false   |
| balance    | the balance of current account, converted from BigInt | string        | '0'     |

### error

The `error` object tells why get balance failed. If error is not null, it may means network error or other problems of you app.

### loading

The `loading` can be used to add loading when fetching acount balance.

```tsx
import { useAptosAccountBalance } from '@razorlabs/wallet-kit';

function App() {
  const { error, loading, balance } = useAptosAccountBalance();

  return (
    <div>{loading && <Spin />}</div>
    <div>{balance}</div>
  )
}
```

### balance

The balance's type is string. If you want to use balance to calculate, you should convert it to bigint or number.

In some case, the balance can be bigger than Number.MAX_SAFE_INTEGER(2^53 - 1). If your project support Bigint(https://caniuse.com/?search=Bigint), you can derectly use `BigInt` method to convert, otherwise, use some lib to calculation bigint.

## Example

```jsx
import { useEffect } from 'react';

interface AptosAccountBalanceResponse {
  error: Error | null;
  loading: boolean;
  balance: string;
}

import { useAptosAccountBalance } from '@razorlabs/wallet-kit';

function App() {
  const { error, loading, balance } = useAptosAccountBalance();

  useEffect(() => {
    // if you want to do comparison or calculation with balance,
    // use Number or BigInt to convert the balance string
    if (Number(balance) > 1000000) {
      console.log('You are a millionare!');
    }
  }, [balance]);

  return (
    <div>
      <div>fetch balance loading status: {loading}</div>
      <div>account balance: {balance}</div>
    </div>
  );
}
```
