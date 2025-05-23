import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div>
            <img className={styles.img1} src="/site-photos-paw/Poster.jpg" alt="paw-by-paw-poster" />
            <img className={styles.img1} src="/site-photos-paw/Assets.png" alt="paw-by-paw-assets" />
            <img className={styles.img1} src="/site-photos-paw/dog-training.jpg" alt="dog-training" />
            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-paw/Snack.png" alt="paw-by-paw-snacks" />
                <video className={styles.img3} autoPlay loop muted playsInline>
                    <source src="/site-photos-paw/Dog-petting.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            
                
            </div>
            <img className={styles.img1} src="/site-photos-paw/Paw-paw-uniform.png" alt="dog-training" />
        </div>
    );
};

export default Photos;
