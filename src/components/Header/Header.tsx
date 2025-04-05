'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Header.module.css';
import Icon from '@/helpers/Icon';
import MobMenu from '../MobMenu/MobMenu';
import { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { menuItems } from '@/data/data';
import ButtonSec from '../Button/ButtonSec';
import useStore from '@/store/useStore';

export default function Header() {
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  const { query, locale } = useStore();
  const t = useTranslations('');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };
  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };
  return (
    <header
      className={`${styles.header} ${isMenuOpen && styles.mobile_menu_open}`}
    >
      <Link className={styles.logo_wrap} href={`/${locale}/${query}`}>
        <Icon name="icon-logo" width={40} height={33} />
        <span className={styles.logo_text}>{t('Header.home')}</span>
      </Link>
      <div className={styles.main_wrap}>
        <nav>
          <ul className={styles.nav}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{t(item.label)}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
        <ButtonSec link={CHAT_URL} />
      </div>
      <div
        className={`${styles.burger_wrap} ${
          isMenuOpen ? styles.burger_open : ''
        }`}
        onClick={isMenuOpen ? closeMenu : openMenu}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>

      <MobMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
}
