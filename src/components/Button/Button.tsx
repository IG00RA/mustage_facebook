import React from 'react';
import styles from './Button.module.css';
import { useTranslations } from 'next-intl';
import Icon from '@/helpers/Icon';

const Button = () => {
  const t = useTranslations();
  return (
    <button
      className={`${styles.button}`}
    >
      {t('Main.button')}
      <Icon name="icon-right-btn" width={24} height={24} />
    </button>
  );
};

export default Button;
