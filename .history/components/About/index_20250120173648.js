import React from 'react';
import styles from './About.module.css'; // Importing the CSS module

const About = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.imageTop}>
                <img src="/path/to/your/first-image.jpg" alt="Leslie with a drink" />
            </div>
            <div className={styles.textContent}>
                <h1>Hi, I'm Leslie!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida eros nec dui scelerisque, sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                <p>Sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
            </div>
            <div className={styles.imageBottom}>
                <img src="/path/to/your/second-image.jpg" alt="Leslie with a dog" />
            </div>
        </div>
    );
};

export default About;
