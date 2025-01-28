import React from 'react';
import styles from './BlockThree.module.css'; // Import your CSS module

const BlockThree = () => {
    return (
        <div className={styles.stickyBlock}>
            {/* Added a container div for the image to handle the flip animation */}
            <div className={styles.flipContainer}>
                <img src="/site-photos/Wellness-Journey2.png" alt="Wellness-Journey-Branding" className={styles.flipImage}/>
            </div>
            <h2 className={styles.h2}>Wellness Journey</h2>
            <p className={styles.pp}>This project focuses on branding strategies for a wellness business</p>
            <button className={styles.button}>VIEW PROJECT</button>
        </div>
    );
};

export default BlockThree;
