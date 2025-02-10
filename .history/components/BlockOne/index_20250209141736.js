import React from 'react';
import styles from './BlockOne.module.css';

const BlockOne = () => {
    return (
        <div className={styles.stickyBlock}>
            <div className={styles.spacer}></div>
            <h1 className={styles.h1}>Projects</h1>
            <img src="/site-photos/Candl1.png" alt="Candl Branding" />

            <h2 className={styles.h2}>Candl</h2>
            <p className={styles.pp}>This project is about innovating candle design and marketing strategies.</p>
            <a href="/your-page" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
    );
};


export default BlockOne;