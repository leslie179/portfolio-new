import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
                <div className={styles.annotation}>
    <div className={styles.line1}></div>
    <p className={styles.paragraph}>This brand is founded on the belief that there are no inherently bad dogs, only those that lack proper training...</p>
</div>

                <div>
                    <p className={styles.p2}>Customized rounded edges to add a more fun, lighthearted energy to the brand.</p>
                    <div className={styles.line2}></div>
                </div>
                <div>
                    <p className={styles.p3}>Customized rounded edges to add a more fun, lighthearted energy to the brand.</p>
                    <div className={styles.line3}></div>
                </div>
            </div>
      
    );
};

export default Explain;
