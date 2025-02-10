import styles from './Otheres.module.css';

const Others = () => {
return(
    <div></div>
    <div className={styles.container}>
        <h1 className={styles.h1}>View other projects</h1>
        <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/brand-photo-1.jpg" alt="mug" loading="lazy" />
                <img className={styles.img5} src="/site-photos-wellness/wellness-post.png" alt="wellness-post" loading="lazy" />
            </div>
    </div>
)
};

export default Others;