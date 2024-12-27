'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';
import Icon from '@/helpers/Icon';
import MobMenu from '../MobMenu/MobMenu';
import { useEffect, useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { menuItems } from '@/data/data';
import ButtonSec from '../Button/ButtonSec';

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';
  const [query, setQuery] = useState<URLSearchParams | null>(null);

  const t = useTranslations('');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlSearchParams = new URLSearchParams(window.location.search);
      setQuery(urlSearchParams);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${lang}/${path}?${query}`);
  };

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
      <Link className={styles.logo_wrap} href={`/${locale}/?${query}`}>
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
        <LanguageSwitcher
          locale={locale}
          handleLanguageChange={handleLanguageChange}
        />
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

      <MobMenu
        locale={locale}
        handleLanguageChange={handleLanguageChange}
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />
    </header>
  );
}
