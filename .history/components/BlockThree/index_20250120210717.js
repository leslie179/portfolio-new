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
            <div className={styles.gridContainer}>
                                <div className={styles.column}>
                    <h1 className={styles.h2}>Hi, I'm Leslie!</h1>
                    <p className={styles.pp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida eros nec dui scelerisque, sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                    <p className={styles.pp}>Sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>

                </div>
            </div>
        </div>


    );
};

export default BlockThree;
