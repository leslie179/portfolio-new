import { useState, useEffect } from 'react';

const Menu = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(typeof window !== 'undefined' ? window.pageYOffset : 0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollPos, visible]);

    return (
        // Component JSX
    );
};

export default Menu;
