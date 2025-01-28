import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgrounds = [
        { url: '/site-photos/Candl-Branding.png', type: 'left' },
        { url: '/site-photos/Paw-By-Paw-Branding.jpg', type: 'right' },
        { url: '/site-photos/four-golf-flag.png', type: 'full' },
        { url: '/site-photos/Candl.png', type: 'left' },
        { url: '/site-photos/amma-tote-bag.png', type: 'right' },
        { url: '/site-photos/Candl.png', type: 'left' },
        { url: '/site-photos/amma-tote-bag.png', type: 'right' },
        { url: '/site-photos/paw-by-paw-branding.jpg', type: 'full' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000);  // Change images every 5 seconds
        return () => clearInterval(interval);
    }, [backgrounds.length]);

    const currentImage = backgrounds[currentIndex];
    const isFullWidth = currentImage.type === 'full';

    return (
        <div className={styles.banner}>
            {!isFullWidth && (
                <>
                    <div
                        className={`${styles.bannerSlide} ${styles.left}`}
                        style={{ backgroundImage: `url(${backgrounds[currentIndex % backgrounds.length].url})` }}
                    >
                        <div className={styles.overlay}></div>
                    </div>
                    <div
                        className={`${styles.bannerSlide} ${styles.right}`}
                        style={{ backgroundImage: `url(${backgrounds[(currentIndex + 1) % backgrounds.length].url})` }}
                    >
                        <div className={styles.overlay}></div>
                    </div>
                </>
            )}
            {isFullWidth && (
                <div
                    className={`${styles.bannerSlide} ${styles.full}`}
                    style={{ backgroundImage: `url(${currentImage.url})` }}
                >
                    <div className={styles.overlay}></div>
                </div>
            )}
        </div>
    );
};

export default Banner;
