import styles from './Opportunities.module.css';
import { useTranslations } from 'next-intl';
import { opportunitiesItems } from '@/data/data';
import Image from 'next/image';

export default function Opportunities() {
  const t = useTranslations();

  return (
    <section id="opportunities" className={styles.opportunities}>
      <h1 className={styles.header}>{t('Opportunities.header')}</h1>

      <ul className={styles.list}>
        {opportunitiesItems.map((item, index) => (
          <li key={index}>
            <div className={styles.icon_wrap}>
              <Image
                src={item.logo}
                width={0}
                height={0}
                sizes="100vw"
                alt="Advantage icon"
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
