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
        let r={x:0, y:0};
        const generateNoise = () => {
            let dx = 4* noise2D(Math.random(), t);
            let dy = 4* noise2D(Math.random(), t);
            t+=0.01;    
            // console.log (dx, dy, t);
            if (r.x > 0) {
                const followx
                dx += (r.x / 1000);
            }
            swimmingGirlRef.current.style.transform = `translate(${(dx)}px, ${(dy)}px)`;
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
                // swimmingGirlRef.current.style.top = `${y}px`;
                // swimmingGirlRef.current.style.left = `${x}px`;  
                console.log(x,y);
                const swimmingGirlBounds = swimmingGirlRef.current.getBoundingClientRect();
                r.x = x - swimmingGirlBounds.left;
                r.y = y - swimmingGirlBounds.top;
                console.log(r);
                // const m = Math.sqrt(r.x*r.x + r.y*r.y);


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