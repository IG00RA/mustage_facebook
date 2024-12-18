'use client';

import { useState, useEffect } from 'react';
import styles from './Result.module.css';
import { useTranslations } from 'next-intl';
import { resultItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Image from 'next/image';
import ButtonWhite from '../Button/ButtonWhite';

export default function Result() {
  const t = useTranslations();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isAutoplayActive) return;

    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % resultItems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAutoplayActive]);

  const handleItemClick = (index: number) => {
    setIsAutoplayActive(false);
    setActiveIndex(index);
  };

  return (
    <section id="result" className={styles.result}>
      <div className={styles.container}>
        <span className={styles.headerText}>{t('Result.headerText')}</span>
        <h2 className={styles.header}>{t('Result.header')}</h2>

        <ul className={styles.list}>
          {resultItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={styles.item}
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className={`${styles.header_wrap} ${
                  activeIndex === index && styles.header_wrap_act
                }`}
              >
                <div className={styles.icon_wrap}>
                  <div
                    className={`${styles.icon} ${
                      activeIndex === index || hoveredIndex === index
                        ? styles.icon_visible
                        : styles.icon_hidden
                    }`}
                  >
                    <Icon name={item.iconHov} width={24} height={24} />
                  </div>
                  <div
                    className={`${styles.icon} ${
                      activeIndex === index || hoveredIndex === index
                        ? styles.icon_hidden
                        : styles.icon_visible
                    }`}
                  >
                    <Icon name={item.icon} width={24} height={24} />
                  </div>
                </div>
                <h3>{t(item.header)}</h3>
              </div>
              <div
                className={`${styles.image_wrap} ${
                  activeIndex === index ? styles.expanded : styles.collapsed
                }`}
              >
                <div className={styles.text_wrap}>
                  <p>{t(item.text)}</p>
                </div>
                <Image
                  src={item.logo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={t(item.header)}
                  priority
                />
                <div className={styles.line}></div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.par_wrap}>
          <p>
            {t('Result.parText.first')}
            <span>{t('Result.parText.second')}</span>
            {t('Result.parText.third')}
          </p>
          <ButtonWhite />
        </div>
      </div>
    </section>
  );
}
