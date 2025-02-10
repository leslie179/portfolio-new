import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.group}>
                <div className={styles.line}></div>
                <p className={styles.paragraph}>
                    This brand is founded on the belief that there are no inherently bad dogs, only those that lack proper training. Our logo features an Akita—a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment.
                </p>
            </div>
        </div>
    );
};

export default Explain;
