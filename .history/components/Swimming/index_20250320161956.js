"use client"
import styles from './Swimming.module.css'
import { createNoise2D } from 'simplex-noise';
import { useEffect, useState, useRef } from 'react';
const noise2D = createNoise2D();

console.log(noise2D(1, 1 ));
export default function Swimming() {
    useEffect(() => {
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