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
                <div class={styles.contianer}>
                    
                    <div class="left-section">
                        <h2>Rejected logos</h2>
                        <div class="logos">
                            <img src="path/to/logo1.png" alt="Logo 1" />
                            <img src="path/to/logo2.png" alt="Logo 2" />
                            <img src="path/to/logo3.png" alt="Logo 3" />
                            <img src="path/to/logo4.png" alt="Logo 4" />
                            <img src="path/to/logo5.png" alt="Logo 5" />
                        </div>
                    </div>

                   
                    <div class="right-section">
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
