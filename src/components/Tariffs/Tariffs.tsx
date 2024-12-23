import styles from './Tariffs.module.css';
import { useTranslations } from 'next-intl';
import { tariffsBanks, tariffsItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function Tariffs() {
  const t = useTranslations();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  return (
    <section id="tariffs" className={styles.tariffs}>
      <span className={styles.header_text}>{t('Tariffs.text')}</span>
      <h2 className={styles.header}>{t('Tariffs.header')}</h2>

      <ul className={styles.tariffs_list}>
        {tariffsItems.map((item, index) => (
          <li key={index} className={styles.tariffs_list_item}>
            <div className={styles.tariffsListItemHeaderWrap}>
              <h3 className={styles.tariffs_list_item_header}>
                {t(item.header)}
              </h3>
            </div>
            <span className={styles.tariffs_list_item_price}>
              {t(item.price)}
            </span>
            <button className={styles.button} type="button">
              {t('Tariffs.button')}
              <Icon name="icon-right-btn" width={24} height={24} />
            </button>
            <ul className={styles.tariffs_subList}>
              {Object.entries(item.list).map(([key, value]) =>
                value ? (
                  <li className={styles.tariffs_subList_item} key={key}>
                    <span className={styles.dot}></span>
                    <p className={styles.tariffs_subList_item_text}>
                      {t(value)}
                    </p>
                  </li>
                ) : null
              )}
            </ul>
          </li>
        ))}
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
