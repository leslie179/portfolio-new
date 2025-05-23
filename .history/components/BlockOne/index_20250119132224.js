import React from 'react';
import styles from './BlockOne.module.css'; // Specific styles for this block

const BlockOne = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/candl-branding.png" alt="Candl Branding" />
            <h2 className={styles.h2}>Candl</h2>
            <p className={styles.pp}>This project is about innovating candle design and marketing strategies.</p>
        </div>
    );
};

export default BlockOne;
