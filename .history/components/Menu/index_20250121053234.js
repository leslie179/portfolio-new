import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css'; // Assuming the CSS module is in the same directory

const Menu = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            // Set visible to false if scrolling down, true if scrolling up
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

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
