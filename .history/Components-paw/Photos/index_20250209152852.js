import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div>
            <img className={styles.img1} src="/site-photos-paw/Poster.jpg" alt="paw-by-paw-poster"  loading="lazy"/>
            <img className={styles.img1} src="/site-photos-paw/Assets.png" alt="paw-by-paw-assets" loading="lazy"/>
            <img className={styles.img1} src="/site-photos-paw/dog-training.jpg" alt="dog-training" loading="lazy"/>

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-paw/Snack.png" alt="paw-by-paw-snacks" loading="lazy"/>
                <video className={styles.img3} autoPlay loop muted playsInline>
                    <source src="/site-photos-paw/Dog-petting.mp4" type="video/mp4" loading="lazy"/>
                    Your browser does not support the video tag.
                </video>
               
            </div>
        </div>
    );
};

export default Photos;
