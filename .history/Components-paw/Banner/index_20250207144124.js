import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.headerContainer}>
            {/* Yellow-Black Button */}
            <button className={`${styles.buttonStyle} ${styles.yellowBlackButton}`}></button>
            <div className={styles.whiteBox}></div>

            {/* Blue-White Button */}
            <button className={`${styles.buttonStyle} ${styles.blueWhiteButton}`}></button>
            <div className={styles.whiteBox}></div>

            <h1 className={styles.h1}>Paw by Paw</h1>
            <h1 className={styles.h2}>Brand identity design / logo design / merch design</h1>
        </div>
    );
};

export default Banner;
