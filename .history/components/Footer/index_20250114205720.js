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
                        <a
                            href="https://www.linkedin.com/in/leslie--chan/"
                            style={{ fontFamily: 'NickySans, sans-serif' }}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/glassslipperstudio_/"
                            style={{ fontFamily: 'NickySans, sans-serif' }}
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/saveyoursanitydesings/"
                            style={{ fontFamily: 'NickySans, sans-serif' }}
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.behance.net/lesliechan19"
                            style={{ fontFamily: 'NickySans, sans-serif' }}
                        >
                            Behance
                        </a>
                    </div>
                </div>
                <div className={styles.column} style={{ fontFamily: 'NickySans, sans-serif' }}>
                    lesliecbusiness@gmail.com
                </div>
            </div>
        </div>
    );
}
