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
      <h1 className={styles.header}>{t('Program.header')}</h1>

      <ul className={styles.list}>
        {programItems.map((item, index) => (
          <li key={index}>
            <div className={styles.main_wrap}>
              <h3>{t(item.itemsHeader)}</h3>
              <h4>{t(item.itemsText)}</h4>
              <div className={styles.block_wrap}>
                <div>
                  <p>
                    <span> {t(item.time.first)}</span> {t(item.time.second)}
                    <span> {t(item.time.third)}</span>
                    {t(item.time.fourth)}
                  </p>
                </div>
                <div>
                  <p>
                    <span>{t(item.quests.first)}</span>
                    {t(item.quests.second)}
                  </p>
                </div>
                <div>
                  <p>
                    <span>{t(item.tests.first)}</span>
                    {t(item.tests.second)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className={
                  openIndices.includes(index) ? `${styles.active}` : ''
                }
                onClick={() => toggleDropdown(index)}
              >
                <Icon name="icon-right-btn" width={24} height={24} />
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
                    <li key={key}>
                      <div>
                        <Icon name="icon-check-cube" width={16} height={16} />
                        <span>{t(value.first)}</span>
                      </div>
                      <p>{t(value.second)}</p>
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
