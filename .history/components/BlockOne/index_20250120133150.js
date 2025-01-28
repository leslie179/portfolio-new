import React from 'react';
import styles from './BlockOne.module.css'; // Specific styles for this block

const BlockOne = () => {
    return (
        <div className={styles.stickyBlock}>
            <div className={styles.spacer}></div>  {/* Invisible spacer */}
            <h1 className={styles.h1}>Projects</h1>
            <img src="/site-photos/candl-branding.png" alt="Candl Branding" />
            <h2 className={styles.h2}>Candl</h2>
            <p className={styles.pp}>This project is about innovating candle design and marketing strategies.</p>
            <button>VIEW PROJECT</button>
        </div>
    );
};


export default BlockOne;