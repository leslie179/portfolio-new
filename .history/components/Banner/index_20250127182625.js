import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgrounds = [
        '/site-photos/Candl-Branding.png',
        '/site-photos/Paw-By-Paw-Branding.jpg',
        '/site-photos/Wellness-Branding.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 3000); // Change image every 4 seconds to account for 1s transition + 3s pause

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <div className={styles.banner}>
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`${styles.bannerSlide} ${index === currentIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className={styles.overlay}></div>
                </div>
            ))}
            <div className={styles.parentContainer}>
                 <h2 className={styles.h2}>Crafting Visuals That Speak Louder Than Words</h2>
            </div>
        </div>
    );
};

export default Banner;
