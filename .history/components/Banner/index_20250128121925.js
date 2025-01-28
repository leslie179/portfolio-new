import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

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
        }, 2000);
        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <div className={styles.banner}>
            <div
                className={styles.bannerSlide}
                style={{ backgroundImage: `url(${backgrounds[currentIndex].url})` }}
            >
                <div className={styles.overlay}></div>
            </div>
        </div>
    );
};

export default Banner;
