import styles from "./HomeProjects.module.css";
import Banner from "./Banner";


export default function HomeProjects() {
    return (
        <div className={styles.HomeProjects}>
            <h2 className={styles.Projects}>Projects</h2>
            <div className={styles.container}>
                <img src="/site-photos/candl-branding.png" alt="Description of Image 1" class="overlapping-image first" />
                <img src="/site-photos/./components/Home-projects/index.js
Error:   × Expected corresponding JSX closing tag for <img>
    ╭─[C:\Users\caron\Videos\protfolio2\components\Home-projects\index.js:13:1]
 10 │     <img src="url-to-your-image1.jpg" alt="Description of Image 1" class="overlapping-image first">
 11 │     <img src="url-to-your-image2.jpg" alt="Description of Image 2" class="overlapping-image second">
 12 │     <img src="url-to-your-image3.jpg" alt="Description of Image 3" class="overlapping-image third">
 13 │ </div>
    · ──────
 14 │ 
 15 │             <img className={styles.HermiePhoto} src="./site-photos/leslie-hermier-dog-photo.png" alt="leslie-and-dog"/>
 15 │             <Banner/>
    ╰────

Caused by:
    Syntax Error

Import trace for requested module:
./components/Home-projects/index.js
./pages/index.js" alt="Description of Image 2" class="overlapping-image second" />
                <img src="url-to-your-image3.jpg" alt="Description of Image 3" class="overlapping-image third" />
            </div>

            <img className={styles.HermiePhoto} src="./site-photos/leslie-hermier-dog-photo.png" alt="leslie-and-dog" />
            <Banner />
        </div>
    )
}