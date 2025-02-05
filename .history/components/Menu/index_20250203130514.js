import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css'; 

const Menu = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Initialize without window
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Set the initial position once the component is mounted and window is available
        setPrevScrollPos(window.pageYOffset);

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]); // Only re-run the effect if prevScrollPos changes

    return (
        <div className={visible ? styles.floatingMenu : `${styles.floatingMenu} ${styles.hidden}`}>
            <img className={styles.img} src="/site-photos/site-logo.png" alt="Site Logo" />
            <nav>
                <a href="#home" className={styles.home}>HOME</a>
                <a href="../../pages/pawbypaw.js" className={styles.home}>PROJECTS</a>
            </nav>
        </div>
    );
};

export default Menu;
