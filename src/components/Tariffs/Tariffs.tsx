import styles from './Tariffs.module.css';
import { useTranslations } from 'next-intl';
import { tariffsBanks, tariffsItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function Tariffs() {
  const t = useTranslations();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  return (
    <section id="tariffs" className={styles.tariffs}>
      <span className={styles.headerText}>{t('Tariffs.text')}</span>
      <h2 className={styles.header}>{t('Tariffs.header')}</h2>

      <ul className={styles.tariffsList}>
        {tariffsItems.map((item, index) => (
          <li key={index} className={styles.tariffsListItem}>
            <div className={styles.tariffsListItemHeaderWrap}>
              <h3 className={styles.tariffsListItemHeader}>{t(item.header)}</h3>
            </div>
            <span className={styles.tariffsListItemPrice}>{t(item.price)}</span>
            <button className={styles.button} type="button">
              {t('Tariffs.button')}
              <Icon name="icon-right-btn" width={24} height={24} />
            </button>
            <ul className={styles.tariffsSubList}>
              {Object.entries(item.list).map(([key, value]) =>
                value ? (
                  <li className={styles.tariffsSubListItem} key={key}>
                    <span className={styles.dot}></span>
                    <p className={styles.tariffsSubListItemText}>{t(value)}</p>
                  </li>
                ) : null
              )}
            </ul>
          </li>
        ))}
      </ul>
      <div className={styles.tariffsBankWrap}>
        <p className={styles.tariffsBankText}>
          {t('Tariffs.bank.first')}
          {t('Tariffs.bank.second')}
        </p>
        <ul className={styles.tariffsBankList}>
          {tariffsBanks.map((item, index) => (
            <li key={index} className={styles.tariffsBankListItem}>
              <Icon name={item} width={48} height={48} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
