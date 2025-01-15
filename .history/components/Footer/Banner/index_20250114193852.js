import styles from "../Footer.module.css";

export default function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
                {/* Repeat the items to create a seamless effect */}
                <span className={styles.bannerItem}>Welcome to my site!</span>
                <span className={styles.bannerItem}>🖤</span>
                <span className={styles.bannerItem}>Check out my portfolio!</span>
                <span className={styles.bannerItem}>🖤</span>
                <span className={styles.bannerItem}>Contact me for work opportunities!</span>
                <span className={styles.bannerItem}>🖤</span>
                <span className={styles.bannerItem}>Welcome to my site!</span>
                <span className={styles.bannerItem}>🖤</span>
                <span className={styles.bannerItem}>Check out my portfolio!</span>
                <span className={styles.bannerItem}>🖤</span>
                <span className={styles.bannerItem}>Contact me for work opportunities!</span>
            </div>
        </div>
    );
}

