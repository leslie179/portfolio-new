import React from 'react';
import styles from "./HomeProjects.module.css";  // Assuming you have your styles defined here

export default function HomeProjects() {
    return (
        <div className={styles.container}>
            <div className={styles.stickyBlock}>
                <img src="/site-photos/candl-branding.png" alt="Candl Branding" />
                <h2 className={styles.projectTitle}>Candl</h2>
                <p>This project is about innovating candle design and marketing strategies.</p>
            </div>
            <div className={styles.scrollingBlock}>
                <img src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
                <h2 className={styles.projectTitle}>Paw By Paw</h2>
                <p>This project focuses on branding strategies for pet care products.</p>
            </div>
            <div className={styles.scrollingBlock}>
                <img src="/site-photos/wellness-branding.png" alt="Wellness Branding" />
                <h2 className={styles.projectTitle}>Wellness</h2>
                <p>This project promotes wellness and healthy lifestyle branding.</p>
            </div>
        </div>
    );
}
