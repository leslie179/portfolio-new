import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.wrap}>
            <img className={styles.img1} src="/site-photos-gol/app-demo.jpeg" alt="paw-by-paw-poster"  loading="lazy"/>
          
        </div>
    );
};

export default Photos;
