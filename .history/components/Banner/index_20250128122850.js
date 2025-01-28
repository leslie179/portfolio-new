import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'; // Ensure this path is correct

const Banner = () => {
    const [index, setIndex] = useState(0);
    const backgrounds = [
        { url: '/site-photos/Candl-Branding.png', type: 'left' },
        { url: '/site-photos/Paw-By-Paw-Branding.jpg', type: 'right' },
        { url: '/site-photos/four-golf-flag.png', type: 'full' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
        }, 5000); // Change the image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.banner}>
            <div>
                <img
                    className={styles.bannerSlide}
                    src={backgrounds[index].url}
                    style={{
                        display: backgrounds[index].type === 'left' ? 'block' : 'none'
                    }}
                />
                <img
                    className={styles.bannerSlide}
                    src={backgrounds[index].url}
                    style={{
                        display: backgrounds[index].type === 'right' ? 'block' : 'none'
                    }}
                />
            </div>
            {/* {backgrounds.map((bg, idx) => (
                <div
                    key={idx}
                    className={styles.bannerSlide}
                    style={{
                        backgroundImage: `url(${bg.url})`,
                        display: index === idx ? 'block' : 'none' // Only display the current index
                    }}
                >
                    <div className={styles.overlay}></div>
                </div>
            ))} */}
        </div>
    );
};

export default Banner;
