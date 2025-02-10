import styles from './Photos.module.css';

const Photos = () => {
    return (
        <div className={styles.bigContainer}>
            <img className={styles.img1} src="/site-photos-wellness/tote-bag.jpg" alt="tote-bag" loading="lazy" />

            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/mug.jpg" alt="mug" loading="lazy" />
                <img className={styles.img5} src="/site-photos-wellness/brand-photo.jpg" alt="wellness-post" loading="lazy" />
            </div>
            <div className={styles.container}>
                <img className={styles.img2} src="/site-photos-wellness/brand-photo-1.jpg" alt="mug" loading="lazy" />
                <img className={styles.img5} src="/site-photos-wellness/wellness-post.png" alt="wellness-post" loading="lazy" />
            </div>
            <div className={styles.container}>
                <img className={styles.img1} src="/site-photos-wellness/sticker-notebook.jpg" alt="tote-bag" loading="lazy" />
            </div>
            <div className={styles.bottom}>
                <div className={styles.wrapper}>
                    {/* Left Section */}
                    <div className={styles.leftSection}>
                        <h2 className={styles.heading}>Step 1 - Proposal</h2>
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/proposal-moodboard.png"
                            alt="Rejected Logos"
                            loading="lazy"
                        />
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/proposal-analyze.png"
                            alt="Rejected Logos"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <p className={styles.p}>
                            After receiving a branding survey from the agency, a temporary brand proposal is created based on the client’s preferences and the business's needs. A detailed proposal is then developed to showcase and confirm the intended direction of the brand. This ensures alignment with the client’s vision. Once the client approves the proposal, the development phase officially begins.
                        </p>
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.leftSection}>
                        <h2 className={styles.heading}>Step 2 - Draft</h2>
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/drafts.jpg"
                            alt="Rejected Logos"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <p className={styles.p}>
                            Keywords are identified based on the survey conducted with the client. Research is then carried out using these keywords, along with a competitive analysis of what competitors are doing. Keeping these keywords in mind, relevant icons or images are selected as inspiration for the logo concepts. <br /><br />

                            The draft consists of various potential logo concepts developed based on the client survey. The number of logos drafted may vary depending on the ideas generated and the potential of each concept.
                        </p>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    {/* Left Section */}
                    <div className={styles.leftSection}>
                        <h2 className={styles.heading}>Step 3 - Rendering and prototyping</h2>
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/v1.png"
                            alt="Rejected Logos"
                            loading="lazy"
                        />

                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <p className={styles.p}>
                            After creating and testing various combinations of logo layouts and typography, the best logo will be selected and refined. It will then be incorporated into different prototypes, and another proposal will be developed, showcasing the various logo variations, mood board, color palette, and brand assets. This will help the client envision the brand and provide feedback on areas for improvement or any missing elements.
                        </p>
                    </div>
                </div>


                <div className={styles.wrapper}>
                    {/* Left Section */}
                    <div className={styles.leftSection}>
                        <h2 className={styles.heading}>Step 4 - Revisions</h2>
                        <img
                            className={styles.logoImage}
                            src="/site-photos-wellness/v2.png"
                            alt="Rejected Logos"
                            loading="lazy"
                        />

                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <p className={styles.p}>
                        During the logo development process, the client struggled to commit to a specific illustration style for her logo. Due to the overwhelming amount of information available online, clients are often advised not to constantly search for inspiration during onboarding, as it can lead to indecision. As a result, the client provided various inspirations, leading to multiple revisions with different illustration styles and typography. <br /> <br />

With each version of the logo, feedback will be gathered, and adjustments will be made accordingly. To help the client better connect with the brand, additional prototypes will be created to enhance her vision and understanding of the final design. More questions are also asked in order to confirm the direction of the brand as well as bringing the client back to the correct direction to attract the 
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Photos;
