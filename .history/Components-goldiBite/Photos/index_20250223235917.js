import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <h1 className={styles.h1}>
                    We made an app to help people identify red flag food and green flag food making food allergy/intolerance a little safer.
                </h1>
                <p className={styles.p1}>
                    so they don’t die from something like a peanut allergy
                </p>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>1. How it started</h2>
                    <p className={styles.paragraph}>
                        One of our friends, during a Mexico trip had a sudden medical scare. She was diagnosed with celiac disease at age 22. We realize that not only can you be born with food allergies/intolerance you can also develop it. Our teacher said we should build an app that empowers people so we researched this topic, turns out...
                    </p>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.statsContainer}>
                        <div className={styles.stat}>
                            <h3 className={styles.statNumber}>3 million +</h3>
                            <p className={styles.statDescription}>Canadians self reported to have at least 1 food allergy</p>
                        </div>
                        <div className={styles.stat}>
                            <h3 className={styles.statNumber}>7.4 million +</h3>
                            <p className={styles.statDescription}>Canadians self reported to have at least 1 food intolerance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrap1}>
                <h1 className={styles.h1}>
                so many people affected yet no real solution is provided to protect our people and we are only talking about Canada
                </h1>
                <p className={styles.p1}>
                don’t like boring statistics? Fast forward to the fun part here
                </p>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>1. How it started</h2>
                    <p className={styles.paragraph1}>
                        One of our friends, during a Mexico trip had a sudden medical scare. She was diagnosed with celiac disease at age 22. We realize that not only can you be born with food allergies/intolerance you can also develop it. Our teacher said we should build an app that empowers people so we researched this topic, turns out...
                    </p>
                    
                </div>
                </div>
        </div>
    );
};

export default Photos;