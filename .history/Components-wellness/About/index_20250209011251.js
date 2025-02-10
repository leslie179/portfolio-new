import React from 'react';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftColumn}>
                <h2 className={styles.h2}>Business Name</h2>
                <p className={styles.p}>Wellness Journey</p>
                <h2 className={styles.h2}>Project Type</h2>
                <p className={styles.p}>Brand identity design / logo design / merch design</p>
                <h2 className={styles.h2}>Softwares involved</h2>
                <p className={styles.p}>Photoshop/ Illustrator/ Canva</p>
                <h2 className={styles.h2}>Role</h2>
                <p className={styles.p}>White Label Brand designer</p>
                
            </div>
            <div className={styles.rightColumn}>
                <h2 className={styles.h2}>About the business</h2>
                <p className={styles.p}>
                Wellness journey is a company that provides alternative health solutions for families. The company aims for naturopath options to help heal bodies from the core. Client also want sophisticated grounding feel for their brand. A brand that representants the resilience and the growing of the human body. This is a project where the marketing specialist outsourced the branding project to me to help her client brand her business.               </p>
                <h2 className={styles.h2}>Timeline</h2>
                <p className={styles.p}>4 weeks</p>
            </div>
        </div>
    );
};

export default About;
