import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            {/* First Line & White Box */}
            <div className={`${styles.annotationContainer1} ${styles.annotation1}`}>
                <div className={styles.line1}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>A customized flame is carved in the middle of the d to represent the fire/ canle aspect of the brand. It also resembles the company moto of lighting up the flame of each customer's heart keeping them warm and lovely.</p>
                </div>
            </div>
            <div className={`${styles.annotationContainer1} ${styles.annotation2}`}>
                <div className={styles.line2}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>The logo uses a lot of round edges curves and flows, resembling the natural ingridients used in the </p>
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
