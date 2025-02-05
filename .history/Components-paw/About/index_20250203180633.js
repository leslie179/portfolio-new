import React from 'react';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.h1}>About the business2</h1> 
            <p className={styles.p}>Paw by Paw enhances the canine-human bond with expert dog training services, high-quality treats. We provide integrated solutions that cater to the well-being and happiness of every dog and owner, creating a thriving community of pet enthusiasts. </p>
        </div>
    );
};

export default About;
