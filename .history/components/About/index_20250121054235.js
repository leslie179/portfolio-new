import React from 'react';
import styles from './About.module.css'; // Ensure this path is correct

const About = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.imageColumn}>
                <img src="/site-photos/leslie-photo.png" alt="Leslie with a drink" className={styles.baseImage} />
                <img src="/site-photos/leslie-and-hermie.png" alt="Leslie with her dog" className={styles.topImage} />
            </div>
            <div className={styles.textContent}>
                <h1>Hi, I'm Leslie!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida eros nec dui scelerisque, sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                <p>Sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
            </div>
        </div>
    );
};

export default About;
