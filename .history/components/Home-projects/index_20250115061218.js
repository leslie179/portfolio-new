import styles from "./HomeProjects.module.css";
import Banner from "./Banner";

export default function HomeProjects() {
    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                <img src="/site-photos/candl-branding.png" alt="Description of Image 1" className={styles.overlappingImageFirst} />
                <img src="/site-photos/paw-by-paw-branding.jpg" alt="Description of Image 2" className={styles.overlappingImageSecond} />
                <img src="/site-photos/wellness-branding.jpg" alt="Description of Image 3" className={styles.overlappingImageThird} />
            </div>

            <img className={styles.HermiePhoto} src="./site-photos/leslie-hermier-dog-photo.png" alt="Leslie and dog" />
            <Banner />
        </div>
    )
}
