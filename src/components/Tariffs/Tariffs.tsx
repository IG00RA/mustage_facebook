'use client';

import styles from './Tariffs.module.css';
import { useTranslations } from 'next-intl';
import { tariffsBanks } from '@/data/data';
import Icon from '@/helpers/Icon';
import { Tariff, TariffItem, fetchData } from '@/api/getTariffs';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Tariffs() {
  const t = useTranslations();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [tariffsData, setTariffsData] = useState<Tariff[]>([]);
  const [currencySymbol, setCurrencySymbol] = useState<string>('грн');
  const [currencyKey, setCurrencyKey] = useState<string>('Price');

  const pathname = usePathname();
  const getLocaleFromPath = (pathname: string): [string, boolean] => {
    const pathSegments = pathname.split('/');
    const locale = pathSegments[1] || 'uk';
    const hasUkr = pathname.includes('ukr');
    return [locale, hasUkr];
  };

  const [locale, hasUkr] = getLocaleFromPath(pathname || '');

  useEffect(() => {
    if (!locale) return;
    setLoading(true);
    setError(false);
    fetchData(locale, hasUkr)
      .then(({ tariffs, currencySymbol, currencyKey }) => {
        setTariffsData(tariffs);
        setCurrencySymbol(currencySymbol);
        setCurrencyKey(currencyKey);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [locale]);

  if (loading || error) {
    return (
      <div className={styles.dots_loading}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    );
  }

  const sortedTariffs =
    !error && tariffsData.length
      ? [...tariffsData].sort(
          (a, b) =>
            Number(a[currencyKey as keyof Tariff]) -
            Number(b[currencyKey as keyof Tariff])
        )
      : [];

  return (
    <section id="tariffs" className={styles.tariffs}>
      <span className={styles.header_text}>{t('Tariffs.text')}</span>
      <h2 className={styles.header}>{t('Tariffs.header')}</h2>

      <ul className={styles.tariffs_list}>
        {sortedTariffs.map((item, index) => {
          return (
            <li key={index} className={styles.tariffs_list_item}>
              <div className={styles.tariffsListItemHeaderWrap}>
                <h3 className={styles.tariffs_list_item_header}>{item.Name}</h3>
              </div>
              <span className={styles.tariffs_list_item_price}>
                {currencySymbol === 'грн'
                  ? `${item[currencyKey as keyof Tariff]} ${currencySymbol}`
                  : `${currencySymbol} ${item[currencyKey as keyof Tariff]}`}
              </span>
              <a href={CHAT_URL} className={styles.button}>
                {t('Tariffs.button')}
                <Icon name="icon-right-btn" width={24} height={24} />
              </a>
              <ul className={styles.tariffs_subList}>
                {item.TariffsItems?.map((tariffItem: TariffItem, i: number) => (
                  <li className={styles.tariffs_subList_item} key={i}>
                    <span className={styles.dot}></span>
                    <p className={styles.tariffs_subList_item_text}>
                      {tariffItem.TariffsItem}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <div className={styles.tariffs_bank_wrap}>
        <p className={styles.tariffs_bank_text}>
          {t('Tariffs.bank.first')}
          {t('Tariffs.bank.second')}
        </p>
        <ul className={styles.tariffs_bank_list}>
          {tariffsBanks.map((item, index) => (
            <li key={index} className={styles.tariffs_bank_list_item}>
              <Icon name={item} width={48} height={48} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
