import React from 'react';
import styles from './BlockThree.module.css';

const BlockThree = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/Wellness-Journey2.png" alt="Wellness-Journey-Branding" className={styles.backgroundImage} />
            <div className={styles.flipContainer}>
                <img src="/site-photos/wellness-sticker.png" alt="Wellness-Journey-Sticker" className={styles.rotateImage} />
            </div>
            <h2 className={styles.h2}>Wellness Journey</h2>

            <p className={styles.pp}>This project focuses on branding strategies for a wellness business</p>
            <button className={styles.button}>VIEW PROJECT</button>
            <About />


        </div>



    );
};

export default BlockThree;
