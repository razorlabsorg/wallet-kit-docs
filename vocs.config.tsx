import { defineConfig } from 'vocs'
import { sidebar } from './sidebar'
import pkg from './package.json'

export default defineConfig({
  title: 'Razor Kit Docs',
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://kit.razorwallet.xyz'
      : 'http://localhost:5173',
  titleTemplate: '%s . Razor Kit',
  description: 'An all-in-one Wallet kit for every Movement Dapp',
  editLink: {
    pattern:
      'https://github.com/razorlabsorg/wallet-kit-docs/edit/master/pages/:path',
    text: 'Suggest changes to this page',
  },
  iconUrl: { light: '/favicon.png', dark: '/favicon.png' },
  logoUrl: { light: '/logo.png', dark: '/logo.png' },
  rootDir: '.',
  search: {
    boostDocument(documentId) {
      if (documentId.startsWith('pages/docs')) return 3
      return 1
    },
  },
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
      text: 'Examples',
      link: 'https://github.com/razorlabsorg/razorkit/tree/master/examples',
    },
    {
      text: `v${pkg.version}`,
      items: [
        {
          text: `Migrating to ${toPatchVersionRange(pkg.version)}`,
          link: `/docs/migration-guide#_${toPatchVersionRange(pkg.version).replace(/\./g, '-')}-breaking-changes`,
        },
        {
          text: 'Changelog',
          link: 'https://github.com/razorlabsorg/razorkit/blob/master/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/razorlabsorg/razorkit/blob/master/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
})

function toPatchVersionRange(version: string) {
  const [major, minor] = version.split('.').slice(0, 2)
  return `${major}.${minor}.x`
}
