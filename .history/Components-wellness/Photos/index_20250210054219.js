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
                <div className={styles.wrapper}>
                    {/* Left Section */}
                    <div className={styles.leftSection}>
                        <h2 className={styles.heading}>Rejected logos</h2>
                        <img src="/site-photos/wellness/drafts" />
                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <p>
                            a fffffffffffffffffffffffffffffffffff<br />
                            ffffffffffffffffffffffffffffffffffff<br />
                            ffffffffffffffffffffffffffffffffffffv
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Photos;
