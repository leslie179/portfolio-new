import React from 'react';
import styles from './BlockThree.module.css';

const BlockThree = () => {
    return (
        <div className={styles.stickyBlock}>
            <img className={src="/site-photos/Wellness-Journey2.png" alt="Wellness-Journey-Branding" />
            <h2 className={styles.h2}>Wellness Journey</h2>
            <p className={styles.pp}>This project focuses on branding strategies for a wellness business</p>
            <button className={styles.button}>VIEW PROJECT</button>
        </div>
    );
};

export default BlockThree;
