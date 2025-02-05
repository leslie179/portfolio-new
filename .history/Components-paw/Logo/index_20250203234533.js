import React from 'react';
import styles from './Logo.module.css'; // Make sure this path matches your CSS module file

const BrandComponent = () => {
    return (
        <div className={styles.container}>
        
            <div className={styles.text}>
                <p>Tall fonts signify authority, whereas irregular shapes and fonts evoke a relaxed, handcrafted vibe.</p>
                <p>The brand believes there are no bad dogs, only untrained ones. The logo features a content corgi, symbolizing peace and happiness even for stubborn breeds.</p>
            </div>
        </div>
    );
};

export default BrandComponent;
