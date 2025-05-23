
import styles from './BlockTwo.module.css';

const BlockTwo = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/pawpaw.png" alt="Paw By Paw Branding" />
            <h2 className={styles.h2}>GoldiBite</h2>
            <p className={styles.pp}>This project focuses on the developent of an app that assist people with food allergy/intolerance</p>
            <a href="/goldibite" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
    );
};

export default BlockTwo;
