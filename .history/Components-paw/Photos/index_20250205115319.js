import styles from './Photos.module.css';

const Photos = () => {
  return (
    <div className={styles.container}> {/* Use the container class for flex styling */}
        <img className={styles.img1} src="/site-photos-paw/Snack.png" alt="Paw By Paw Branding" />
        <video className={styles.img1} autoPlay loop muted playsInline>
            <source src="/site-photos-paw/Dog-petting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default Photos;
