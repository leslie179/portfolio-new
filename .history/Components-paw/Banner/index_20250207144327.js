import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.headerContainer}>
            {/* First Button & White Box */}
            <button className={`${styles.buttonStyle} ${styles.yellowBlackButton}`}></button>             
            <div className={styles.whiteBox}>
                <p className={styles.p}>
                    The logo features an Akita, a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment.
                </p>
            </div>

            {/* Second Button & White Box */}
            <button className={`${styles.buttonStyle} ${styles.yellowBlackButton1}`}></button>             
            <div className={styles.whiteBox1}>
                <p className={styles.p}>
                    The brand identity is inspired by the deep connection between dogs and their owners, creating a visual experience that represents trust, loyalty, and companionship.
                </p>
            </div>

            {/* Third Button & White Box (NEW) */}
            <button className={`${styles.buttonStyle} ${styles.yellowBlackButton2}`}></button>             
            <div className={styles.whiteBox2}>
                <p className={styles.p}>
                    The merch design follows a minimalist yet playful approach, using clean lines and soft colors to appeal to dog lovers of all ages.
                </p>
            </div>

            {/* Headings */}
            <h1 className={styles.h1}>Paw by Paw</h1>
            <h1 className={styles.h2}>Brand identity design / logo design / merch design</h1>
        </div>
    );
};

export default Banner;
