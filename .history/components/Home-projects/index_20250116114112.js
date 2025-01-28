import React, { useState, useEffect } from 'react';
import styles from "./HomeProjects.module.css";

export default function HomeProjects() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                <img 
                  className={styles.firstImage} 
                  src="/site-photos/candl-branding.png" 
                  alt="Candl Branding" 
                  style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                />
                <h3 className={styles.h3}>Candl</h3>
                <p className={styles.p}>This project is about innovating candle design and marketing strategies.</p>
                <a href="https://www.candl-example.com" target="_blank" rel="noopener noreferrer">
                    <button className={styles.button} type="button">Visit Candl</button>
                </a>

                <img 
                  className={styles.secondImage} 
                  src="/site-photos/paw-by-paw-branding.jpg" 
                  alt="Paw By Paw Branding" 
                  style={{ transform: `translateY(${offsetY * 0.4}px)` }}
                />
                <h3 className={styles.h3}>Paw By Paw</h3>
                <p className={styles.p}>This project focuses on branding strategies for pet care products.</p>
                <a href="https://www.pawbypaw-example.com" target="_blank" rel="noopener noreferrer">
                    <button type="button">Visit Paw By Paw</button>
                </a>

                <img 
                  className={styles.thirdImage} 
                  src="/site-photos/wellness-branding.png" 
                  alt="Wellness Branding" 
                  style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                />
                <h3 className={styles.h3}>Wellness</h3>
                <p className={styles.p}>This project promotes wellness and healthy lifestyle branding.</p>
                <a href="https://www.wellness-example.com" target="_blank" rel="noopener noreferrer">
                    <button type="button">Visit Wellness</button>
                </a>
            </div>
        </div>
    );
}
