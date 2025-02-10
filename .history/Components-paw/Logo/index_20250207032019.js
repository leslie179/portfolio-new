import React from 'react';
import styles from './Logo.module.css'; // Adjust path if necessary

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <img className={styles.img} src="site-photos-paw/griddy-doogo.png" alt="dog-logo-grid"/>
            </div>
        </div>
    );
};

export default BrandComponent;
