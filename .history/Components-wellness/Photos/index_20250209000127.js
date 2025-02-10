import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div>
            <img className={styles.img1} src="/site-photos-wellness/tote-bag.jpg" alt="tote-bag" />
            <img className={styles.img1} src="/site-photos-paw/Assets.png" alt="paw-by-paw-assets" />
            <img className={styles.img1} src="/site-photos-paw/dog-training.jpg" alt="dog-training" />

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/mug.jpg" alt="mug" />
               
                    
                
            </div>
        </div>
    );
};

export default Photos;
