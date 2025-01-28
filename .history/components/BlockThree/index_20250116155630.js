import React from 'react';
import styles from './BlockThree.module.css';

const BlockThree = () => {
    return (
        <div className={styles.scrollingBlock}>
            <img src="/site-photos/wellness-branding.png" alt="Wellness Branding" />
            <h2>Wellness</h2>
            <p>This project promotes wellness and healthy lifestyle branding.</p>
        </div>
    );
};

export default BlockThree;
