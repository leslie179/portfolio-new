"use client"
import styles from './Swimming.module.css'
import { createNoise2D } from 'simplex-noise';
import { useEffect, useState, useRef } from 'react';
const noise2D = createNoise2D();


export default function Swimming() {
    useEffect(() => {
        console.log(noise2D(1, 1 ));
        let T=0;
        const generateNoise = () => {
            const dx = noise2D(1, );
            const dy = noise2D(1, 1);
            console.log (dx, dy);
            requestAnimationFrame(generateNoise);
        }
        generateNoise();
    }, []);
    return (
        <div>
            <div className={styles.swimmingPool}>
                <div className={styles.water}>
                   <img src="/site-photos/sea-back-layer.png"/> 
                </div>
                <div className={styles.swimmingGirl}>
                   <img src="/site-photos/body.png"/> 
                </div>
            </div>
        </div>
    )
}