import React from 'react';
import styles from './Banner.module.css'; // Ensure this path is correct

const Banner = () => {
    const backgrounds = [
        { url: '/site-photos/Candl-Branding.png', type: 'left' },
        { url: '/site-photos/Paw-By-Paw-Branding.jpg', type: 'right' },
        { url: '/site-photos/four-golf-flag.png', type: 'full' }
    ];

    return (
        <div className={styles.banner}>
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={styles.bannerSlide}
                    style={{ backgroundImage: `url(${bg.url})` }}
                >
                    <div className={styles.overlay}></div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
