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