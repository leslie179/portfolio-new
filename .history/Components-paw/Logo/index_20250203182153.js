import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src="/pawbypaw.png" alt="Paw by Paw logo" />
        </div>
    );
};

export