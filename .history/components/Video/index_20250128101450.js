import React from 'react';
import styles from './Video.module.css'; // Ensure correct spelling and path

const Video = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Crafting Visuals That Speak Louder Than Words</h2>
            <div className={styles.animationdemo}>
                <h1>CSS</h1>
                <button className={styles.animationbutton}>
                    <span className={styles.animation-confetti}>👌</span>
                    <span className={styles.animation-confetti}>🎍</span>
                    <span className={styles.animation-confetti}>😍</span>
                </button>

            </div>
            <div className={styles.videoContainer}>
                <video
                    className={styles.video}
                    src="/site-photos/Video.mp4"
                    autoPlay
                    loop
                    muted
                />
                <button className={styles.button}>let's go</button>
            </div>
        </div>
    );
}
export default Video;
