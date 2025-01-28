import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css'; 

const Menu = () => {
    // Initialize state with undefined or a suitable default value
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Set the initial position once the component is mounted
        const currentScrollPos = window.pageYOffset;
        setPrevScrollPos(currentScrollPos);

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]); // Depend on prevScrollPos to update visibility

    return (
        <div className={visible ? styles.floatingMenu : `${styles.floatingMenu} ${styles.hidden}`}>
            <img className={styles.img} src="/site-photos/site-logo.png" alt="Site Logo" />
            <nav>
                <a href="#home" className={styles.home}>HOME</a>
                <a href="#projects" className={styles.home}>PROJECTS</a>
            </nav>
        </div>
    );
};

export default Menu;