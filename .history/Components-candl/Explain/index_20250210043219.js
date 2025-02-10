import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            {/* First Line & White Box */}
            <div className={`${styles.annotationContainer1} ${styles.annotation1}`}>
                <div className={styles.line1}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>A custom flame is elegantly carved into the center of the "d," representing the fire and candle aspect of the brand. This flame also embodies the company's motto of "lighting the flame in each customer's heart," spreading warmth, love, and a sense of connection.</p>
                </div>
            </div>
            <div className={`${styles.annotationContainer3} ${styles.annotation3}`}>
                <div className={styles.line3}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox3}`}>
                    <p>Customizing fonts by rounding out edges to bring a fun and uptight feeling to the brand.</p>
                </div>
            </div>
            {/* Second Line & White Box */}
           
            

        </div>
    );
};

export default Explain;
