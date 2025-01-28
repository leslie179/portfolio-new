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
           
            <div className={styles.container}>

                <img className={styles.baseImage} src="/site-photos/leslie-photo.png" alt="Leslie in the living room" />
                <img className={styles.topImage} src="/site-photos/leslie-and-hermie.png" alt="Leslie with her dog" />

                <div className={styles.column}>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/leslie--chan/">LinkedIn</a>
                        <a href="https://www.instagram.com/glassslipperstudio_/">Instagram</a>
                        <a href="https://www.facebook.com/saveyoursanitydesings/">Facebook</a>
                        <a href="https://www.behance.net/lesliechan19">Behance</a>
                    </div>
                </div>
                <div className={styles.column}>
                    
                    <p className={styles.pp}>Sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                       
                    <img className={styles.baseImage} src="/site-photos/leslie-photo.png" alt="Leslie in the living room" />
                    <img className={styles.topImage} src="/site-photos/leslie-and-hermie.png" alt="Leslie with her dog" />
                


                

                </div>
            </div>
        </div>


    );
};

export default BlockThree;
