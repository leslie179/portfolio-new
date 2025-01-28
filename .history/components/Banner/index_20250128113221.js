import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(1); // Start with the first pair
    const backgrounds = [
        '/site-photos/Candl-Branding.png',  // 0 left
        '/site-photos/Paw-By-Paw-Branding.jpg', // 1 right
        '/site-photos/four-golf-flag.png', // 2 full
        '/site-photos/four-golf-flag.png', // 3 full
        '/site-photos/Candl-Branding.png',  // 4 left
        '/site-photos/Paw-By-Paw-Branding.jpg', // 5 right
        '/site-photos/Candl-Branding.png',  // 6 left
        '/site-photos/four-golf-flag.png' // 7 full
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const newLeftIndex = (leftIndex + 2) % backgrounds.length;
            const newRightIndex = (rightIndex + 2) % backgrounds.length;
            setLeftIndex(newLeftIndex);
            setRightIndex(newRightIndex);
        }, 5000); // cycle every 5 seconds

        return () => clearInterval(interval);
    }, [leftIndex, rightIndex, backgrounds.length]);

    const getClassName = (index) => {
        if (index % 8 === 2 || index % 8 === 3 || index % 8 === 7) { // full photo cases
            return `${styles.bannerSlide} ${styles.fullPhoto}`;
        } else if (index % 2 === 0) { // even index, left photo
            return `${styles.bannerSlide} ${styles.leftPhoto}`;
        } else { // odd index, right photo
            return `${styles.bannerSlide} ${styles.rightPhoto}`;
        }
    };

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
