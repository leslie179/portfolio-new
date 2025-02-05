import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgrounds = [
        '/site-photos/Candl-Branding.png',
        '/site-photos/Paw-posters.png',
        '/site-photos/Paw-By-Paw-Branding.jpg',
        '/site-photos/Paw-snack.png'
        '/s'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            '/s'
            setCurrentIndex((currentIndex + 1) % backgrounds.length);
        }, 1000); // Change image every 3 seconds

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
                    <div className={styles.overlay}></div> {/* Ensures the overlay is correctly applied */}
                    <div className={styles.parentContainer}>
                        <h2 className={styles.h2}>Crafting Visuals That Speak Louder Than Words</h2>
                        <button className={styles.button}>VIEW PROJECT</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
