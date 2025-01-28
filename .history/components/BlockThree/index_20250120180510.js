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
                <div className={styles.leftRightContainer}>
                     <img  className={styles.imageTop} src="/site-photos/leslie-photo.png" alt="Leslie with a drink" />
                     <img className={styles.imageTop}src="/site-photos/leslie-and-hermie.png" alt="Leslie with a dog" />
                    <div className={styles.textContent}>
                        <h1>Hi, I'm Leslie!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida eros nec dui scelerisque, sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                        <p>Sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className={styles.imageTop}>
                    <img src="/site-photos/leslie-and-hermie.png" alt="Leslie with a dog" />
                </div>
            </div>

        </div>
      
        
    );
};

export default BlockThree;
