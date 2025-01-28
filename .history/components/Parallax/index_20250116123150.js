import { useSpring, animated } from '@react-spring/web'; // Ensure correct import
import React, { useEffect, useState } from 'react';
import styles from './Parallax.module.css'; // Ensure this path is correct

const Parallax = () => {
    const [offsetY, setOffsetY] = useState(0);

    const { scrollY } = useSpring({
        scrollY: offsetY,
        config: { mass: 1, tension: 210, friction: 20 },
        onChange: { value } => setOffsetY(value.scrollY) // This is optional, for dynamic updates
    });

    useEffect(() => {
        const handleScroll = () => {
            set({ scrollY: window.pageYOffset });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [set]);

    return (
        <div className={styles.parallaxContainer}>
            {Array.from({ length: 12 }).map((_, index) => (
                <animated.div 
                    key={index}
                    className={styles.parallaxItem}
                    style={{
                        transform: scrollY.to(y => `translate3d(0, ${y / (index + 1) * 0.1}px, 0)`)
                    }}
                >
                    <img src={`/site-photos/photo${index + 1}.jpg`} alt={`Scene ${index + 1}`} />
                </animated.div>
            ))}
        </div>
    );
};

export default Parallax;
