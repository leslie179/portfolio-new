import React from 'react';
import styles from './Logo.module.css'; // Make sure you have the CSS correctly set up

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <picture>
                        <source media="(max-width: 768px)" srcSet="site-photos-paw/Mobile.png" />
                        <source media="(min-width: 769px)" srcSet="site-photos-paw/Screen.png" />
                        <img src="public/site-photos-paw/Screen.png" alt="Brand Logo" className={styles.logoImage} />
                    </picture>
                    <div className={styles.logo}>PAWPAW</div>
                    <p className={styles.tagline}>Tall fonts signify authority, whereas irregular shapes and fonts evoke a relaxed, handcrafted vibe.</p>
                </div>
                <div className={styles.right}>
                    <p>The brand believes there are no bad dogs, only untrained ones. The logo features a content corgi, symbolizing peace and happiness even for stubborn breeds.</p>
                </div>
            </div>
        </div>
    );
};

export default BrandComponent;
