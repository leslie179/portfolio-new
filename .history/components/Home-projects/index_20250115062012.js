import styles from "./HomeProjects.module.css";
import Banner from "./Banner";

export default function HomeProjects() {
    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                <img className={styles.firstImage}  src="/site-photos/candl-branding.png" alt="Candl Branding" />
                <img className={styles.secondImage} src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
                <img src="/site-photos/wellness-branding.jpg" alt="Wellness Branding" className={styles.thirdImage} />
            </div>
            <img className={styles.HermiePhoto} src="/site-photos/leslie-hermier-dog-photo.png" alt="Leslie and Hermie" />
            <Banner />
        </div>
    )
}
