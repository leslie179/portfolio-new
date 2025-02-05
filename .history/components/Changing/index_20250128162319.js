import React, { useEffect, useState } from 'react';
import styles from './Changing.module.css';

const images = [
    { left: 'url(/site-photos/candl-branding.png)', right: 'url(/path/to/image2.jpg)' },
    { left: 'url(/site-photos/candl-branding.png)', right: 'url(/path/to/image4.jpg)' },
    { full: 'url(/path/to/image5.jpg)' },
    { full: 'url(/path/to/image6.jpg)' },
    // Add more images as needed
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
                    style={{
                        display: index === currentSlide ? 'block' : 'none',
                    }}
                >
                    {image.left && image.right ? (
                        <div className={styles.splitScreen}>
                            <div
                                className={styles.left}
                                style={{ backgroundImage: image.left }}
                            ></div>
                            <div
                                className={styles.right}
                                style={{ backgroundImage: image.right }}
                            ></div>
                        </div>
                    ) : (
                        <div
                            className={styles.fullScreen}
                            style={{ backgroundImage: image.full }}
                        ></div>
                    )}
                </div>
            ))}
            <div className={styles.overlay}></div>
        </div>
    );
};

export default Changing;