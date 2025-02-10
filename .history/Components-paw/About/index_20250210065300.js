import React from 'react';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftColumn}>
                <h2 className={styles.h2}>Business Name</h2>
                <p className={styles.p}>Paw by Paw</p>
                <h2 className={styles.h2}>Project Type</h2>
                <p className={styles.p}>Brand identity design / logo design / merch design (Passion project)</p>
                <h2 className={styles.h2}>Softwares involved</h2>
                <p className={styles.p}>Photoshop/ Illustrator/ Canva</p>
                <h2 className={styles.h2}>Role</h2>
                <p className={styles.p}>Lead design/ ux/ui design/ frontend development</p>
                
            </div>
            <div className={styles.rightColumn}>
                <h2 className={styles.h2}>About the business</h2>
                <p className={styles.p}>
                Questify is an educational app that helps users learn more about the environment and how to protect it. It uses animations and a fun, interactive quiz format to teach users in an engaging way.
                </p>
                <h2 className={styles.h2}>Timeline</h2>
                <p className={styles.p}>2 weeks</p>
            </div>
        </div>
    );
};

export default About;
