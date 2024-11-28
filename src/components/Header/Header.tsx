'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';
import Icon from '@/helpers/Icon';
import MobMenu from '../MobMenu/MobMenu';
import { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { menuItems } from '@/data/data';
import Button from '../Button/Button';

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations('');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${lang}/${path}`);
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
      <div className={styles.container}>
        <Link className={styles.logo_wrap} href={`/${locale}/`}>
          <Icon name="icon-logo" width={40} height={33} />
          <span className={styles.logo_text}>{t('Header.home')}</span>
        </Link>

        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{t(item.label)}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.button_wrap}>
          <LanguageSwitcher
            locale={locale}
            handleLanguageChange={handleLanguageChange}
          />
          <Button
            width="169px"
            height="56px"
            link={t('Main.buttonLink')}
            text={t('Main.buttonFooter')}
            showArrow={false}
          />
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
      </div>
    </header>
  );
}
