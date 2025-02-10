import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                {/* Annotation 1 */}
                <div className={styles.annotation} style={{ top: "10%", left: "-40%" }}>
                    <p>This brand is founded on the belief that there are no inherently bad dogs, only those that lack proper training. Our logo features an Akita—a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment.</p>
                    <div className={styles.line1}></div>
                </div>

                {/* Annotation 2 */}
                <div className={styles.annotation} style={{ top: "80%", left: "-40%" }}>
                    <p>Irregular shapes and fonts make a brand approachable, reflecting the handcrafted, empathetic nature of dog training. While not perfect, training is crafted with care.</p>
                    <div className={styles.line2}></div>
                </div>

                {/* Annotation 3 */}
                <div>
                    <p>Customized rounded edges to add a more fun, lighthearted energy to the brand.</p>
                    <div className={styles.line3}></div>
                </div>
            </div>
        </div>
    );
};

export default Explain;
