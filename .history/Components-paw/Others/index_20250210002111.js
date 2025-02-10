import styles from './Otheres.module.css';

const Others = () => {
return(
    <div>
        <h1 className={styles.h1}>View other projects</h1>
    <div className={styles.container}>
        <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/sticker-notebook.jpg" alt="mug" loading="lazy" />
                <img className={styles.img5} src="/site-photos-wellness/sticker-notebook.jpg" alt="wellness-post" loading="lazy" />
            </div>
    </div>
    </div>
)
};

export default Others;