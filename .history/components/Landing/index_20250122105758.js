import React, { useEffect } from 'react';
import './.css'; // This must correctly point to the CSS file

function App() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const box = document.getElementById('scrollingBox');
            const text = document.getElementById('textBox');

            if (scrollPosition < 250) {
                box.className = 'box';
                text.textContent = 'Crafting visuals';
            } else if (scrollPosition >= 250 && scrollPosition < 750) {
                box.className = 'box medium';
                text.textContent = 'that speak';
            } else if (scrollPosition >= 750) {
                box.className = 'box fullscreen';
                text.textContent = 'louder than words';
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="App">
            <div id="scrollingBox" className="box">
                <span id="textBox">Crafting visuals</span>
            </div>
        </div>
    );
}

export default App;
