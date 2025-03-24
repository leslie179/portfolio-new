import styles from './Swimming.module.css'
import { createNoise2D } from 'simplex-noise';
export default function Swimming() {
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