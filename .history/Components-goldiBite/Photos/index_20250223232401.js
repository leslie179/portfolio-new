import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.container}>
        <div className={styles.wrap}>
            <img className={styles.img1} src="/site-photos-goldibite/app-demo.jpeg" alt="paw-by-paw-poster"  loading="lazy"/>
            </div>
        </div>
    );
};

export default Photos;
