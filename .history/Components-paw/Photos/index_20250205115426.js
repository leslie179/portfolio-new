import styles from './Photos.module.css';

const Photos = () => {
  return (
    <div>
        <img className={styles.img1} src="/site-photos-paw/Poster.png" alt="Paw By Paw Branding" />
        <img className={styles.img1} src="/site-photos-paw/Assets.png" alt="Paw By Paw Branding" />
        
        <div className={styles.container}> 
        <video className={styles.img2} autoPlay loop muted playsInline>
            <source src="/site-photos-paw/Dog-petting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    </div>
  );
};

export default Photos;
