import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.imgColumn}>
                    <img src="/site-main-logo@4x-8.png" alt="Site Logo" />
                </div>
                <div className={styles.column}>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/leslie--chan/">LinkedIn</a>
                        <a href="https://www.instagram.com/glassslipperstudio_/">Instagram</a>
                        <a href="">Facebook</a>
                        <a href="#link4">Behance</a>
                    </div>
                </div>
                <div className={styles.column}>Column 3</div>
            </div>
        </div>
    );
}
