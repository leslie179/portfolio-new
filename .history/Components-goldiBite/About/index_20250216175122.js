import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftColumn}>
                
                <h2 className={styles.h2}>Project Name</h2>
                <p className={styles.p}>GoldiBite</p>
                <h2 className={styles.h2}>Project Type</h2>
                <p className={styles.p}>Brand identity design / UX/UI lead designer</p>
                <h2 className={styles.h2}>Softwares involved</h2>
                <p className={styles.p}>Photoshop/ Illustrator/ Canva</p>
                <h2 className={styles.h2}>Role</h2>
                <p className={styles.p}>Brand designer</p>
                
            </div>
            <div className={styles.rightColumn}>
                <h2 className={styles.h2}>About the business</h2>
                <p className={styles.p}>
                    Paw by Paw enhances the canine-human bond with expert dog training services, high-quality treats. 
                    It provides a integrated solutions that cater to the well-being and happiness of every dog and owner, 
                    creating a thriving community of pet enthusiasts.
                </p>
                <h2 className={styles.h2}>Timeline</h2>
                <p className={styles.p}>2 weeks</p>
            </div>
        </div>
    );
};

export default About;
