import React, { useState, useEffect } from 'react';
import styles from './Changing.module.css'; // Ensure this is correctly imported

const images = [
    { left: 'url(/site-photos/candl-branding.png)', right: 'url(/site-photos/pawpaw.png)' },
    { left: 'url(/site-photos/wellness-mug.jpg)', right: 'url(/site-photos/wellness-sticker.png)' },
    { full: 'url(/site-photos/amma-tote-bag.png)' },
    { full: 'url(/site-photos/wellness-branding.png)' }
];

const Changing = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentSlide + 1) % images.length;

            // If the next image is a full image, change immediately
            if (images[nextIndex].full) {
                setCurrentSlide(nextIndex);
            } else {
                // Otherwise, update left first, and delay right update
                setCurrentSlide(nextIndex);
                const timeout = setTimeout(() => {
                    setCurrentSlide(nextIndex); // This forces re-render
                }, 2000); // Delay for right image update

                return () => {
                    clearTimeout(timeout); // Clear timeout when component unmounts or dependencies change
                };
            }
        }, 10000); // Change slide every 10 seconds

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);

    return (
        <div className={styles.banner}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${styles.bannerSlide} ${index === currentSlide ? styles.active : ''}`}
                    style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                    {'left' in image && 'right' in image ? (
                        <div className={styles.splitScreen}>
                            <div
                                className={styles.half}
                                style={{ backgroundImage: image.left }}
                            ></div>
                            <div
                                className={styles.half}
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
        </div>
    );
};

export default Changing;
