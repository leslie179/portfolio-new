import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.bigContainer}>
            <h1></h1>
        <img className={styles.img1} src="/site-photos-candl/candel-candl.jpg" alt="tote-bag" loading="lazy" />

        <div className={styles.container}>
            <img className={styles.img2} src="/site-photos-candl/candl-hands.png" alt="mug" loading="lazy" />
            <img className={styles.img5} src="/site-photos-candl/thank-you.png" alt="wellness-post" loading="lazy" />
        </div>
       
        </div>
    );
};

export default Photos;
