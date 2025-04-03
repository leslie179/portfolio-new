import { useState, useEffect } from "react";
import styles from './Menu.module.css'; 
import Link from 'next/link';

const Menu = () => {
   // const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (typeof window === "undefined") return; 

        let prevPos = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevPos > currentScrollPos || currentScrollPos < 10);
            prevPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={visible ? styles.floatingMenu : `${styles.floatingMenu} ${styles.hidden}`}>
            <img className={styles.img} src="/site-photos/site-logo.png" alt="Site Logo" />
            <nav>
                <Link href="/" className={styles.home}>HOME</Link>
              
            </nav>
        </div>
    );
};

export default Menu;
