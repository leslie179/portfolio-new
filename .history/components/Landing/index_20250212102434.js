import { useEffect } from 'react';
import './Landing.module.cuseStatess';

import gsap from "@gsa"

function App() {
  useEffect(() => {
    

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    
    tl.fromTo("#textBox", 
      { width: '200px', fontSize: '16px' }, 
      { width: '100vw', fontSize: '48px', duration: 3 }
    );

  }, []);

  return (
    <div className="container">
      <section style={{ backgroundColor: '#bcb8ad', color: '#032f35' }}>
        <div>
          <h1><span>Horizontal</span> <span>scroll</span> <span>section</span></h1>
          <p>with GSAP ScrollTrigger & Locomotive Scroll</p>
        </div>
      </section>
      <section id="sectionPin">
        <div className="pin-wrap">
          <h2>Lorem ipsum dolor sit amet...</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
