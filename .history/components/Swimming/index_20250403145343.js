"use client"
import styles from './Swimming.module.css'
import { useEffect, useRef } from 'react';



export default function Swimming() {
    const swimmingGirlRef = useRef(null);
    const swimmingPoolRef = useRef(null);
    
    useEffect(() => {
       
        let mouse = {x:0, y:0};
        let follow = {x:0, y:0};
       let interval = null;
       
        if (swimmingPoolRef.current){
            const swimmingPoolBounds = swimmingPoolRef.current.getBoundingClientRect();
            swimmingPoolRef.current.onmousemove = (e) => {
                const x = e.clientX - swimmingPoolBounds.left - 10;
                const y = e.clientY - swimmingPoolBounds.top - 10;
                mouse.x=x;
                mouse.y=y;
               

            }
                interval = setInterval(() => {
                    follow.x += ((mouse.x - follow.x) / 6);
                    follow.y += ((mouse.y - follow.y) / 6);
                    swimmingGirlRef.current.style.top = `${follow.y}px`;
                    swimmingGirlRef.current.style.left = `${follow.x}px`;
                    swimmingGirlRef.current.style.rotate = `${Math.atan2(follow.y, follow.x)*(360/Math.PI) }deg`;
                }
                , 16);
        }

return () => {
    clearInterval(interval);
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
            <h1>Love as much as the ocean!</h1>
        </div>
    )
}