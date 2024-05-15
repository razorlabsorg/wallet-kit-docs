---
title: Types
sidebar_position: 999
---

## Types of Sui SDK

https://github.com/MystenLabs/sui/tree/main/sdk/typescript/src/types

## IDefaultWallet

```typescript
export interface IDefaultWallet {
  name: string; // wallet name
  iconUrl: string; // wallet icon url (external url or data url)
  downloadUrl: {
    browserExtension?: string; // provide download link if this wallet is not installed
  };
}
```

example for customized defaultWallet item:

```typescript
import IDefaultWallet from '@razorlabs/wallet-kit';

const myWallet: IDefaultWallet = {
  name: 'myWallet',
  iconUrl: 'external url or data url',
  downloadUrl: {
    browserExtension: 'chrome extension store url...',
  },
};
```

## WalletAccount

```ts
export interface WalletAccount {
  /** Address of the account, corresponding with the public key. */
  readonly address: string;

  /** Public key of the account, corresponding with the secret key to sign, encrypt, or decrypt using. */
  readonly publicKey: Uint8Array;

  /** Chains supported by the account. */
  readonly chains: IdentifierArray;

  /** Features supported by the account. */
  readonly features: IdentifierArray;

  /** Optional user-friendly descriptive label or name for the account, to be displayed by apps. */
  readonly label?: string;

  /** Optional user-friendly icon for the account, to be displayed by apps. */
  readonly icon?: WalletIcon;
}
```

## IWalletAdapter

https://github.com/razorlabsorg/razor-wallet-kit/blob/main/src/types/wallet.ts#L39

## Chain

Definition of chain's structure (aka Network for Razor Wallet)

```ts
export type Chain = {
  id: string | number; // string for m2, number for m1
  name: string;
  rpcUrl: string;
};
```

Default constants:

```ts
export const M2DevnetChain: Chain = {
  id: 'movement:m2:devnet',
  name: 'M2 Devnet',
  rpcUrl: 'https://devnet.m2.movementlabs.xyz',
};

export const UnknownChain: Chain = {
  id: 'unknown:unknown',
  name: 'Unknown Network',
  rpcUrl: '',
};

export const DefaultChains = [M2DevnetChain];
```

## Error Types

```typescript
type BaseError = {
  message: string;
  code: ErrorCode;
  details?: Record<String, any>;
};
type KitError = BaseError; // errors from kit internal logics
type WalletError = BaseError; // erros from third-party wallets
```

## Error Codes

```typescript
enum ErrorCode {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  KIT__UNKNOWN_ERROR = 'KIT.UNKNOWN_ERROR',
  WALLET__UNKNOWN_ERROR = 'WALLET.UNKNOWN_ERROR',
  WALLET__CONNECT_ERROR = 'WALLET.CONNECT_ERROR',
  WALLET__DISCONNECT_ERROR = 'WALLET.DISCONNECT_ERROR',
  WALLET__SIGN_TX_ERROR = 'WALLET.SIGN_TX_ERROR',
  WALLET__SIGN_MSG_ERROR = 'WALLET.SIGN_MSG_ERROR',
  WALLET__LISTEN_TO_EVENT_ERROR = 'WALLET.LISTEN_TO_EVENT_ERROR',
  WALLET__METHOD_NOT_IMPLEMENTED_ERROR = 'WALLET.METHOD_NOT_IMPLEMENTED_ERROR',
}
```
