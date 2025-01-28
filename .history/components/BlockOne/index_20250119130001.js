import React from 'react';
import styles from './BlockOne.module.css'; // Specific styles for this block

const BlockOne = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/candl-branding.png" alt="Candl Branding" />
            <h2 className=''>Candl</h2>
            <p>This project is about innovating candle design and marketing strategies.</p>
        </div>
    );
};

export default BlockOne;