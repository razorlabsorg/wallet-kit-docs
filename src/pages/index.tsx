import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import styles from './index.module.css';
import { CustomFields } from '@site/types/customFields';
import { AptosConnectButton, AptosWalletProvider, SuiConnectButton, SuiWalletProvider } from '@razorlabs/wallet-kit';
import '@razorlabs/wallet-kit/style.css';

interface BadgeProps {
  href: string;
  subject: string;
  status: string;
  color: string;
  icon?: string;
  className?: string;
}

const Badge = (props: BadgeProps) => {
  const { color = 'green' } = props;
  const encode = encodeURIComponent;
  const link = `https://badgen.net/badge/${encode(props.subject)}/${encode(
    props.status
  )}/${encode(color)}`;
  return (
    <a href={props.href} className={props.className}>
      <img src={link} />
    </a>
  );
};

const WalletStandardBadge = (props: {
  version: string;
  className?: string;
}) => {
  return (
    <Badge
      href={'https://www.npmjs.com/package/@razorlabs/wallet-standard'}
      subject={'wallet-standard'}
      status={props.version}
      color={'green'}
    />
  );
};

const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const { walletStandardVersion } =
    siteConfig.customFields as unknown as CustomFields;
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <h1 className={styles['hero-title']}>{siteConfig.title}</h1>
        <p className={styles['hero-desc']}>{siteConfig.tagline}</p>
        <div className={styles['hero-badges']}>
          <WalletStandardBadge version={walletStandardVersion} />
        </div>
        <div className={styles.buttons}>
          <a className={styles['doc-button']} href="/docs/QuickStart">
            View Docs
          </a>
          <div className={styles.container}>
            <div className={styles.pagebutton}>
              <AptosConnectButton>
                Try M1
              </AptosConnectButton>
            </div>
            <div className={styles.pagebutton}>
              <SuiConnectButton>
                Try M2
              </SuiConnectButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      noFooter
      title={`Hello from ${siteConfig.title}`}
      description="Razor wallet kit is the best way to connect wallets across the Movement Ecosystem"
    >
      <SuiWalletProvider autoConnect={false}>
        <AptosWalletProvider autoConnect={false}>
          <HomepageHeader />
        </AptosWalletProvider>
      </SuiWalletProvider>
    </Layout>
  );
}
