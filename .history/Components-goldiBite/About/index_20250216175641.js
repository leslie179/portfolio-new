import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftColumn}>
                
                <h2 className={styles.h2}>Project Name</h2>
                <p className={styles.p}>GoldiBite</p>
                <h2 className={styles.h2}>Project Type</h2>
                <p className={styles.p}>Brand identity design / UX/UI designe</p>
                <h2 className={styles.h2}>Softwares involved</h2>
                <p className={styles.p}>Photoshop/ Illustrator/ Figma/ Next.js/ React</p>
                <h2 className={styles.h2}>Role</h2>
                <p className={styles.p}>Brand designer/ Lead UX/UI designer</p>
                
            </div>
            <div className={styles.rightColumn}>
                <h2 className={styles.h2}>About the business</h2>
                <p className={styles.p}>
                Goldi Bites is a travel-friendly app designed for tourists with dietary restrictions, helping them navigate grocery shopping and dining in unfamiliar environments. The app features a barcode and package scanner that translates ingredient labels and allergen information into the user’s language, ensuring safe food choices. It also scans restaurant menus to highlight potential allergens.

Beyond food safety, Goldi Bites provides localized emergency resources, including hotlines and allergy protocols, so travelers know what to do in case of a reaction. With a focus on accessibility and convenience, the app empowers users to make informed dining decisions while exploring new places.
                </p>
                <h2 className={styles.h2}>Timeline</h2>
                <p className={styles.p}>3.5 months</p>
            </div>
        </div>
    );
};

export default About;
