import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.bigContainer}>
        <img className={styles.img1} src="/site-photos-candl/candl-mock.jpg" alt="tote-bag" loading="lazy" />

        <div className={styles.container}>
            <img className={styles.img2} src="/site-photos-candl/mug.jpg" alt="mug" loading="lazy" />
            <img className={styles.img5} src="/site-photos-candl/brand-photo.jpg" alt="wellness-post" loading="lazy" />
        </div>
       
        </div>
    );
};

export default Photos;
