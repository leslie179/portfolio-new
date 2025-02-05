import React, { useState, useEffect } from 'react';
import styles from './Changing.module.css'; // Ensure this is correctly imported

const images = [
    { type: 'full', url: 'url(/site-photos/amma-tote-bag.png)' },
    { type: 'left', url: 'url(/site-photos/candl-branding.png)' },
    { type: 'right', url: 'url(/site-photos/pawpaw.png)' },
    { type: 'left', url: 'url(/site-photos/wellness-mug.jpg)' },
    { type: 'right', url: 'url(/site-photos/wellness-sticker.png)' },
    { type: 'full', url: 'url(/site-photos/wellness-branding.png)' }
];

const Changing = () => {
    const [currentImages, setCurrentImages] = useState([]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setCurrentImages(prevImages => [...prevImages, images[index]]);
            index = (index + 1) % images.length;
        }, 700); // Add a new image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.banner}>
            {currentImages.map((image, idx) => (
                <div
                    key={idx}
                    className={`${styles.bannerSlide} ${styles[image.type]}`}
                    style={{ backgroundImage: image.url, zIndex: idx }}
                >
                    <div className={styles.overlay}></div>
                </div>
            ))}
              <h2 className={styles.h2}>Crafting Visuals That Speak Louder Than Words</h2>
        </div>
    );
};

export default Changing;
