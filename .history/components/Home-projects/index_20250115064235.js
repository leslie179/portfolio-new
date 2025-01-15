import styles from "./HomeProjects.module.css";
import Banner from "./Banner";

export default function HomeProjects() {
    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                <img className={styles.firstImage}  src="/site-photos/candl-branding.png" alt="Candl Branding" />
                <h3>Candl</h3>
                <p>This project is about blah blah blah</p>
                <button></button>
                <img className={styles.secondImage} src="/site-photos/paw-by-paw-branding.jpg" alt="Paw By Paw Branding" />
                <img className={styles.thirdImage}  src="/site-photos/wellness-branding.png" alt="Wellness Branding" />
            </div>
            <img className={styles.HermiePhoto} src="/site-photos/leslie-hermier-dog-photo.png" alt="Leslie and Hermie" />
            <Banner />
        </div>
    )
}
