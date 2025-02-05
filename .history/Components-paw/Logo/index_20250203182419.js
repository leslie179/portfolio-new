import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src="/site-photos-paw/.png" alt="Paw by Paw logo" />
        </div>
    );
};

export default Logo;