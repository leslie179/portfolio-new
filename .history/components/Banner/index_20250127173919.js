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
            setCurrentIndex((currentIndex + 1) % backgrounds.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, backgrounds.length]);

    return (
        <div className={styles.banner}>
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`${styles.bannerSlide} ${index === currentIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    {/* Adding an overlay here */}
                    <div className={styles.overlay}></div>
                </div>
            ))}
            {/* Additional banner content here, like headings or buttons */}
        </div>
    );
};

export default Banner;
