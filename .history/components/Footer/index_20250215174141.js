
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div></div>
            <div className={styles.container}>
                <div className={styles.imgColumn}>
                    <img src="/site-photos/site-main-logo.png" alt="Site Logo" />
                </div>
                <div className={styles.column}>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/leslie--chan/">LinkedIn</a>
                        <a href="https://www.instagram.com/glassslipperstudio_/">Instagram</a>
                        <a href="https://www.facebook.com/saveyoursanitydesings/">Facebook</a>
                        <a href="https://www.behance.net/lesliechan19">Behance</a>
                    </div>
                </div>
                <div className={styles.column}>
                    <a href="mailto:lesliecbusiness@gmail.com">lesliecbusiness@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
