import styles from './Photos.module.css';

const Photos = () => {
return ( 
    <div>
        <img className={styles.img1} src="/site-photos-paw/Poster.png" alt="Paw By Paw Branding" />
        <img className={styles.img1} src="/site-photos-paw/Assets.png" alt="Paw By Paw Branding" />
        <img className={styles.img1} src="/site-photos-paw/Snack.png" alt="Paw By Paw Branding" />
    </div>
);
};
export default Photos;