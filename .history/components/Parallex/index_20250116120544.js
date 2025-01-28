import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './YourComponentStyles.module.css'; // Ensure you have your styles defined

export default function YourComponent() {
  // Parallax animation
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  // Event handler for scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      const posY = window.pageYOffset;
      set({ y: posY });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [set]);

  return (
    <animated.div className={styles.parallaxContainer} style={{
      transform: y.to(y => `translate3d(0, ${y * 0.1}px, 0)`)
    }}>
      <h2>Your Parallax Content Here</h2>
      <p>More content here...</p>
    </animated.div>
  );
}
