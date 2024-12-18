'use client';

import Icon from '@/helpers/Icon';
import styles from './Form.module.css';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Form() {
  const t = useTranslations();

  const nicknameRegex = /^@([a-zA-Z0-9_]{3,32})$/;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    nickname: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    nickname: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = (): boolean => {
    const newErrors = { name: '', phone: '', nickname: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = t('Form.errors.nameRequired');
      isValid = false;
    } else if (formData.name.length > 100) {
      newErrors.name = t('Form.errors.nameLength');
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = t('Form.errors.phoneRequired');
      isValid = false;
    } else if (!/^\d{9}$/.test(formData.phone)) {
      newErrors.phone = t('Form.errors.phoneFormat');
      isValid = false;
    }

    if (!formData.nickname) {
      newErrors.nickname = t('Form.errors.nickRequired');
      isValid = false;
    } else if (!nicknameRegex.test(formData.nickname)) {
      newErrors.nickname = t('Form.errors.nickFormat');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.top_wrap}>
            <Icon name="icon-logo-form" width={58} height={48} />
            <p>{t('Form.headerText')}</p>
          </div>
          <h2 className={styles.header}>{t('Form.header')}</h2>
        </div>
        <form className={styles.form_wrap} onSubmit={handleSubmit}>
          <label className={styles.label}>
            {t('Form.form.name')}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('Form.form.namePlaceHolder')}
              className={`${styles.input} ${errors.name ? styles.error : ''}`}
              required
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </label>

          <label className={styles.label}>
            {t('Form.form.phone')}
            <div className={styles.phone_wrap}>
              <div
                className={`${styles.phone_label} ${
                  errors.phone ? styles.error : ''
                }`}
              >
                <span>+380</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0993483455"
                className={`${styles.input} ${
                  errors.phone ? styles.error : ''
                }`}
                required
              />
            </div>
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </label>

          <label className={styles.label}>
            {t('Form.form.nick')}
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="@nickname"
              className={`${styles.input} ${
                errors.nickname ? styles.error : ''
              }`}
              required
            />
            {errors.nickname && (
              <p className={styles.errorText}>{errors.nickname}</p>
            )}
          </label>

          <button className={styles.button} type="submit">
            {t('Form.form.button')}
            <Icon name="icon-right-btn" width={24} height={24} />
          </button>
        </form>
      </div>
    </section>
  );
}
