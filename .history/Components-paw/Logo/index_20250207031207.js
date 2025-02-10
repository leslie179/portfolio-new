import React from 'react';
import styles from './Logo.module.css'; // Adjust path if necessary

const BrandComponent = () => {
    return (
        <div className={styles.container}>
            
                    <source media="(min-width: 769px)" srcSet="site-photos-paw/griddy-doogo.png" />
                    <source media="(max-width: 768px)" srcSet="site-photos-paw/Mobile.png" />
                    <img src="site-photos-paw/Screen.png" alt="Brand Logo" />
                
        </div>
    );
};

export default BrandComponent;
