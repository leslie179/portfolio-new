import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            {/* First Line & White Box */}
            <div className={`${styles.annotationContainer1} ${styles.annotation1}`}>
                <div className={styles.line1}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>The logo features an Akita, a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment.</p>
                </div>
            </div>

            {/* Second Line & White Box */}
            <div className={`${styles.annotationContainer} ${styles.annotation2}`}>
                <div className={styles.line2}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox2}`}>
                    <p>This brand is founded on the belief that there are no inherently bad dogs, only those that lack proper training. Our logo features a Akita, a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment.</p>
                </div>
            </div>

        </div>
    );
};

export default Explain;
