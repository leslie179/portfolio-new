import React, { useState, useEffect } from 'react';
import styles from './HomeProjects.module.css';

const HomeProjects = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.parallax} style={{ transform: `translateY(${offset * 0.5}px)` }}>
                <img className={styles.imgFirst} src="/site-photos/candl-branding.png" alt="Candl Branding" />
                <h2>Candl</h2>
                <p>This project is about innovating candle design and marketing strategies.</p>
            </div>
            <div className={styles.parallax} style={{ transform: `translateY(${offset * 0.3}px)` }}>
                <img className={styles.img1} src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
                <h2>Paw By Paw</h2>
                <p>This project focuses on branding strategies for pet care products.</p>
            </div>
            <div className={styles.parallax} style={{ transform: `translateY(${offset * 0.1}px)` }}>
                <img src="/site-photos/wellness-branding.png" alt="Wellness Branding" />
                <h2>Wellness</h2>
                <p>This project promotes wellness and healthy lifestyle branding.</p>
            </div>
        </div>
    );
};

export default HomeProjects;
