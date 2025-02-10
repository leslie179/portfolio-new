import React from 'react';
import styles from './Logo.module.css'; // Adjust path if necessary

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <svg width="100" height="10">
    <line x1="0" y1="5" x2="100" y2="5" style="stroke: black; stroke-width: 2" />
</svg>
            <div className={styles.container1}>
                <img className={styles.img} src="site-photos-paw/griddy-doogo.png" alt="dog-logo-grid"/>
            </div>
        </div>
    );
};

export default BrandComponent;
