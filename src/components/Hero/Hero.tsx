import styles from './Hero.module.css';
import { useTranslations } from 'next-intl';
import Button from '../Button/Button';
import { heroItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>{t('Hero.header')}</h1>
      <p className={styles.text}>{t('Hero.text')}</p>
      <div className={styles.button_wrap}>
        <p className={styles.button_text}>
          {t('Hero.buttonText.first')}
          <span>{t('Hero.buttonText.second')}</span>
        </p>
        <div className={styles.mob_button}>
          <Button
            width="76.5%"
            height="56px"
            link={t('Main.buttonLink')}
            text={t('Main.button')}
          />
        </div>
        <div className={styles.desk_button}>
          <Button
            width="233px"
            link={t('Main.buttonLink')}
            text={t('Main.buttonHero')}
            showArrow={false}
          />
        </div>
      </div>

      <div className={styles.background}></div>
      <ul className={styles.list}>
        {heroItems.map((item, index) => (
          <li key={index}>
            <Icon name={item.img} width={32} height={32} />
            <p>{t(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
