import styles from "./HomeProjects.module.css";
import Banner from "./Banner";


export default function HomeProjects() {
    return(
        <div className={styles.HomeProjects}>
            <p>asdfdfafd</p>
            <img className={styles.HermiePhoto} src="./site-photos/leslie-hermier-dog-photo.png" alt="leslie-and-dog"/>
            <Banner/>
        </div>
    )
}