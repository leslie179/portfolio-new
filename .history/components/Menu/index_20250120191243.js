import React, { useState, useEffect } from 'react';

const Menu = () => {
    // Initialize state with undefined since `window` doesn't exist on the server
    const [prevScrollPos, setPrevScrollPos] = useState(typeof window !== 'undefined' ? window.pageYOffset : 0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        // Set up scroll listener
        window.addEventListener('scroll', handleScroll);

        // Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll
