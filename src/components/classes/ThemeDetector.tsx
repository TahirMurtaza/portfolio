"use client"
import { useEffect } from 'react';

const ThemeDetector = () => {
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');

        const apply = (dark: boolean) => {
            document.body.classList.toggle('bg-dark', dark);
        };

        apply(mq.matches);
        mq.addEventListener('change', (e) => apply(e.matches));

        return () => {
            mq.removeEventListener('change', (e) => apply(e.matches));
        };
    }, []);

    return null;
};

export default ThemeDetector;
