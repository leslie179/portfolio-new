'use client'
import { useRef } from 'react';
import styles from '../Footer.module.css';

export default function Banner() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  return (
    <div className={styles.bannerContainer}>
      <div ref={slider} className={styles.banner}>
        <span ref={firstText} className={styles.bannerItem}>Welcome to my site!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span ref={secondText} className={styles.bannerItem}>Check out my portfolio!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span className={styles.bannerItem}>Contact me for work opportunities!</span>
        <span className={styles.bannerItem}>🖤</span>

        {/* Duplicate the content to ensure a seamless scroll */}
        <span ref={firstText} className={styles.bannerItem}>Welcome to my site!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span ref={secondText} className={styles.bannerItem}>Check out my portfolio!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span className={styles.bannerItem}>Contact me for work opportunities!</span>
        <span className={styles.bannerItem}>🖤</span>
      </div>
    </div>
  );
}
