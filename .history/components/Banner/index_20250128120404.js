import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'; // Ensure you have this CSS module file

const Banner = () => {
    // Define an initial state for the left and right image indices
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(1); // Start with the second image to avoid initial duplication

    // Define your images and their types if necessary (left, right, full, etc.)
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

    // useEffect to update the indices every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            let nextLeftIndex = (leftIndex + 2) % backgrounds.length;
            let nextRightIndex = (rightIndex + 2) % backgrounds.length;

            // Avoid using the same image on both sides or repeating the last image
            while (nextLeftIndex === nextRightIndex || backgrounds[nextLeftIndex].url === backgrounds[leftIndex].url || backgrounds[nextRightIndex].url === backgrounds[rightIndex].url) {
                nextRightIndex = (nextRightIndex + 1) % backgrounds.length;
            }

            console.log("Updating indices:", nextLeftIndex, nextRightIndex); // Log the indices
            console.log("Image URLs:", backgrounds[nextLeftIndex].url, backgrounds[nextRightIndex].url); // Log the URLs

            setLeftIndex(nextLeftIndex);
            setRightIndex(nextRightIndex);
        }, 5000);

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
