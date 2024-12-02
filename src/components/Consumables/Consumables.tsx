import styles from './Consumables.module.css';
import { useTranslations } from 'next-intl';
import { consumablesItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function Consumables() {
  const t = useTranslations();

  return (
    <section id="consumables" className={styles.consumables}>
      <span className={styles.headerText}>{t('Consumables.headerText')}</span>
      <h1 className={styles.header}>{t('Consumables.header')}</h1>
      <div className={styles.back_wrap}>
        <div className={styles.back}></div>
        <div className={styles.box}></div>
      </div>
      <div className={styles.main_wrap}>
        <ul className={styles.list}>
          {consumablesItems.map((item, index) => (
            <li key={index}>
              <div className={styles.icon_wrap}>
                <Icon name="icon-check" width={12} height={12} />
              </div>
              <h3>{t(item)}</h3>
            </li>
          ))}
        </ul>
        <p>{t('Consumables.parText')}</p>
        <div className={styles.par_wrap}>
          <p>
            {t('Consumables.blockText.first')} <br />
            <span>{t('Consumables.blockText.second')}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
