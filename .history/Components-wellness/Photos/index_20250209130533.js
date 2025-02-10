import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div>
            <img className={styles.img1} src="/site-photos-wellness/tote-bag.jpg" alt="tote-bag" />

            <div className={styles.container}>
  <img className={styles.img2} src="/site-photos-wellness/mug.jpg" alt="mug" />
  <img className={styles.img5} src="/site-photos-wellness/brand-photo.jpg" alt="wellness-post" />
</div>
<div className={styles.container}>
  <img className={styles.img2} src="/site-photos-wellness/brand-photo-1.jpg" alt="mug" />
  <img className={styles.img5} src="/site-photos-wellness/wellness-post.png" alt="wellness-post" />
</div>
            <div className={styles.bottom}>
            <h1 className={styles.h1}>Rejected Logos</h1>
            <img className={styles.img3} src="/site-photos-wellness/rejected2.png" alt="rejected-logos" />
            <h1 className={styles.h1}>Drafts</h1>
            <img className={styles.img4} src="/site-photos-wellness/drafts.jpg" alt="dog-training" /> 
            <h1 className={styles.h1}>Moodboard</h1>
            <img className={styles.img4} src="/site-photos-wellness/moodboard.png" alt="dog-training" /> 
            </div>
        </div>
    );
};

export default Photos;
