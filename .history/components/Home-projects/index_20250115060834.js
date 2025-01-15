import styles from "./HomeProjects.module.css";
import Banner from "./Banner";


export default function HomeProjects() {
    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                <img src="/site-photos/candl-branding.png" alt="Description of Image 1" class="overlapping-image first" />
                <img src="/site-photos/paw-by-paw-branding.jpg" alt="Description of Image 2" class="overlapping-image second" />
                <img src="/site-photos/wellness-branding" alt="Description of Image 3" class="overlapping-image third" />
            </div>

            <img className={styles.HermiePhoto} src="./site-photos/leslie-hermier-dog-photo.png" alt="leslie-and-dog" />
            <Banner />
        </div>
    )
}