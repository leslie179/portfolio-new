import React from 'react';
import styles from './Logo.module.css'; // Adjust the path as necessary

const Logo = () => {
  <img src="/site-photos-paw/mobile.png" alt="Griddy Doogo" className={styles.logo} />
  // Array of images and their descriptions for demonstration
  const items = [
    { src: "/site-photos-paw/griddy-doogo.png", alt: "Description of Image 1", text: "Lorem ipsum dolor sit amet..." },
    { src: "path-to-your-image2.jpg", alt: "Description of Image 2", text: "Lorem ipsum dolor sit amet..." },
    { src: "path-to-your-image3.jpg", alt: "Description of Image 3", text: "Lorem ipsum dolor sit amet..." }
  ];

  return (
   
    <div className={styles.container}>
       
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <img src={item.src} alt={item.alt} className={styles.image} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Logo;
