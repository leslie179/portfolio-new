import React from 'react';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftColumn}>
                <h2 className={styles.h2}>Business Name</h2>
                <p className={styles.p}>Paw by Paw</p>
                <h2 className={styles.h2}>Project Type</h2>
                <p className={styles.p}>Brand identity design / logo design / merch design</p>
                <h2 className={styles.h2}>Softwares involved</h2>
                <p className={styles.p}>Photoshop/ Illustrator/ Canva</p>
                <h2 className={styles.h2}>Softwares involved</h2>
                <p className={styles.p}>Photoshop/ Illustrator/ Canva</p>
                
            </div>
            <div className={styles.rightColumn}>
                <h2 className={styles.h2}>About the business</h2>
                <p className={styles.p}>
                    Paw by Paw enhances the canine-human bond with expert dog training services, high-quality treats. 
                    We provide integrated solutions that cater to the well-being and happiness of every dog and owner, 
                    creating a thriving community of pet enthusiasts.
                </p>
            </div>
        </div>
    );
};

export default About;
