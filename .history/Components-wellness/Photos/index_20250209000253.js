import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div>
            <img className={styles.img1} src="/site-photos-wellness/tote-bag.jpg" alt="tote-bag" />

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/mug.jpg" alt="mug" />
                <img className={styles.img2} src="/site-photos-wellness/wellness-post.png" alt="wellness-post" />                    
                
            </div>
        </div>
    );
};

export default Photos;
