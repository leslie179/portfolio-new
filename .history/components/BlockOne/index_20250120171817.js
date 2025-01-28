import React from 'react';
import styles from './BlockOne.module.css'; // Specific styles for this block

const BlockOne = () => {
    return (
        <div className={styles.stickyBlock}>
            <div className={styles.spacer}></div>  {/* Invisible spacer */}
            <h1 className={styles.h1}>Projects</h1>
            <img src="/site-photos/Candl1.png" alt="Candl Branding" />
            <img src="/path/to/your/image.jpg" alt="Background" className={stylesbackgroundImg} />
            <h2 className={styles.h2}>Candl</h2>
            <p className={styles.pp}>This project is about innovating candle design and marketing strategies.</p>
            <button className={styles.button}>VIEW PROJECT</button>
        </div>
    );
};


export default BlockOne;