'use client';

import { useEffect, useState } from 'react';

import SplashIcon from '@/components/icons/SplashIcon';

const STORAGE_KEY = 'splash-seen';
const SHOW_MS = 1800;
const FADE_MS = 400;

type Phase = 'show' | 'fade' | 'gone';

const SplashScreen = () => {
    const [phase, setPhase] = useState<Phase>('show');

    useEffect(() => {
        let seen = false;

        try {
            seen = sessionStorage.getItem(STORAGE_KEY) === '1';
            sessionStorage.setItem(STORAGE_KEY, '1');
        } catch {
            seen = false;
        }

        const fadeTimer = setTimeout(
            () => setPhase(seen ? 'gone' : 'fade'),
            seen ? 0 : SHOW_MS,
        );
        const goneTimer = seen
            ? undefined
            : setTimeout(() => setPhase('gone'), SHOW_MS + FADE_MS);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(goneTimer);
        };
    }, []);

    if (phase === 'gone') return null;

    return (
        <div
            role="status"
            aria-label="Loading"
            className={`bg-background fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-[400ms] ${phase === 'fade' ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
        >
            <SplashIcon className="splash-animate" />
        </div>
    );
};

export default SplashScreen;