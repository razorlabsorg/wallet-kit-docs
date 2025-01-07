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
      text: 'Guides',
      items: [
        { text: 'Use Hooks Only', link: '/docs/guides/use-hooks-only' },
      ],
    },
  ],
}
