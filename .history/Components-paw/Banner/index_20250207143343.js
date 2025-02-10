import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.headerContainer}>
            <button className={styles.yellowBlackButton}></button> 
            .yellowBlackButton {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #FFD469; /* Yellow color */
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    position: absolute;
    left: 40%;
    top: 30%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.yellowBlackButton::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #2F2F2F; /* Dark color */
    border-radius: 50%;
    position: absolute;
}

.headerContainer:hover .yellowBlackButton {
    visibility: visible;
    opacity: 1;
}
            <div className={styles.whiteBox}>
                <p className={styles.p}>
            The logo features a Akita, a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment.</p>
            </div>
            <h1 className={styles.h1}>Paw by Paw</h1>
            <h1 className={styles.h2}>Brand identity design / logo design / merch design</h1>
        </div>
    );
};

export default Banner;
