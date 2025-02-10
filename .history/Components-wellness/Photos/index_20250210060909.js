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
                        <h2 className={styles.heading}>Step 1 - Proposal</h2>
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/proposal-moodboard.png"
                            alt="Rejected Logos"
                            loading="lazy"
                        />
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/proposal-analyze.png"
                            alt="Rejected Logos"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <p className={styles.p}>
                           A brand proposal is creat
                        </p>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.leftSection}>
                        <h2 className={styles.heading}>Step 2 - Draft</h2>
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/drafts.jpg"
                            alt="Rejected Logos"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <p className={styles.p}>
                        After signing the contract with the agency, the client completed a survey, and information about the desired brand was gathered. The client expressed their desire to incorporate the concept of renewal—possibly drawing inspiration from the sun or linear lines to represent a path—and/or life, potentially inspired by a thumbprint, into the logo. This is intended to symbolize a patient walking their unique path to wellness. Once the potential logos are drafted, they are imported into Illustrator for rendering.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Photos;
