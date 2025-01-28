import React from 'react';
import styles from './BlockTwo.module.css';

const BlockTwo = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
            <h2>Paw By Paw</h2>
            <p>This project focuses on branding strategies for pet care products.</p>
        </div>
    );
};

export default BlockTwo;
