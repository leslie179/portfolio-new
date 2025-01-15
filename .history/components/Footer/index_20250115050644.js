import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.imgColumn}>
                    <img src="/site-photos" alt="Site Logo" />
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
