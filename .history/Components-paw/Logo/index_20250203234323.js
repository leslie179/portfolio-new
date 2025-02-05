import React from 'react';
import styles from './BrandComponent.module.css'; // Ensure this path matches your CSS module file

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                {/* Replace 'logo.png' with your actual logo image path */}
                <img src="/path/to/logo.png" alt="Brand Logo" />
            </div>
            <div className={styles.text}>
                <p>Tall fonts signify authority, whereas irregular shapes and fonts evoke a relaxed, handcrafted vibe.</p>
                <p>The brand believes there are no bad dogs, only untrained ones. The logo features a content corgi, symbolizing peace and happiness even for stubborn breeds.</p>
            </div>
        </div>
    );
};

export default BrandComponent;
