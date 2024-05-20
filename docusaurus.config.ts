import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const version = require('./package.json').version;

const walletStandardVersion = '0.1.1';

const config: Config = {
  title: 'Razor Wallet Kit',
  tagline: 'A wallet kit for connecting to Movement Wallets',
  favicon: 'img/favicon.ico',
  url: 'https://kit.razorwallet.xyz',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    walletStandardVersion,
  },

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.jpg',
    colorMode: {
      defaultMode: 'dark',
      // disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Razor WalletKit',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'QuickStart',
          position: 'left',
          label: `Docs (v${version})`,
        },
        {
          href: 'https://github.com/razorlabsorg/razor-wallet-kit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/pzhexEWGcT',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/RazorDAO',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/razorlabsorg/razor-wallet-kit',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Razor Labs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
