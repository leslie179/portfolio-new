
import styles from './BlockThree.module.css';


const BlockThree = () => {
    return (
        <>
            <div className={styles.stickyBlock}>
                <img src="/site-photos/Wellness-Journey2.png" alt="Wellness-Journey-Branding" className={styles.backgroundImage} />
                <div className={styles.flipContainer}>
                    <img src="/site-photos/wellness-sticker.png" alt="Wellness-Journey-Sticker" className={styles.rotateImage} />
                </div>
                <h2 className={styles.h2}>Wellness Journey</h2>
                <p className={styles.pp}>This project focuses on branding strategies for a wellness business</p>
                <a href="/wellness-journey" target="_blank" rel="noopener noreferrer">
  <button className={styles.button}>VIEW PROJECT</button>
</a>

                <div className={styles.gridContainer}>
                    <div className={styles.imageColumn}>
                        <img src="/site-photos/leslie-photo.png" alt="Leslie with a drink" className={styles.baseImage} />
                        <img src="/site-photos/leslie-and-hermie1.png" alt="Leslie with her dog" style={{ width: '50%', position: 'relative', top: '35%', left: '30%', zIndex: 2, transform: 'rotate(-5deg)', animation: 'wiggleAnimation 1s ease-in-out infinite' }} />

                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>Hi, I am Leslie! </h2>
                        <p className={styles.pp}>And that's my pretty dog Hermie! First I want to thank you for coming to my protfolio.</p>
                        <p className={styles.pp}>Second, I want to introduce myself. I'm originally from Hong Kong and I have been doing
                            design for 3 years now plus my BCIT education. I love all kinds of art whether it's music,
                            instruments, doodles, pottery, gaming I do it all! If you think we're a good fit feel free to reach out
                        </p>
                      
                    </div>
                </div>

            </div>

        </>
    );
};

export default BlockThree;
