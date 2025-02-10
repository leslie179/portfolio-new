import React from 'react';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftColumn}>
                <h2 className={styles.h2}>App Name</h2>
                <p className={styles.p}>Questify</p>
                <h2 className={styles.h2}>Project Type</h2>
                <p className={styles.p}>Brand identity design (Passion project)</p>
                <h2 className={styles.h2}>Softwares involved</h2>
                <p className={styles.p}>Photoshop/ Illustrator/ Canva</p>
                <h2 className={styles.h2}>Role</h2>
                <p className={styles.p}>Brand designer</p>
                
            </div>
            <div className={styles.rightColumn}>
                <h2 className={styles.h2}>About the business</h2>
                <p className={styles.p}>
                Candl is a unique project dedicated to creating high-quality candles that go beyond just lighting up your space. These candles are crafted using premium ingredients that, when melted, transform into a warm body moisturizer, perfect for nourishing and soothing your skin. Combining innovation with care for the planet, Candl ensures all its packaging is eco-friendly and designed to return to nature—simply plant it, and it gives back to the earth. With Candl, every detail is thoughtfully curated to bring warmth, wellness, and sustainability into your life.
                </p>
                <h2 className={styles.h2}>Timeline</h2>
                <p className={styles.p}>2 weeks</p>
            </div>
        </div>
    );
};

export default About;
