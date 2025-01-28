import React from 'react';
import styles from './BlockOne.module.css'; // Specific styles for this block

const BlockOne = () => {
    return (
        <div></div>
            <h1 className={styles.h1}>Projects</h1>
        <div className={styles.stickyBlock}>
            <div className={styles.imageSection}>
                <img src="/site-photos/candl-branding.png" alt="Candl Branding" />
            </div>
            <div className={styles.textSection}>
                <h2 className={styles.h2}>Candl</h2>
                <p className={styles.pp}>This project is about innovating candle design and marketing strategies.</p>
                <button className={styles.button}>Learn More</button>
            </div>
        </div>
    );
};

export default BlockOne;
