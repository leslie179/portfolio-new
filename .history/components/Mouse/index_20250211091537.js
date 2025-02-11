import { useEffect } from 'react';
import Head from 'next/head';
import styles from './Mouse.module.css';

export default function Home() {
  useEffect(() => {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');
    const hoverables = document.querySelectorAll('.hoverable');

  
    function moveCursor(e) {
      bigBall.style.transform = `translate(${e.pageX - 15}px, ${e.pageY - 15}px)`;
      smallBall.style.transform = `translate(${e.pageX - 5}px, ${e.pageY - 5}px)`;
    }

    // Function to scale up the big ball on hover
    function onMouseHover() {
      bigBall.style.transform += ' scale(4)';
    }

    // Function to reset the scale of the big ball on hover out
    function onMouseHoverOut() {
      bigBall.style.transform = bigBall.style.transform.replace(' scale(4)', '');
    }

    // Adding event listeners
    document.body.addEventListener('mousemove', moveCursor);
    hoverables.forEach(hoverable => {
      hoverable.addEventListener('mouseenter', onMouseHover);
      hoverable.addEventListener('mouseleave', onMouseHoverOut);
    });

    // Clean up function to remove event listeners on component unmount
    return () => {
      document.body.removeEventListener('mousemove', moveCursor);
      hoverables.forEach(hoverable => {
        hoverable.removeEventListener('mouseenter', onMouseHover);
        hoverable.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Custom Cursor</title>
      </Head>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12"></circle>
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4"></circle>
          </svg>
        </div>
      </div>
      <div className="left">
        <h1>Hello</h1>
        <p>Check out this link:</p>
        <a className="hoverable">Hover meh</a>
      </div>
      <div className="right">
        <h1>Hello</h1>
        <p>Check out this link:</p>
        <a className="hoverable">Hover meh</a>
      </div>
    </>
  );
}
