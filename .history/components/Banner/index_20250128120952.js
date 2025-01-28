import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'; // Make sure the path is correct

const Banner = () => {
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(1);
    
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
            let nextLeftIndex = (leftIndex + 2) % backgrounds.length;
            let nextRightIndex = (rightIndex + 2) % backgrounds.length;

            // Ensure next indices are not the same and not equal to each other
            while (nextLeftIndex === nextRightIndex || backgrounds[nextLeftIndex].url === backgrounds[leftIndex].url || backgrounds[nextRightIndex].url === backgrounds[rightIndex].url) {
                nextRightIndex = (nextRightIndex + 1) % backgrounds.length;
            }

            setLeftIndex(nextLeftIndex);
            setRightIndex(nextRightIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, [leftIndex, rightIndex, backgrounds]);

    return (
        <div className={styles.banner}>
            <div
                className={`${styles.bannerSlide} ${styles.left}`}
                style={{ backgroundImage: `url(${backgrounds[leftIndex].url})` }}
            >
                <div className={styles.overlay}></div>
            </div>
            <div
                className={`${styles.bannerSlide} ${styles.right}`}
                style={{ backgroundImage: `url(${backgrounds[rightIndex].url})` }}
            >
                <div className={styles.overlay}></div>
            </div>
        </div>
    );
};

export default Banner;
