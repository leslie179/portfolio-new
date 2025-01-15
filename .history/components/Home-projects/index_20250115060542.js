import styles from "./HomeProjects.module.css";
import Banner from "./Banner";


export default function HomeProjects() {
    return(
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div class="container">
    <img src="url-to-your-image1.jpg" alt="Description of Image 1" class="overlapping-image first"/>
    <img src="url-to-your-image2.jpg" alt="Description of Image 2" class="overlapping-image second"/>
    <img src="url-to-your-image3.jpg" alt="Description of Image 3" class="overlapping-image third">
</div>

            <img className={styles.HermiePhoto} src="./site-photos/leslie-hermier-dog-photo.png" alt="leslie-and-dog"/>
            <Banner/>
        </div>
    )
}