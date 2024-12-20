import styles from './Team.module.css';
import { useTranslations } from 'next-intl';
import { teamItems } from '@/data/data';

export default function Team() {
  const t = useTranslations();

  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <span className={styles.headerText}>{t('Team.headerText')}</span>
        <h2 className={styles.header}>{t('Team.header')}</h2>
        <div className={styles.main_wrap}>
          <div className={styles.first_wrap}>
            <p className={styles.top_text}>
              {t('Team.topText.first')} <span>{t('Team.topText.second')} </span>
              {t('Team.topText.third')}
              <span>{t('Team.topText.fourth')} </span>
              {t('Team.topText.fifth')}
            </p>

            <ul className={styles.list}>
              {teamItems.map((item, index) => (
                <li key={index}>
                  <div className={styles.circle}>
                    <span></span>
                  </div>
                  <h3 className={styles.list_header}>{t(item)}</h3>
                </li>
              ))}
            </ul>
            <div className={styles.par_wrap}>
              <p className={styles.par_text}>{t('Team.parText')}</p>
            </div>
          </div>

          <div className={styles.second_wrap}>
            <p className={styles.block_text_first}>
              {t('Team.blockText.first')}
              <span>{t('Team.blockText.second')} </span>
              {t('Team.blockText.third')}
            </p>
            <p className={styles.block_text_second}>
              {t('Team.blockText.fourth')}
            </p>
            <p className={styles.block_text_third}>
              {t('Team.blockText.fifth')}
            </p>
          </div>
        </div>
        <div className={styles.bottom_wrap}>
          <p className={styles.bottom_text}>{t('Team.blockPar')} </p>
        </div>
      </div>
    </section>
  );
}
