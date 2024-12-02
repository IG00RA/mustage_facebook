import React from 'react';
import styles from './Button.module.css';
import { useTranslations } from 'next-intl';
import Icon from '@/helpers/Icon';

const ButtonSec = () => {
  const t = useTranslations();
  return (
    <a
      className={`${styles.button_sec}`}
      href={t('Main.buttonLink')}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('Main.button')}
      <Icon name="icon-right-btn" width={24} height={24} />
    </a>
  );
};

export default ButtonSec;
