// StickyBlockOne.jsx
import React from 'react';
import styles from './StickyBlockOne.module.css'; // Specific styles for this block

const StickyBlockOne = () => {
    return (
        <div className={styles.stickyBlock}>
            <img src="/site-photos/candl-branding.png" alt="Candl Branding" />
            <h2>Candl</h2>
            <p>This project is about innovating candle design and marketing strategies.</p>
        </div>
    );
};

export default StickyBlockOne;

// StickyBlockTwo.jsx
import React from 'react';
import styles from './StickyBlockTwo.module.css'; // Specific styles for this block

const StickyBlockTwo = () => {
    return (
        <div className={styles.scrollingBlock}>
            <img src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
            <h2>Paw By Paw</h2>
            <p>This project focuses on branding strategies for pet care products.</p>
        </div>
    );
};

export default StickyBlockTwo;

// StickyBlockThree.jsx
import React from 'react';
import styles from './StickyBlockThree.module.css'; // Specific styles for this block

const StickyBlockThree = () => {
    return (
        <div className={styles.scrollingBlock}>
            <img src="/site-photos/wellness-branding.png" alt="Wellness Branding" />
            <h2>Wellness</h2>
            <p>This project promotes wellness and healthy lifestyle branding.</p>
        </div>
    );
};

export default StickyBlockThree;
