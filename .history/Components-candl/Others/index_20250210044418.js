import styles from './Otheres.module.css';

const Others = () => {
  return (
    <div className={styles.bigWrap}>
      <h1 className={styles.h1}>View other projects</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            className={styles.img2}
            src="/site-photos-wellness/sticker-notebook.jpg"
            alt="mug"
            loading="lazy"
          />
          <a href="/wellness-journey" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
        <div className={styles.wrapper}>
          <img
            className={styles.img5}
            src="/site-photos-candl//site-photos-paw/paw-sticker.jpg"
            alt="wellness-post"
            loading="lazy"
          />
          <a href="/candl" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>VIEW PROJECT</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Others;
