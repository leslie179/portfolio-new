import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.headerContainer}>
        <h1 className={styles.h1}>Paw by Paw</h1> 
        <h1 className={styles.h1}>A dog walking service</h1>
        </div>
    );
};
export default Banner;
