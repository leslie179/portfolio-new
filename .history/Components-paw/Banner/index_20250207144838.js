import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.headerContainer}>
            {/* First Button & White Box */}
            <div className={`${styles.buttonContainer} ${styles.buttonContainer1}`}>
                <button className={styles.buttonStyle}></button>             
                <div className={`${styles.whiteBox} ${styles.whiteBox1}`}>
                    <p>The logo features an Akita, a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment.</p>
                </div>
            </div>

            {/* Third Button (Now Second One) & White Box */}
            <div className={`${styles.buttonContainer} ${styles.buttonContainer3}`}>
                <button className={styles.buttonStyle}></button>             
                <div className={`${styles.whiteBox} ${styles.whiteBox3}`}>
                    <p>Irregular shapes and fonts make a brand approachable, reflecting the handcrafted, empathetic nature of dog training. While not perfect, training is crafted with care.</p>
                </div>
            </div>

            {/* Headings */}
            <h1 className={styles.h1}>Paw by Paw</h1>
            <h1 className={styles.h2}>Brand identity design / logo design / merch design</h1>
        </div>
    );
};

export default Banner;
