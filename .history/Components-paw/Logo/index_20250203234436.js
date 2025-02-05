import React from 'react';
import styles from './BrandComponent.module.css'; // Make sure this path matches your CSS module file

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <picture>
                    <source media="(min-width: 769px)" srcSet="public/site-photos-paw/Screen.png" />
                    <source media="(max-width: 768px)" srcSet="public/site-photos-paw/Mobile.png" />
                    <img src="public/site-photos-paw/Screen.png" alt="Brand Logo" className={styles.logoImage} />
                </picture>
            </div>
            <div className={styles.text}>
                <p>Tall fonts signify authority, whereas irregular shapes and fonts evoke a relaxed, handcrafted vibe.</p>
                <p>The brand believes there are no bad dogs, only untrained ones. The logo features a content corgi, symbolizing peace and happiness even for stubborn breeds.</p>
            </div>
        </div>
    );
};

export default BrandComponent;
