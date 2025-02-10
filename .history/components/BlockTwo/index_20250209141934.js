import React from 'react';
import styles from './BlockTwo.module.css';

const BlockTwo = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/pawpaw.png" alt="Paw By Paw Branding" />
            <h2 className={styles.h2}>Paw By Paw</h2>
            <p className={styles.pp}>This project focuses on branding strategies for pet care products.</p>
            <a href="/pawbypaw" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
    );
};

export default BlockTwo;
