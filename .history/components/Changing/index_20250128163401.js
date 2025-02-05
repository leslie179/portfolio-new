import React, { useState, useEffect } from 'react';
import styles from './Changing.module.css'; // Ensure this is correctly imported

const images = [
    { left: 'url(/site-photos/candl-branding.png)', right: 'url(/site-photos/pawpaw.png)' },
    { left: 'url(/site-photos/wellness-mug.jpg)', right: 'url(/site-photos/wellness-sticker.png)' },
    { full: 'url(/site-photos/amma-tote-bag.png)' },
    { full: 'url(/site-photos/wellness-branding.png)' }
];

const Changing = () => {
    const [leftImage, setLeftImage] = useState(images[0].left);
    const [rightImage, setRightImage] = useState(images[0].right);
    const [currentFullImage, setCurrentFullImage] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentSlide + 1) % images.length;
            setCurrentSlide(nextIndex);

            if (images[nextIndex].full) {
                // Transition to a full image
                setCurrentFullImage(images[nextIndex].full);
                setLeftImage(null);
                setRightImage(null);
            } else {
                // Transition one side at a time
                setCurrentFullImage(null);
                setLeftImage(images[nextIndex].left);
                setTimeout(() => setRightImage(images[nextIndex].right), 5000); // Delay right image change
            }
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, [currentSlide, images]);

    return (
        <div className={styles.banner}>
            {leftImage && (
                <div className={`${styles.splitScreen} ${styles.half}`} style={{ backgroundImage: leftImage }}>
                    <div className={styles.overlay}></div>
                </div>
            )}
            {rightImage && (
                <div className={`${styles.splitScreen} ${styles.half}`} style={{ backgroundImage: rightImage }}>
                    <div className={styles.overlay}></div>
                </div>
            )}
            {currentFullImage && (
                <div className={styles.fullScreen} style={{ backgroundImage: currentFullImage }}>
                    <div className={styles.overlay}></div>
                </div>
            )}
        </div>
    );
};

export default Changing;
