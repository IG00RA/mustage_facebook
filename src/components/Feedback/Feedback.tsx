'use client';

import { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon from '@/helpers/Icon';
import Image from 'next/image';
import { feedbackItems as originalGalleryImages } from '@/data/data';
import styles from './Feedback.module.css';
import { useTranslations } from 'next-intl';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
export default function Feedback() {
  const t = useTranslations();
  const [galleryImages, setGalleryImages] = useState(originalGalleryImages);

  useEffect(() => {
    setGalleryImages(shuffleArray(originalGalleryImages));
  }, []);

  return (
    <section id="feedback" className={styles.feedback}>
      <div className={styles.container}>
        <span className={styles.headerText}>{t('Feedback.headerText')}</span>
        <h2 className={styles.header}>{t('Feedback.header')}</h2>
        <Swiper
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
          }}
          spaceBetween={32}
          slidesPerView={1}
          className={styles.gallery_slider}
          modules={[Navigation, Pagination]}
          loop={true}
          // breakpoints={{
          //   768: {
          //     spaceBetween: 20,
          //     slidesPerView: 2,
          //   },
          //   0: {
          //     spaceBetween: 10,
          //     slidesPerView: 1,
          //   },
          // }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} className={styles.gallery_item}>
              <div className={styles.image_wrapper}>
                <Image
                  src={image}
                  alt={`Відгук про курс №${index + 1}`}
                  className={styles.slider_image}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.prev}>
          <Icon name="icon-right-btn" width={24} height={24} />
        </div>
        <div className={styles.next}>
          <Icon name="icon-right-btn" width={24} height={24} />
        </div>
        <div className={styles.pagination}></div>
      </div>
    </section>
  );
}
