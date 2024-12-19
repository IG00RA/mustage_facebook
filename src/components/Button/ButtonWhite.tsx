import React from 'react';
import styles from './Button.module.css';
import { useTranslations } from 'next-intl';
import Icon from '@/helpers/Icon';

const ButtonWhite = () => {
  const t = useTranslations();
  return (
    <button
      className={`${styles.button_white}`}
    >
      {t('Main.buttonSecond')}
      <Icon name="icon-right-btn" width={24} height={24} />
    </button>
  );
};

export default ButtonWhite;
