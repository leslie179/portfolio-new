import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
    const [activeLink, setActiveLink] = useState('home'); // Default active is 'home'

    return (
        <div className={styles.floatingMenu}>
            <img className={styles.img} src="/site-photos/site-logo.png" alt="Site Logo" />
            
            <nav>
                <a
                    href="#home"
                    className={activeLink === 'home' ? styles.active : ''}
                    onClick={() => setActiveLink('home')}
                >
                    HOME
                </a>
                <a
                    href="#projects"
                    className={activeLink === 'projects' ? styles.active : ''}
                    onClick={() => setActiveLink('projects')}
                >
                    PROJECTS
                </a>
            </nav>
        </div>
    );
};

export default Menu;
