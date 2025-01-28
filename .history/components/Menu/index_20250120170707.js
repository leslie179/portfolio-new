import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';  // Assuming the CSS module is in the same directory

const Menu = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`${styles.floatingMenu} ${!visible && styles.hidden}`}>
            <img className={styles.img} src="/site-photos/site-logo.png" alt="Site Logo" />
            <nav>
                <a href="#home" className={styles.home}>HOME</a>
                <a href="#projects" className={styles.projects}>PROJECTS</a>
            </nav>
        </div>
    );
};

export default Menu;
