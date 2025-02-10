import React from 'react';
import styles from './Logo.module.css'; // Adjust the path as necessary

const Logo = () => {
  // Array of images and their descriptions for demonstration
  const items = [
    { src: "/site-photos-paw/griddy-doogo.png", alt: "Description of Image 1", className: styles.color1, text: "Some text here." },
    { src: "/site-photos-paw/P.png", alt: "Description of Image 2", className: styles.p, text: "Another text here." },
    { src: "/site-photos-paw/colors.png", alt: "Description of Image 3", className: styles.color, text: "More text here." }
  ];

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <img src={item.src} alt={item.alt} className={item.className || styles.standardImage}/>
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Logo;
