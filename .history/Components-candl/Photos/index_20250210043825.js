import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.wrap}>
            <img className={styles.img1} src="/site-photos-candl/Poster.jpg" alt="paw-by-paw-poster"  loading="lazy"/>
            <img className={styles.img1} src="/site-photos-candl/Assets.png" alt="paw-by-paw-assets" loading="lazy"/>
            <img className={styles.img1} src="/site-photos-candl/dog-training.jpg" alt="dog-training" loading="lazy"/>

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-candl/Snack.png" alt="paw-by-paw-snacks" loading="lazy"/>
                
               
            </div>
            <img className={styles.img1} src="/site-photos-paw/paw-sticker.jpg" alt="dog-training" loading="lazy"/>

        </div>
    );
};

export default Photos;
