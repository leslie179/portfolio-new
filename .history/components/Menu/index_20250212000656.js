

1 of 1 error
Next.js (15.1.4) out of date (learn more)
Server Error

ReferenceError: useState is not defined

This error happened while generating the page. Any console logs will be displayed in the terminal window.
Source
components\Menu\index.js (6:47) @ useState

  4 |
  5 | const Menu = () => {
> 6 |     const [prevScrollPos, setPrevScrollPos] = useState(typeof window !== 'undefined' ? window.pageYOffset : 0);
    |                                               ^
  7 |     const [visible, setVisible] = useState(true);
  8 |
  9 |     useEffect(() => {
import styles from './Menu.module.css'; 
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
