import { defineConfig } from 'vocs'
import { sidebar } from './sidebar'
import pkg from './package.json'

export default defineConfig({
  title: 'Razor Kit Docs',
  baseUrl: process.env.NODE_ENV === 'production'
    ? 'https://kit.razorwallet.kit'
    : 'http://localhost:5173',
  titleTemplate: '%s . Razor Kit',
  description: 'An all-in-one Wallet kit for every Movement Dapp',
  editLink: {
    pattern: 'https://github.com/razorlabsorg/wallet-kit-docs/edit/main/docs/:path',
    text: 'Suggest changes to this page'
  },
  iconUrl: '/favicon.ico',
  logoUrl: { light: '/logo.png', dark: '/logo.png' },
  rootDir: '.',
  sidebar,
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/razorlabsorg/razorkit',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/razordao',
    },
    {
      icon: 'x',
      link: 'https://x.com/razordao',
    },
  ],
  theme: {
    accentColor: {
      light: '#ff9318',
      dark: '#ffc517',
    },
  },
  topNav: [
    { text: 'Docs', link: '/docs/getting-started', match: '/docs' },
    {
      text: 'Environments',
      items: [
        {
          text: 'Aptos Apps',
          link: '/aptos-docs',
        },
        {
          text: 'Sui Apps',
          link: '/sui-docs',
        },
        {
          text: 'MEVM Apps',
          link: '/mevm-docs',
        },
      ],
    },
    {
      text: 'Examples',
      link: 'https://github.com/razorlabsorg/razorkit/tree/main/examples',
    },
    {
      text: pkg.version,
      items: [
        /* {
          text: `Migrating to ${toPatchVersionRange(pkg.version)}`,
          link: `/docs/migration-guide#_${toPatchVersionRange(
            pkg.version,
          ).replace(/\./g, '-')}-breaking-changes`,
        }, */
        {
          text: 'Changelog',
          link: 'https://github.com/razorlabsorg/razorkit/blob/main/src/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/razorlabsorg/razorkit/blob/main/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
})

/*function toPatchVersionRange(version: string) {
  const [major, minor] = version.split('.').slice(0, 2)
  return `${major}.${minor}.x`
} */