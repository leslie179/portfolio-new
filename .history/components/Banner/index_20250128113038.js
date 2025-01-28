import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgrounds = [
        '/site-photos/Candl-Branding.png',  // left
        '/site-photos/Paw-By-Paw-Branding.jpg', // right
        '/site-photos/four-golf-flag.png', // full
        '/site-photos/four-golf-flag.png', // full
        '/site-photos/Candl-Branding.png',  // left
        '/site-photos/Paw-By-Paw-Branding.jpg', // right
        '/site-photos/Candl-Branding.png',  // left
        '/site-photos/four-golf-flag.png' // full
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000); // cycle every 5 seconds, adjust as needed

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    const getClassName = (index) => {
        const patternIndex = index % 8; // There are 8 patterns
        switch (patternIndex) {
            case 0: case 4: case 6:
                return `${styles.bannerSlide} ${styles.leftPhoto}`;
            case 1: case 5:
                return `${styles.bannerSlide} ${styles.rightPhoto}`;
            case 2: case 3: case 7:
                return `${styles.bannerSlide} ${styles.fullPhoto}`;
            default:
                return styles.bannerSlide;
        }
    };

    return (
        <div className={styles.banner}>
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`${getClassName(index)} ${index === currentIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className={styles.overlay}></div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
