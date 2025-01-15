import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <span className={styles.bannerItem}>Welcome to my site!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span className={styles.bannerItem}>Check out my portfolio!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span className={styles.bannerItem}>Contact me for work opportunities!</span>
        <span className={styles.bannerItem}>🖤</span>

        {/* Duplicate the content directly inside the same banner */}
        <span className={styles.bannerItem}>Welcome to my site!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span className={styles.bannerItem}>Check out my portfolio!</span>
        <span className={styles.bannerItem}>🖤</span>
        <span className={styles.bannerItem}>Contact me for work opportunities!</span>
        <span className={styles.bannerItem}>🖤</span>
      </div>
    </div>
  );
}
