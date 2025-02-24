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
            <h2 className={styles.h3}>major concerns</h2>
            <div className="container3">
      <div className={styles.column}>
        <div className={styles.section}>
          <h2 className={styles.title}>Tideous process of locating safe restaurants</h2>
          <p className={styles.p3>
            Needing to research and call every restaurant to find out if they have allergy/intolerance friendly options are tiedious
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>Constant anxiety</h2>
          <p>
            The need to double check, triple check, quadriple check just to ensure that the restaurant is clear about their food needs.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className="title">Vague menus</h2>
          <p>
            Most restaurant menus don't display the used ingredients clearly
          </p>
        </div>

        <div className={styles.section}>
          <h2 className="title">Recipe planner</h2>
          <p>
            6 respondents believed a have a feature to do recipe planning would be helpful.
          </p>
        </div>
      </div>

      <div className="column">
        <div className={styles.section}>
          <h2 className="title">Limited allergy/intolerance support for non-english speakers</h2>
          <p>
            Finding allergy/intolerance friendly food options is already challenging, and even more so when menus aren't available in every language.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className="title">Restaurants not being trained to cater to food allergy/intolerance</h2>
          <p>
            Many restaurants are not prepared to cater to people with special dietary needs. Servers often lack knowledge about ingredients used in dishes, with few options available to accommodate these needs.
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Photos;