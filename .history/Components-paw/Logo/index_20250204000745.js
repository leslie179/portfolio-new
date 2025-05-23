import React from 'react';
import styles from './Logo.module.css';

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text} style={{ gridArea: 'text1' }}>
                <p>Tall fonts signify authority, whereas irregular shapes and fonts evoke a relaxed, handcrafted vibe.</p>
            </div>
            <div className={styles.logo} style={{ gridArea: 'logo' }}>
                <picture>
                    <source media="(min-width: 769px)" srcSet="public/site-photos-paw/Screen.png" />
                    <source media="(max-width: 768px)" srcSet="public/site-photos-paw/Mobile.png" />
                    <img src="public/site-photos-paw/Screen.png" alt="Brand Logo" />
                </picture>
            </div>
            <div className={styles.text} style={{ gridArea: 'text2' }}>
                <p>The brand believes there are no bad dogs, only untrained ones. The logo features a content corgi, symbolizing peace and happiness even for stubborn breeds.</p>
            </div>
        </div>
    );
};

export default BrandComponent;
