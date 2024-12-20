import styles from './Study.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { studyItems } from '@/data/data';

export default function Study() {
  const t = useTranslations();

  return (
    <section className={styles.study}>
      <span className={styles.headerText}>{t('Study.headerText')}</span>
      <h2 className={styles.header}>{t('Study.header')}</h2>

      <ul className={styles.list}>
        {studyItems.map((item, index) => (
          <li key={index}>
            <div className={styles.head_wrap}>
              <div className={styles.img_wrap}>
                <Image
                  className={styles.image}
                  src={item.logo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Info icon"
                  priority
                />
              </div>
              <h3 className={styles.item_header}>{t(item.header)}</h3>
            </div>
            <p className={styles.item_text}>{t(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
