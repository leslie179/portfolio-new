import styles from "./Explain.module.css";

const Explain = () => {
    return (
        <div className={styles.headerContainer}>
           <div className={styles.annotationContainer}>
    <div className={styles.line}></div>
    <div className={styles.paragraphBox}>
        <p>Annotation 1 text goes here.</p>
    </div>
</div>

<div className={styles.annotationContainer}>
    <div className={styles.line}></div>
    <div className={styles.paragraphBox}>
        <p>Annotation 2 text goes here.</p>
    </div>
</div>

        </div>
    );
};

export default Explain;
