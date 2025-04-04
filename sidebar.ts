import type { Sidebar } from 'vocs'

export const sidebar: Sidebar = {
  '/docs/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Why Razor Kit?', link: '/docs/introduction' },
        { text: 'Installation', link: '/docs/installation' },
        { text: 'Getting Started', link: '/docs/getting-started' },
        { text: 'Wallet Compatibility', link: '/docs/compatibility' },
      ],
    },
    {
      text: 'Components',
      items: [
        { text: 'ConnectButton', link: '/docs/components/connect-button' },
        { text: 'ConnectModal', link: '/docs/components/connect-modal' },
        { text: 'WalletProvider', link: '/docs/components/wallet-provider' },
      ]
    },
    {
      text: 'Hooks',
      items: [
        { text: 'useAbi', link: '/docs/hooks/use-abi'},
        { text: 'useAccount', link: '/docs/hooks/use-account'},
        { text: 'useAccountBalance', link: '/docs/hooks/use-account-balance'},
        { text: 'useChain', link: '/docs/hooks/use-chain'},
        { text: 'useChainId', link: '/docs/hooks/use-chain-id'},
        { text: 'useProvider', link: '/docs/hooks/use-provider'},
        { text: 'useWallet', link: '/docs/hooks/use-wallet'},
      ]
    },
    {
      text: 'Styling',
      items: [
        { text: 'Basic', link: '/docs/styling/basic'},
        { text: 'Customize CSS & Theme', link: '/docs/styling/customize'},
        { text: 'Dark Mode', link: '/docs/styling/darkmode'},
      ]
    },
    {
      text: 'Guides',
      items: [
        { text: 'Configure Network', link: '/docs/guides/configure-network'},
        { text: 'Connect Dapp', link: '/docs/guides/connect-dapp'},
        { text: 'Customize Wallet List', link: '/docs/guides/customize-wallet-list'},
        { text: 'Use Hooks Only', link: '/docs/guides/use-hooks-only' },
      ],
    },
    {
      text: 'Misc',
      items: [
        { text: 'Types', link: '/docs/misc/types' },
      ],
    },
    {
      text: 'Wallet SDK',
      items: [
        { text: 'Overview', link: '/docs/sdk/overview' },
      ],
    }
  ],
}
