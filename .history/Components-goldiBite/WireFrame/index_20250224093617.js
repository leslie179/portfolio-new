import styles from './WireFrame.module.css';

const WireFrame = () => {

return (
    <img className={styles.img1} src="site-photos-goldibite/persona1.jpg" />
    <img className={styles.img1} src="site-photos-goldibite/persona2.jpg" />
    <div className={styles.contain}>
        <div className={styles.leftColumn}>
            <h2 className={styles.h2}>5. Branding</h2>
            <p className={styles.paragraph}>
                After finding out all the pre development data, we have discovered the direction and the audience of the application. We decided to call the app GoldiBite, because the right bite every time.
            </p>


        </div>
    </div
);
};
    export default WireFrame;