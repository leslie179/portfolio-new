import React, { useEffect, useState } from 'react';
import styles from '@/styles/Parallax.module.css'; // Ensure you have this CSS file

const Parallax = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.parallaxContainer}>
            {Array.from({ length: 12 }).map((_, index) => (
                <div 
                    key={index}
                    className={styles.parallaxItem}
                    style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
                >
                    <img src={`/site-photos/photo${index + 1}.jpg`} alt={`Scene ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Parallax;
