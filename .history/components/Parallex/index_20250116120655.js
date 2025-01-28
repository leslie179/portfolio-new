import React, { useState, useEffect } from 'react';
import styles from './HomeProjects.module.css';  // Your CSS file path

export default function HomeProjects() {
    const [parallaxOffset, setParallaxOffset] = useState(0);

    const handleScroll = () => {
        const offset = window.pageYOffset;
        setParallaxOffset(offset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                <div style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }} className={styles.parallaxBlock}>
                    <img className={styles.firstImage} src="/site-photos/candl-branding.png" alt="Candl Branding" />
                    <h3 className={styles.h3}>Candl</h3>
                    <p className={styles.p}>This project is about innovating candle design and marketing strategies.</p>
                    <a href="https://www.candl-example.com" target="_blank" rel="noopener noreferrer">
                        <button className={styles.button} type="button">Visit Candl</button>
                    </a>
                </div>
                {/* Repeat blocks for other projects with different translate values if desired */}
            </div>
        </div>
    );
}
