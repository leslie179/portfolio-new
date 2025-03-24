"use client"
import styles from './Swimming.module.css'
import { createNoise2D } from 'simplex-noise';
import { useEffect, useState, useRef } from 'react';
const noise2D = createNoise2D();


export default function Swimming() {
    const swimmingGirlRef = useRef(null);
    const swimmingPoolRef = useRef(null);
    useEffect(() => {
       
        let t=0;
        const generateNoise = () => {
            const dx = noise2D(Math.random(), t);
            const dy = noise2D(Math.random(), t);
            t+=0.01;    
            // console.log (dx, dy, t);
            swimmingGirlRef.current.style.transform = `translate(${dx*4}px, ${dy*4}px)`;
            requestAnimationFrame(generateNoise);
        }
        if (swimmingGirlRef.current){
            generateNoise();
            
        }
        if (swimmingPoolRef.current){
            swimmingPoolRef.current.onmousemove = (e) => {
          const swimmingPoolBounds = swimmingPoolRef.current.getBoundingClientRect();
                const x = e.clientX - swimmingPoolBounds.left;
                const y = e.clientY - swimmingPoolBounds.top;
                
                console.log(x,y);
            }

        }
    }, []);
    return (
        <div>
            <div className={styles.swimmingPool} ref={swimmingPoolRef}>
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