import styles from './Photos.module.css';

const Photos = () => {
    const embedId = "uf32iSEPRRA";


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
            <h2 className={styles.h4}>Major concerns</h2>

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
            <p className={styles.normalP}>•Information overload <br />
            • Lack of white space<br />
            •   Mostly only targeting allergies but not intolerance<br />
            •   Does not use easy to understand description for terminologies<br />
            •   Not intuitively designed<br />
            •   Ingredient centered but not allergy/ intolerance centered<br />
            •   Lack of customization<br />
            •   Lack of emergency support system<br />
            •   Unable to process non online menus<br />
            •   Cannot process non English menus
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


                </div>
            </div>
            <div className={styles.brandContainer}>
                <h2 className={styles.h2}>App Icon</h2>
                <img className={styles.img3} src="site-photos-goldibite/app-icon.png" />
                <hr className={styles.line} />
                <h2 className={styles.h2}>Colors</h2>
                <img className={styles.img4} src="site-photos-goldibite/color.png" />
                <hr className={styles.line} />
                <h2 className={styles.h2}>Typography</h2>
                <img className={styles.img5} src="site-photos-goldibite/typography.png" />
                <hr className={styles.line} />
                <h2 className={styles.h2}>Icon</h2>
                <img className={styles.img6} src="site-photos-goldibite/icons.png" />
            </div>
            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>6. User Journey</h2>
                    <p className={styles.paragraph}>
                        With all the information gathered, we started our user journey to help us predict how the user
                        might use our app and what they might need. This is the first draft of our user journey.
                    </p>
                    <img className={styles.userJourney} src="site-photos-goldibite/Group-3.png" />
                </div>
            </div>

            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>7. Wire Frames</h2>
                    <p className={styles.paragraph}>
                        With the user journey in mind, we started to create wireframes to help us visualize the app and how it will function. This is the first draft of our wireframes.
                    </p>
                    <h2 className={styles.low}>Low-fi</h2>
                    <img className={styles.userJourney} src="site-photos-goldibite/low-fi.png" />
                    </div>
            </div>




            <h2 className={styles.h3}>Concerns presented by usability testing</h2>

<div className={styles.contentContainer}>
    <div className={styles.column}>
        <div className={styles.section}>
            <h2 className={styles.title5}>
            Emergency Contact Feature Not Obvious Enough
            </h2>
            <p className={styles.p5}>
            •  Some testers had difficulty finding how to contact emergency services.<br />
            • One tester was confused about who they were contacting (e.g., local emergency services vs. a pre-set emergency contact).<br />
            • Too much text on the emergency contact page caused cognitive overload.
            </p>
        </div>

        <div className={styles.section}>
            <h2 className={styles.title5}>Barcode Scanner & Menu Scanner Issues</h2>
            <p className={styles.p5}>
            • Several users reported bugs with the barcode and menu scanner.<br />
            •Lack of a back button for exiting the scanner.<br />
            •Users expected a camera button instead of just a manual entry option.<br />
            •Some testers assumed scanning a menu and scanning a barcode were the same thing, leading to confusion.
            </p>
        </div>
    </div>

    <div className={styles.column}>
        <div className={styles.section1}>
            <h2 className={styles.title}>
            Guide Section & Accessibility
            </h2>
            <p className={styles.p3}>
            •Some users felt the age input feature was unnecessary and might raise privacy concerns.<br />
            •One tester wanted a quick explanation of the app’s key features at the beginning.<br />
            •A tester suggested the app should open directly to the scanner since it's the primary function.
            </p>
        </div>

        <div className={styles.section1}>
            <h2 className={styles.title}>
            Homepage & General UI Issues
            </h2>
            <p className={styles.p3}>
            •Some testers found a bug on the homepage.<br />
            •The menu order list appeared clickable but was not, causing confusion.<br />
            •The keyboard did not retract automatically, making navigation frustrating.<br />
            •Some elements did not feel “smooth enough” or “unfinished.”<br />
            </p>
        </div>
    </div>
</div>

            <div className={styles.contain}>
            <div className={styles.leftColumn}>      
                    <h2 className={styles.low}>Hi-fi</h2>
                    <img className={styles.userJourney} src="site-photos-goldibite/Hi-fi.png" />
                </div>
            </div>

             <div className={styles.contain10}>
                <div className={styles.leftColumn10}>
                    <h2 className={styles.h2}>8. Promotional Assets</h2>
                 
                
                </div>
                <img className={styles.img10} src="site-photos-goldibite/brochure.png" />
                

            </div>
            <img className={styles.img1} src="site-photos-goldibite/persona1.jpg" />
            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>9. Promotional video</h2>
                    <div className={styles.video}>
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
            </div>
            <div className={styles.contain}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>10. Final Product</h2>
                    <div className={styles.figmaContainer}>
                        <iframe
                            className={styles.figmaIframe}
                            src="https://embed.figma.com/proto/QQNbhVtuF8ATLTZjSzYgQw/Screens?node-id=2601-16334&scaling=scale-down&page-id=2601%3A10685&starting-point-node-id=2601%3A16239&hide-ui=1&background-color=%23f4f2ec&embed-host=share"
                            allowFullScreen
                        ></iframe>
                    </div>               
            </div>
            
            
            
        </div>
        <div className={styles.contentContainer}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.h2}>11. Potential business ventures</h2>
                    <img className={styles.img10} src="site-photos-goldibite/group-photo.png" />
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.statsContainer1}>
                        <div className={styles.stat}>
                            <h3 className={styles.statNumber1}>Restaurant partnership</h3>
                            <p className={styles.statDescription1}>
                               Partnering with restaurants allowing to provide accurate up to drafted
                               menus. Allowing GoldiBite to create a more accurate and up to date database.
                               for our users. While restaurants also gets to host their ads and sponsor
                               the application, allowing them to position themselves as a allergy friendly restuarant.
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className={styles.wrap1}>
                <h1 className={styles.h11}>
                    Thank you for reading my very very VERY long case study.
                </h1>
                <p className={styles.p1}>
                    No you don't understand i really do appreciate you for reading this. 
                </p>
            </div>
        </div>
    );
};

export default Photos;




