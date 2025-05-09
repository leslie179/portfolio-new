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
                <img src="/site-photos/candl-branding.png" alt="Candl Branding" />
            </div>
            <div className={styles.parallax} style={{ transform: `translateY(${offset * 0.3}px)` }}>
                <img src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
            </div>
            <div className={styles.parallax} style={{ transform: `translateY(${offset * 0.1}px)` }}>
                <img src="/site-photos/wellness-branding.png" alt="Wellness Branding" />
            </div>
        </div>
    );
};

export default HomeProjects;
