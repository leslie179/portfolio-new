import styles from './Otheres.module.css';

const Others = () => {
  return (
    <div>
      <h1 className={styles.h1}>View other projects</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            className={styles.img2}
            src="/site-photos-wellness/sticker-notebook.jpg"
            alt="mug"
            loading="lazy"
          />
          <button className={styles.button}>VIEW PROJECT</button>
        </div>
        <div className={styles.wrapper}>
          <img
            className={styles.img5}
            src="/site-photos-candl/candel-candl.jpg"
            alt="wellness-post"
            loading="lazy"
          />
          <a href="/pawbypaw" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Others;
