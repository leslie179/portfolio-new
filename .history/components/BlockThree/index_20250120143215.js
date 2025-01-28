import React from 'react';
import styles from './BlockThree.module.css';

const BlockThree = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/Wellness-Journey2.png" alt="Wellness Branding" />
            <h2 className={styles.h2}>Wellness</h2>
            <p className={styles.pp}>This project promotes wellness and healthy lifestyle branding.</p>
            <button className={styles.button}>VIEW PROJECT</button>
          
        </div>
    );
};

export default BlockThree;



