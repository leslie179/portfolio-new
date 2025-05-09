import React from 'react';
import styles from './Logo.module.css'; // Adjust the path as necessary

const Logo = () => {
  // Array of images and their descriptions for demonstration
  const items = [
    { src: "/site-photos-paw/griddy-doogo.png", alt: "Description of Image 1", text: "This brand is founded on the belief that there are no inherently bad dogs, only those that lack proper training.  Our logo features a Akita, a breed known for its stubbornness—showing that even the most willful dogs can achieve a state of peace and contentment. " },
    { src: "/site-photos-paw/P.png", alt: "Description of Image 2", className: styles.p, text: "Irregular shapes and fonts make a brand approachable, reflecting the handcrafted, empathetic nature of dog training. While not perfect, training is crafted with care." },
    { src: "/site-photos-paw/colors.png", alt: "Description of Image 3", className: styles.color , text: "Lorem ipsum dolor sit amet..." }
  ];

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <img src={item.src} alt={item.alt} className={item.className || styles.standardImage}/>
          <p className={styles.text}>{item.text}</p>
          {/* Conditionally render the plus sign for all items except the last one */}
          {index < items.length - 1 && <p className={styles.p1}>+</p>}
        </div>
      ))}
    </div>
  );
};

export default Logo;
