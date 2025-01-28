import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';  // Make sure you create this CSS module file

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/path-to-image1.jpg',
    '/path-to-image2.jpg',
    '/path-to-image3.jpg',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className={styles.banner}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.bannerSlide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Banner;
