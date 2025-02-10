import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
                <div>
                    <p className={styles.p1}>Customized rounded edges to add a more fun, lighthearted energy to the brand.</p>
                    <div className={styles.line1}></div>
                </div>
                <div>
                    <p className={styles.line2}>Customized rounded edges to add a more fun, lighthearted energy to the brand.</p>
                    <div className={styles.line2}></div>
                </div>
                <div>
                    <p className={styles.line3}>Customized rounded edges to add a more fun, lighthearted energy to the brand.</p>
                    <div className={styles.line3}></div>
                </div>
            </div>
        </div>
    );
};

export default Explain;
