
import styles from './BlockFive.module.css';

const BlockFive = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/goldi-bite.png" alt="Paw By Paw Branding" />
            <h2 className={styles.h2}>Questify</h2>
            <p className={styles.pp}>This project focuses on the developent of an app that assist people with to learn more about Vancouver's history</p>
            <a href="/questify" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
    );
};

export default BlockFour;
