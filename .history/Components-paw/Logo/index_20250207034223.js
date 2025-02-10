import React from 'react';
import styles from './Logo.module.css'; // Adjust path if necessary

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img1} src="site-photos-paw/paw-logo.png" alt="brand-logo" />

            <div class="container">
  <div class="item">
    <img src="path-to-image.jpg" alt="Description of Image">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="item">
    <img src="path-to-image.jpg" alt="Description of Image">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="item">
    <img src="path-to-image.jpg" alt="Description of Image">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</div>
        </div>
    );
};

export default BrandComponent;
