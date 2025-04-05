'use client';

import styles from './Confirm.module.css';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Icon from '@/helpers/Icon';

export default function Confirm({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <section className={styles.confirm}>
      <div className={styles.container}>
        <Link className={styles.logo_wrap} href={`/${locale}/`}>
          <Icon name="icon-logo" width={58} height={48} />
          <span className={styles.logo_text}>{t('Confirm.logo')}</span>
        </Link>
        <h2 className={styles.header}>{t('Confirm.header')}</h2>
        <p className={styles.text}>{t('Confirm.text')}</p>
        <Link className={styles.button} href={`/${locale}/`}>
          {t('Confirm.button')}
          <Icon name="icon-right-btn" width={24} height={24} />
        </Link>
      </div>
    </section>
  );
}
