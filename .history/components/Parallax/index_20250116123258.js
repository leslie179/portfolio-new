import { useSpring, animated } from '@react-spring/web';
import React, { useEffect } from 'react';
import styles from './Parallax.module.css';

const Parallax = () => {
    const [{ scrollY }, set] = useSpring(() => ({
        scrollY: 0,
        config: { mass: 1, tension: 210, friction: 20 }
    }));

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
