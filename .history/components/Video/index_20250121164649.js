import Styles from './Video.module.css';

const Video = () => {
    return (
        <div className={Styles.container}>
            <h2 className={Styles.h2}>Crafting Visuals That Speak Louder Than Words</h2>
            <div className={Styles.videoContainer}>
                <span></span>
            </div>
        </div>
    );
}

export default Video;