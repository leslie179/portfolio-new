import styles from './Photos.module.css';

const Photos = () => {
    const embedId = "uf32iSEPRRA"; // YouTube video ID defined here

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <h1 className={styles.h1}>
                    We made an app to help people identify red-flag and green-flag foods,
                    making food allergies/intolerances a little safer.
                </h1>
                <p className={styles.p1}>
                    So they don’t die from something like a peanut allergy.
                </p>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>1. How it started</h2>
                    <p className={styles.paragraph}>
                        One of our friends, during a Mexico trip, had a sudden medical scare.
                        She was diagnosed with celiac disease at age 22. We realized that not
                        only can you be born with food allergies/intolerances, you can also
                        develop them. Our teacher suggested we build an app that empowers
                        people, so we researched this topic. Turns out...
                    </p>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.statsContainer}>
                        <div className={styles.stat}>
                            <h3 className={styles.statNumber}>3 million +</h3>
                            <p className={styles.statDescription}>
                                Canadians self-reported having at least 1 food allergy
                            </p>
                        </div>
                        <div className={styles.stat}>
                            <h3 className={styles.statNumber}>7.4 million +</h3>
                            <p className={styles.statDescription}>
                                Canadians self-reported having at least 1 food intolerance
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.wrap1}>
                <h1 className={styles.h1}>
                    So many people are affected, yet no real solution exists to protect
                    them—and we're only talking about Canada.
                </h1>
                <p className={styles.p1}>
                    Don’t like boring statistics? Fast forward to the fun part here.
                </p>
            </div>

            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>7. Promotional assets</h2>
                    <div className={styles.videoResponsive}>
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${embedId}?controls=0`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            title="Embedded youtube"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>8. Final Product</h2>
                    <div className={styles.figmaContainer}>
                        <iframe
                            className={styles.figmaIframe}
                            src="https://embed.figma.com/proto/QQNbhVtuF8ATLTZjSzYgQw/Screens?node-id=2601-16334&scaling=scale-down&page-id=2601%3A10685&starting-point-node-id=2601%3A16239&hide-ui=1&background-color=%23f4f2ec&embed-host=share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;
