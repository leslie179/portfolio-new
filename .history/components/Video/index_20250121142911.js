import Styles from './Video.module.css';

const Video = () => {
    return (
        <div className={Styles.container}>
            <h2 className={styles}>Crafting Visuals That Speak Louder Than Words</h2>
            <div className={Styles.videoContainer}>
                <video
                    className={Styles.video}
                    src="/site-photos/Video.mp4"
                    autoPlay
                    loop
                    muted   
                />
            </div>
        </div>
    );
}