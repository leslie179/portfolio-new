import React, { useEffect, useState } from 'react';
import styles from './Parallax.module.css'; // Make sure the path is correct

const Parallax = () => {
    const [offsetY, setOffsetY] = useState(0);
    const numImages = 12;  // Ensure this matches the number of images you have

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.parallaxContainer}>
            {Array.from({ length: numImages }).map((_, index) => (
                <div 
                    key={index}
                    className={styles.parallaxItem}
                    style={{ transform: `translateY(${offsetY * 0.05 * (index + 1)}px)` }}
                >
                    <img src={`/site-photos/${index + 1}.jpg`} alt={`Scene ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Parallax;
