import React from 'react';
import styles from './Logo.module.css'; // Make sure this path matches your CSS module file

const BrandComponent = () => {
    return (
        <div className={styles.container}>
        
            <div className={styles.text}>
                <p>Tall fonts signify authority, whereas irregular shapes and fonts evoke a relaxed, handcrafted vibe.</p>
                .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: white;
    background-color: black;
    text-align: center;
    padding: 20px;
    flex-direction: row; /* Default to row for larger screens */
}

.logo img {
    width: auto;
    height: 150px; /* Maintain consistent size */
    margin: 20px; /* Add margin for spacing */
}

.text {
    max-width: 600px; /* Restrict text width for better readability */
    padding: 20px; /* Padding for text for better spacing */
    font-size: 1rem;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
    .container {
        flex-direction: column; /* Change to column layout on smaller screens */
    }

    .logo img {
        height: 100px; /* Optionally resize the logo for smaller screens */
        margin: 10px; /* Reduce margin for smaller layout */
    }

    .text {
        font-size: 0.9rem; /* Optionally reduce font size on smaller screens */
        padding: 10px; /* Reduce padding for text on smaller screens */
    }
}

                <div className={styles.logo}>
                <picture>
                    <source media="(min-width: 769px)" srcSet="site-photos-paw/Screen.png" />
                    <source media="(max-width: 768px)" srcSet="site-photos-paw/Mobile.png" />
                    <img src="public/site-photos-paw/Screen.png" alt="Brand Logo" className={styles.logoImage} />
                </picture>
           c
                <p>The brand believes there are no bad dogs, only untrained ones. The logo features a content corgi, symbolizing peace and happiness even for stubborn breeds.</p>
            </div>
        </div>
    );
};

export default BrandComponent;
