import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img className={styles.logoContainer} src="/site-photos-paw/Paw-logo.png" alt="Paw by Paw logo" />
        </div>
    );
};

export default Logo;