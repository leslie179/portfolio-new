import React from 'react';
import styles from './Video.module.css'; // Ensure correct spelling and path
import { transform } from 'next/dist/build/swc/generated-native';

const Video = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Crafting Visuals That Speak Louder Than Words</h2>

            
           







            
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
