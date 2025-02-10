import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div>
            <img className={styles.img1} src="/site-photos-wellness/tote-bag.jpg" alt="tote-bag" />
            <img className={styles.img1} src="/site-photos-paw/Assets.png" alt="paw-by-paw-assets" />
            <img className={styles.img1} src="/site-photos-paw/dog-training.jpg" alt="dog-training" />

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-paw/mug.jpg" alt="mug" />
                <video className={styles.img3} autoPlay loop muted playsInline>
                    <source src="/site-photos-paw/Dog-petting.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
            </div>
        </div>
    );
};

export default Photos;
