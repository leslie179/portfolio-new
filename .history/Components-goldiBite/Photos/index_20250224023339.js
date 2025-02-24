import styles from './Photos.module.css';

const Photos = () => {
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
                    <h2 className={styles.h2}>2. User Research</h2>
                    <p className={styles.paragraph}>
                        To better understand the target audiences needs and challenges additional research methods are used
                        <br />1. Surveys
                        <br />2.Secondary research on resources such as YouTube and Reddit
                    </p>
                </div>
            </div>
            <h2 className={styles.h3}>Major concerns</h2>

            <div className={styles.contentContainer}>
                <div className={styles.column}>
                    <div className={styles.section}>
                        <h2 className={styles.title5}>
                            Tedious process of locating safe restaurants
                        </h2>
                        <p className={styles.p5}>
                            Needing to research and call every restaurant to find out if they
                            have allergy/intolerance-friendly options is tedious.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.title5}>Constant anxiety</h2>
                        <p className={styles.p5}>
                            The need to repeatedly confirm that restaurants clearly understand
                            food needs causes constant anxiety.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.title5}>Vague menus</h2>
                        <p className={styles.p5}>
                            Most restaurant menus don’t clearly list all ingredients.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.title5}>Recipe planner</h2>
                        <p className={styles.p5}>
                            6 respondents believe a recipe-planning feature would be helpful.
                        </p>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.section1}>
                        <h2 className={styles.title}>
                            Limited support for non-English speakers
                        </h2>
                        <p className={styles.p3}>
                            Allergy-friendly food options are difficult to find, especially
                            when menus aren't in multiple languages.
                        </p>
                    </div>

                    <div className={styles.section1}>
                        <h2 className={styles.title}>
                            Restaurants not trained for allergy/intolerance needs
                        </h2>
                        <p className={styles.p3}>
                            Many restaurants lack training and awareness about accommodating
                            special dietary needs, making dining risky.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>3. Competitive Analysis</h2>
                    <p className={styles.paragraph}>
                        In this analysis we compared 8 different competitors to learn what disadvantages and advantages help to support our current theory and to take those lessons into our own app, truly creating something that is meant to last. And to our surprise many of them are ...
                    </p>
                </div>
            </div>
            <img className={styles.img} src="site-photos-goldibite/comp-ss.png" />
            <p className={styles.normalP}>Information overload <br />
                Lack of white space<br />
                Mostly only targeting allergies but not intolerance<br />
                Does not use easy to understand description for terminologies<br />
                Not intuitively designed<br />
                Ingredient centered but not allergy/ intolerance centered<br />
                Lack of customization<br />
                Lack of emergency support system<br />
                Unable to process non online menus<br />
                Cannot process non English menus
            </p>
            <p className={styles.grey}>And this is why we NEED to create a better solution</p>
            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>4. Personas</h2>
                    <p className={styles.paragraph}>
                    Before the stage of branding, we created a persona to help us better target our audience, according to our surveys results and competitive analysis we crafted two primary personas that will best suit our app.
                    </p>
                </div>
            </div>
            <img className={styles.img1} src="site-photos-goldibite/persona1.jpg" />
            <img className={styles.img1} src="site-photos-goldibite/persona2.jpg" />
            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>5. Branding</h2>
                    <p className={styles.paragraph}>
                    After finding out all the pre development data, we have discovered the direction and the audience of the application. We decided to call the app GoldiBite, because the right bite every time.
                    </p>
                    <h2 className={styles.h2}>App Icon</h2>
                    <img className={styles.img1} src="site-photos-goldibite/persona1.jpg" />
                </div>
            </div>
        </div>
        
    );
};

export default Photos;
