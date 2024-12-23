import styles from './Answers.module.css';
import { useTranslations } from 'next-intl';
import { answersItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function Answers() {
  const t = useTranslations();

  return (
    <section id="faq" className={styles.answers}>
      <span className={styles.header_text}>{t('Answers.headerText')}</span>
      <h2 className={styles.header}>{t('Answers.header')}</h2>

      <ul className={styles.list}>
        {answersItems.map((item, index) => (
          <li key={index}>
            <div className={styles.head_wrap}>
              <div className={styles.ico_wrap}>
                <Icon name="icon-star-ans" width={16} height={16} />
              </div>
              <h3 className={styles.item_header}>{t(item.itemsHeader)}</h3>
            </div>
            <p className={styles.item_text}>{t(item.itemsText)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
