import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.logo} src="/site-photos-four/fourLogo.png" alt="candl-logo" loading="lazy" />
            {/* First Line & White Box */}
            <div className={`${styles.annotationContainer1} ${styles.annotation1}`}>
                <div className={styles.line1}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>The serif font gives a timeless and established feel, while the script adds a personal, stylish touch.
                    The contrast between the fonts makes the design dynamic and visually appealing.</p>
                </div>
            </div>
            <div className={`${styles.annotationContainer3} ${styles.annotation3}`}>
                <div className={styles.line3}></div>
                <div className={`${styles.whiteBox} ${styles.whiteBox3}`}>
                    <p>The centered composition makes it clean and balanced, ensuring readability and visual impact.
                    The word “FOUR” is the focal point, possibly indicating a brand name, exclusive collection, or something of importance.
                        </p>
                </div>
            </div>
            {/* Second Line & White Box */}
           
            

        </div>
    );
};

export default Explain;
