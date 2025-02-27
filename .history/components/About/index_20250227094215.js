//import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.imageColumn}>
                <img src="/site-photos/leslie-photo.png" alt="Leslie with a drink" className={styles.baseImage} />
                <img src="/site-photos/leslie-and-hermie1.png" alt="Leslie with her dog" className={styles.topImage} />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Hi, I am Leslie!</h2>
                <p className={styles.pp}>I'm originally from Hong kong! In the photo that's my dog Hermie</p>
                <p className={styles.pp}>I love all my kinds of art whether it's music, doodle </p>
            </div>
        </div>
    );
};

export default About;
