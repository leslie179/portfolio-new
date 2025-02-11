import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.logo} src="/site-photos-wellness/wellness-logo.png" alt="wellness-logo" loading="lazy" />
            <div className={`${styles.annotationContainer1} ${styles.annotation2}`}>
                <div className={styles.line2}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>The tagline uses a font similar to handwriting script, representing that while clients might face medical issues, the business aims to provide support through calming, personalized remedies uniquely tailored to each client's needs.</p>
                </div>
            </div>
            
            <div className={`${styles.annotationContainer3} ${styles.annotation3}`}>
                <div className={styles.line3}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox3}`}>
                    <p>The bold font, with its thicker strokes, establishes a sense of authority while also conveying trustworthiness. Additionally, the typography avoids hard edges, allowing it to flow naturally and evoke the feeling of remedies blooming organically.</p>
                </div>
            </div>

        </div>
    );
};

export default Explain;
