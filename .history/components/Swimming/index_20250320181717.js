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
        let mouse = {x:0, y:0};
        let follow = {x:0, y:0};
        const generateNoise = () => {
            let dx = 20* noise2D(Math.random(), t);
            let dy = 20* noise2D(Math.random(), t);
            t+=0.01;    
            // console.log (dx, dy, t);
            // if (r.x > 0) {
            //     follow.x = r.x - 10;
            //     // dx += followx;
            //     r.x -= 10;
            // }
            // swimmingGirlRef.current.style.transform = `translate(${(dx)}px, ${(dy)}px)`;
            // const swimmingGirlBounds = swimmingGirlRef.current.getBoundingClientRect();
            // r.x = mouse.x - swimmingGirlBounds.left;
            // r.y = mouse.y - swimmingGirlBounds.top;
            // swimmingGirlRef.current.style.top = `${mouse.y}px`;
            // swimmingGirlRef.current.style.left = `${follow.x}px`;
            requestAnimationFrame(generateNoise);
        }
        if (swimmingGirlRef.current){
            generateNoise();
            
        }
        if (swimmingPoolRef.current){
            swimmingPoolRef.current.onmousemove = (e) => {
          const swimmingPoolBounds = swimmingPoolRef.current.getBoundingClientRect();
                const x = e.clientX - swimmingPoolBounds.left - 10;
                const y = e.clientY - swimmingPoolBounds.top - 10;
                mouse.x=x;
                mouse.y=y;
                // swimmingGirlRef.current.style.top = `${y}px`;
                // swimmingGirlRef.current.style.left = `${x}px`;  
                console.log(x,y);
                const swimmingGirlBounds = swimmingGirlRef.current.getBoundingClientRect();
                r.x = x - swimmingGirlBounds.left;
                r.y = y - swimmingGirlBounds.top;
                console.log(r);
                // const m = Math.sqrt(r.x*r.x + r.y*r.y);


            }
                setInterval(() => {
                    follow.x += ((mouse.x - follow.x) / 6);
                    follow.y += ((mouse.y - follow.y) / 6);
                    swimmingGirlRef.current.style.top = `${follow.y}px`;
                    swimmingGirlRef.current.style.left = `${follow.x}px`;
                    
                }
                , 10);
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