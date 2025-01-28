import React from 'react';
import styles from './Banner.module.css'; // Ensure styles are correctly imported

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerSlide} style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        {/* Overlay div added here */}
        <div className={styles.overlay}></div>
      </div>
      {/* Additional content or slides can be added here */}
      <h1>Crafting Visuals That Speak Louder Than Words</h1>
      <button>Let's Go</button>
    </div>
  );
};

export default Banner;
