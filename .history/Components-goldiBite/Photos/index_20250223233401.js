import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <h1 className={styles.h1}>
                    We made an app to help people identify red flag food and green flag food making food allergy/ intolerance a little more safe.
                </h1>
                <p className={styles.p1}>
                    so they don’t die to something like a peanut allergy
                </p>
            </div>
            <div className={styles.leftColumn}>
        </div>
    );
};

export default Photos;
