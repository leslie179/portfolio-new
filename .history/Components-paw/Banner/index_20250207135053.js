import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.headerContainer}>
            <button className={styles.yellowBlack}></button>
        <h1 className={styles.h1}>Paw by Paw</h1> 
        <h1 className={styles.h2}>Brand identity design / logo design / merch design </h1>
        </div>
    );
};
export default Banner;
