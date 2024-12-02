import styles from './Study.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { studyItems } from '@/data/data';

export default function Study() {
  const t = useTranslations();

  return (
    <section className={styles.study}>
      <span className={styles.headerText}>{t('Team.headerText')}</span>
      <h1 className={styles.header}>{t('Study.header')}</h1>

      <ul className={styles.list}>
        {studyItems.map((item, index) => (
          <li key={index}>
            <div className={styles.img_wrap}>
              <Image
                src={item.logo}
                width={0}
                height={0}
                sizes="100vw"
                alt="Info icon"
                priority
              />
            </div>
            <h3>{t(item.header)}</h3>
            <p>{t(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
