import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            {/* First Line & White Box */}
            <div className={`${styles.annotationContainer1} ${styles.annotation1}`}>
                <div className={styles.line1}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p></p>
                </div>
            </div>
            <div className={`${styles.annotationContainer1} ${styles.annotation2}`}>
                <div className={styles.line2}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>Irregular shapes and fonts make a brand approachable, reflecting the handcrafted, empathetic nature of dog training. While not perfect, training is crafted with care.</p>
                </div>
            </div>
            {/* Second Line & White Box */}
            <div className={`${styles.annotationContainer3} ${styles.annotation3}`}>
                <div className={styles.line3}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox3}`}>
                    <p>Customizing fonts by rounding out edges to bring a fun and uptight feeling to the brand.</p>
                </div>
            </div>

        </div>
    );
};

export default Explain;
