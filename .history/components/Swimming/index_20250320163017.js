"use client"
import styles from './Swimming.module.css'
import { createNoise2D } from 'simplex-noise';
import { useEffect, useState, useRef } from 'react';
const noise2D = createNoise2D();


export default function Swimming() {
    const swimmingGirlRef = useRef(null);
    useEffect(() => {
        console.log(noise2D(1, 1 ));
        let t=0;
        const generateNoise = () => {
            const dx = noise2D(Math.random(), t);
            const dy = noise2D(Math.random(), t);
            t+=0.01;    
            console.log (dx, dy, t);
            swimm
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
                <div className={styles.swimmingGirl} ref={swimmingGirlRef}>
                   <img src="/site-photos/body.png"/> 
                </div>
            </div>
        </div>
    )
}