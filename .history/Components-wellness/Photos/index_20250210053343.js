import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.bigContainer}>
            <img className={styles.img1} src="/site-photos-wellness/tote-bag.jpg" alt="tote-bag" loading="lazy" />

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/mug.jpg" alt="mug" loading="lazy" />
                <img className={styles.img5} src="/site-photos-wellness/brand-photo.jpg" alt="wellness-post" loading="lazy" />
            </div>
            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/brand-photo-1.jpg" alt="mug" loading="lazy" />
                <img className={styles.img5} src="/site-photos-wellness/wellness-post.png" alt="wellness-post" loading="lazy" />
            </div>
            <div className={styles.container}>
            <img className={styles.img1} src="/site-photos-wellness/sticker-notebook.jpg" alt="tote-bag" loading="lazy" />
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.h1}>Rejected Logos</h1>
                <img className={styles.img3} src="/site-photos-wellness/rejected2.png" alt="rejected-logos" loading="lazy" />

                <div className={styles.sideBySide}>
                    <div className={styles.item}>
                        <h1 className={styles.h1}>Drafts</h1>
                        <img className={styles.img6} src="/site-photos-wellness/drafts.jpg" alt="drafts" loading="lazy" />
                    </div>
                   <p>fsadasdfasdfasdfasdfasdfasdfasdfadfa</p>
                </div>
            </div>

        </div>
    );
};

export default Photos;
