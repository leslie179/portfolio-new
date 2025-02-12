import { useState, useEffect } from "react";

import styles from './'; 
import Link from 'next/link';

const Menu = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(typeof window !== 'undefined' ? window.pageYOffset : 0);
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
        <div className={visible ? styles.floatingMenu : `${styles.floatingMenu} ${styles.hidden}`}>
            <img className={styles.img} src="/site-photos/site-logo.png" alt="Site Logo" />
            <nav>
                <Link href="/" className={styles.home}>HOME</Link>
                <Link href="/pawbypaw" className={styles.home}>PROJECTS</Link>
            </nav>
        </div>
    );
};

export default Menu;
