import React from 'react';
import styles from './Menu.module.css';  // Assuming the CSS module is in the same directory

const Menu = () => {
    return (
        <div className={styles.floatingMenu}>
            <img src="site-logo.png" />
            
            <nav>
                <a href="#home" className={styles.active}>HOME</a>
                <a href="#projects">PROJECTS</a>
            </nav>
        </div>
    );
};

export default Menu;
