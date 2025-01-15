import styles from "./Footer.module.css";
import Banner from "./Banner"; // Adjust path if needed

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <Banner />
            <div className={styles.container}>
                <div className={styles.imgColumn}>
                    <img src="/site-main-logo@4x-8.png" alt="Site Logo" />
                </div>
                <div className={styles.column}>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/leslie--chan/">LinkedIn</a>
                        <a href="https://www.instagram.com/glassslipperstudio_/">Instagram</a>
                        <a href="https://www.facebook.com/saveyoursanitydesings/">Facebook</a>
                        <a href="https://www.behance.net/lesliechan19">Behance</a>
                    </div>
                </div>
                <div className={styles.column}>lesliecbusiness@gmail.com</div>
            </div>
        </div>
    );
}
