import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div>
            <img className={styles.img1} src="/site-photos-wellness/tote-bag.jpg" alt="tote-bag" />

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/mug.jpg" alt="mug" />
                <img className={styles.img2} src="/site-photos-wellness/wellness-post.png" alt="wellness-post" />                    
            </div>
            <h1 className={styles.h1}>Rejected Logos</h1>
            <div>
            <img className={styles.img3} src="/site-photos-wellness/rejected.png" alt="rejected-logos" />
            <img className={styles.img1} src="/site-photos-wellness/dog-training.jpg" alt="dog-training" /> 
            </div>
        </div>
    );
};

export default Photos;
