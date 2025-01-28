import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [leftIndex, setLeftIndex] = useState(1); // Initialize leftIndex to the first image
    const [rightIndex, setRightIndex] = useState(2); // Initialize rightIndex to the second image
    const backgrounds = [
        '/site-photos/Candl-Branding.png',
        '/site-photos/Paw-By-Paw-Branding.jpg',
        '/site-photos/four-golf-flag.png',
        '/site-photos/Candl.png', // Additional images for a continuous flow
        '/site-photos/amma-tote-bag.png',
        '/site-photos/Candl.png',
        ''
        '/site-photos/paw-by-paw-branding.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            // Update indices to show next images, ensuring they always wrap around with modulo
            setLeftIndex(prevIndex => (prevIndex + 2) % backgrounds.length);
            setRightIndex(prevIndex => (prevIndex + 2) % backgrounds.length);
        }, 3000); // Change images every 5 seconds

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    // Determine classes based on index for potential future styling modifications
    const getClassName = (index) => (
        index % 2 === 0 ? `${styles.bannerSlide} ${styles.leftPhoto}` : `${styles.bannerSlide} ${styles.rightPhoto}`
    );

    return (
        <div className={styles.banner}>
            {/* Left Photo */}
            <div
                className={`${getClassName(leftIndex)} ${styles.active}`}
                style={{ backgroundImage: `url(${backgrounds[leftIndex]})` }}
            >
                <div className={styles.overlay}></div>
            </div>

            {/* Right Photo */}
            <div
                className={`${getClassName(rightIndex)} ${styles.active}`}
                style={{ backgroundImage: `url(${backgrounds[rightIndex]})` }}
            >
                <div className={styles.overlay}></div>
            </div>
        </div>
    );
};

export default Banner;
