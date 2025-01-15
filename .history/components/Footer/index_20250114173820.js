import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.imgColumn}>
                    <img src="/site-main-logo@4x-8.png" alt="Site Logo" />
                </div>
                <div className={styles.column}>
                  <a href="#link1">Link 1</a>
                        <a href="#link2">Link 2</a>
                        <a href="#link3">Link 3</a>
                        <a href="#link4">Link 4</a>
                </div>
                <div className={styles.column}>Column 3</div>
            </div>
        </div>
    );
}
