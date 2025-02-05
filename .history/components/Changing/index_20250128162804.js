import React, { useState, useEffect } from 'react';
import styles from './Changing.module.css'; // Ensure this is correctly imported

const images = [
    { left: 'url(/site-photos/candl-branding.png)', right: 'url(/site-photos/pawpaw.png)' },
    { left: 'url(/site-photos/wellness-mug.jpg)', right: 'url(/site-photos/wellness-sticker.png)' },
    { full: 'url(/site-photos/amma-tote-bag.png)' },
    { full: 'url(/site-photos/candl-branding.png)' },
];

const Changing = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 10000); // Change slide every 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.banner}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${styles.bannerSlide} ${index === currentSlide ? styles.active : ''}`}
                    style={{ backgroundImage: image.left || image.full }}
                >
                    {image.left && (
                        <div className={styles.splitScreen}>
                            <div className={styles.half} style={{ backgroundImage: image.left }}></div>
                            <div className={styles.half} style={{ backgroundImage: image.right }}></div>
                        </div>
                    )}
                    {image.full && (
                        <div className={styles.fullScreen} style={{ backgroundImage: image.full }}></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Changing;
