import React from 'react';
import styles from './Logo.module.css';

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
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
