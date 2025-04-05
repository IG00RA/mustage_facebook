'use client';

import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Button from '../Button/Button';
import { menuItems, socialItems } from '@/data/data';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import useStore from '@/store/useStore';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';
  const { query } = useStore();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.menu_wrap}>
            <Link className={styles.logo_wrap} href={`/${locale}${query}`}>
              <Icon name="icon-logo-footer" width={40} height={33} />
              <span>{t('Header.home')}</span>
            </Link>
            <div className={styles.nav_wrap}>
              <p className={styles.menu}>{t('Footer.menu.menu')}</p>
              <nav className={styles.nav}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}>{t(item.label)}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <ul className={styles.social}>
              {socialItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Icon name={item.icon} width={32} height={32} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.second_wrap}>
            <div className={styles.lang_wrap}>
              <LanguageSwitcher />
            </div>
            <div className={styles.button_wrap}>
              <Button link={CHAT_URL} />
            </div>
          </div>
        </div>
        <div className={styles.policy_wrap}>
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            {t('Footer.policy')}
          </a>

          <ul className={styles.social_desk}>
            {socialItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Icon name={item.icon} width={32} height={32} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
