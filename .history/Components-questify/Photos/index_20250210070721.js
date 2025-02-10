import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.bigContainer}>
            <h1 className={styles.h1}>First draft</h1>
        <img className={styles.img1} src="/site-photos-questify/First Draft.png" alt="tote-bag" loading="lazy" />
        <h1 className={styles.h1}>First site-map draft</h1>
        <img className={styles.img3} src="/site-photos-questify/First.Draft.png" alt="tote-bag" loading="lazy" />
        <h1 className={styles.h1}>Low-fi wireframes</h1>
            <img className={styles.img3} src="/site-photos-questify/WireFrames.LowFid.png" alt="mug" loading="lazy" />
            <h1 className={styles.h1}>Final site-map</h1>
            <img className={styles.img5} src="/site-photos-questify/Final.png" alt="wellness-post" loading="lazy" />
       
       
        </div>
    );
};

export default Photos;
