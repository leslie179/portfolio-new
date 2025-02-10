import React from 'react';
// Adjust the path as necessary
import styles from './Logo.module.css';

const Logo = () => {
  const items = [
    { src: "/site-photos-paw/griddy-doogo.png", alt: "Description of Image 1", className: styles.color1, text: "This brand is founded on the belief that there are no inherently bad dogs, only those that lack proper training. Our logo features a Akita, a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment." },
    { src: "/site-photos-paw/P.png", alt: "Description of Image 2", className: styles.p, text: "Irregular shapes and fonts make a brand approachable, reflecting the handcrafted, empathetic nature of dog training. While not perfect, training is crafted with care." },
    { src: "/site-photos-paw/colors.png", alt: "Description of Image 3", className: styles.color, text: "Black and red create a striking contrast and symbolize human spirit and passion. This company embraces modern, humane training tools like GPS collars and training harnesses, avoiding harsh methods." }
  ];

  return (
    <div>
      <img className={styles.p} src="/site-photos-paw/Paw-logo.png" />
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.content}>
              <img src={item.src} alt={item.alt} className={item.className || styles.standardImage}/>
              <p className={styles.text}>{item.text}</p>
            </div>
            {index < items.length - 1 && <div className={styles.plusContainer}><p className={styles.p1}>+</p></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
