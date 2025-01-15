import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                  <img src="../../public/site-main-logo@4x-8.png"/>
                </div>
                <div className={styles.column}>Column 2</div>
                <div className={styles.column}>Column 3</div>
            </div>
        </div>
    );
}