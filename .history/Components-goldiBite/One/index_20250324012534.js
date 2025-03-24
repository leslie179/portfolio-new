import styles from './One.module.css';

const One = () => {
    return (
        <div className={styles.one}>
            <h2 className={styles.h2}>One</h2>
            <p className={styles.pp}>This project focuses on the developent of an app that assist people with to learn more about Vancouver's history</p>
            <a href="/one" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
    );
}