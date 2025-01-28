import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'; // Ensure this path is correct

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgrounds = [
        { url: '/site-photos/Candl-Branding.png', type: 'left' },
        { url: '/site-photos/Paw-By-Paw-Branding.jpg', type: 'right' },
        { url: '/site-photos/four-golf-flag.png', type: 'full' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <div className={styles.banner}>
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`${styles.bannerSlide} ${index === currentIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${bg.url})`, display: index === currentIndex ? 'block' : 'none' }}
                >
                    <div className={styles.overlay}></div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
