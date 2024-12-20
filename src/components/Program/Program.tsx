'use client';

import styles from './Program.module.css';
import { useTranslations } from 'next-intl';
import { programItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import { useState } from 'react';

export default function Program() {
  const t = useTranslations();

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDropdown = (index: number): void => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="program" className={styles.program}>
      <span className={styles.headerText}>{t('Program.headerText')}</span>
      <h2 className={styles.header}>{t('Program.header')}</h2>

      <ul className={styles.list}>
        {programItems.map((item, index) => (
          <li key={index}>
            <div className={styles.main_wrap}>
              <h3 className={styles.item_header}>{t(item.itemsHeader)}</h3>
              <h4 className={styles.item_text}>{t(item.itemsText)}</h4>
              <div className={styles.block_wrap}>
                <div className={styles.block_par_wrap}>
                  <p className={styles.item_par}>
                    <span> {t(item.time.first)}</span> {t(item.time.second)}
                    <span> {t(item.time.third)}</span>
                    {t(item.time.fourth)}
                  </p>
                </div>
                <div className={styles.block_par_wrap}>
                  <p className={styles.item_par}>
                    <span>{t(item.quests.first)}</span>
                    {t(item.quests.second)}
                  </p>
                </div>
                <div className={styles.block_par_wrap}>
                  <p className={styles.item_par}>
                    <span>{t(item.tests.first)}</span>
                    {t(item.tests.second)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className={`${styles.button} ${
                  openIndices.includes(index) ? `${styles.active}` : ''
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <Icon name="icon-right-btn" width={34} height={34} />
              </button>
            </div>
            <ul
              className={`${styles.drop_box} ${
                openIndices.includes(index) ? `${styles.open}` : ''
              }`}
            >
              {Object.entries(item.itemsBlock).map(([key, value]) => {
                if (value) {
                  return (
                    <li className={styles.drop_box_item} key={key}>
                      <div className={styles.drop_box_item_wrap}>
                        <Icon name="icon-checkProg" width={16} height={16} />
                        <span>{t(value.first)}</span>
                      </div>
                      <p className={styles.drop_box_item_text}>
                        {t(value.second)}
                      </p>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
