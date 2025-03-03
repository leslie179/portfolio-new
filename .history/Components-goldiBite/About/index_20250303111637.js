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
                Goldi Bites is a travel-friendly app for tourists with dietary restrictions, ensuring safe dining and shopping. It features a barcode and menu scanner that translates ingredients and allergens into the user’s language. <br /> <br />The app also provides localized emergency resources, including hotlines and allergy protocols. With a focus on safety and accessibility, Goldi Bites helps travelers make informed food choices anywhere.</p>
                <h2 className={styles.h2}>Timeline</h2>
                <p className={styles.p}>3.5 months</p>
                <a href="https://www.figma.com/proto/QQNbhVtuF8ATLTZjSzYgQw/Screens?node-id=2601-16334&t=iMidhTxPcU0gOeAJ-0&scaling=min-zoom&content-scaling=fixed&page-id=2601%3A10685&starting-point-node-id=2601%3A16239&show-proto-sidebar=1" target="_blank" >
                <button className={styles.button}>TRY OUT OUR APP!</button>
            </div>
        </div>
    );
};

export default About;
