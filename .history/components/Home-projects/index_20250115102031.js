import React from 'react';
import styles from "./HomeProjects.module.css";
import Banner from "./Banner";

export default function HomeProjects() {
    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                {/* First project with image, title, description, and button */}
                <img className={styles.firstImage} src="/site-photos/candl-branding.png" alt="Candl Branding" />
                <h3 className={styles.h3}>Candl</h3>
                <p className={styles.p}>This project is about innovating candle design and marketing strategies.</p>
                <a href="https://www.candl-example.com" target="_blank" rel="noopener noreferrer">
                    <button class type="button">Visit Candl</button>
                </a>

                {/* Second project with image */}
                <img className={styles.secondImage} src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
                <h3 className={styles.h3}>Paw By Paw</h3>
                <p className={styles.p}>This project focuses on branding strategies for pet care products.</p>
                <a href="https://www.pawbypaw-example.com" target="_blank" rel="noopener noreferrer">
                    <button type="button">Visit Paw By Paw</button>
                </a>

                {/* Third project with image */}
                <img className={styles.thirdImage} src="/site-photos/wellness-branding.png" alt="Wellness Branding" />
                <h3 className={styles.h3}>Wellness</h3>
                <p className={styles.p}>This project promotes wellness and healthy lifestyle branding.</p>
                <a href="https://www.wellness-example.com" target="_blank" rel="noopener noreferrer">
                    <button type="button">Visit Wellness</button>
                </a>
            </div>
            {/* Additional separate image for decoration or extra content */}
            <img className={styles.HermiePhoto} src="/site-photos/leslie-hermier-dog-photo.png" alt="Leslie and Hermie" />
            <Banner />
        </div>
    );
}
