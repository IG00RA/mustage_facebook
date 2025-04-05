'use client';

import React, { useState } from 'react';
import styles from './Button.module.css';
import { useTranslations } from 'next-intl';
import Icon from '@/helpers/Icon';
import { ButtonProps } from './ButtonSec';
import { sendMessage, sendToGoogleScript } from '@/api/sendData';
import { toast } from 'react-toastify';
import useStore from '@/store/useStore';

const Button: React.FC<ButtonProps> = ({ link }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useStore();
  const t = useTranslations();

  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  const getRefIdFromQuery = (query: string) => {
    const params = new URLSearchParams(query);
    return params.get('ref_id');
  };

  const constructLink = (baseLink: string) => {
    if (!query) return baseLink;

    const refId = getRefIdFromQuery(query);
    if (refId) {
      const separator = baseLink.includes('?') ? '&' : '?';
      return `${baseLink}${separator}start=${refId}`;
    }
    return baseLink;
  };

  const handleClick = async () => {
    setIsLoading(true);
    const message = { message: 'Користувач перейшов в бот', bot: true };

    try {
      await Promise.all([sendToGoogleScript(message), sendMessage(message)]);
      window.location.href = constructLink(link);
    } catch {
      toast.error(t('Form.errors.sendError'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRedirect = () => {
    window.location.href = link;
  };

  const isTelegramLink = link === CHAT_URL;

  return (
    <button
      type="button"
      onClick={isTelegramLink ? handleRedirect : handleClick}
      className={`${styles.button}`}
    >
      {isLoading && !isTelegramLink ? (
        <span className={styles.loader}></span>
      ) : (
        <>
          {t('Main.button')}
          <Icon name="icon-right-btn" width={24} height={24} />
        </>
      )}
    </button>
  );
};

export default Button;
