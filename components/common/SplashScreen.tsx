'use client'

import { useEffect, useState } from 'react'

import SplashIcon from '@/components/icons/SplashIcon'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'splash-seen'
const SHOW_MS = 1800
const FADE_MS = 400

type Phase = 'show' | 'fade' | 'gone'

const SplashScreen = () => {
    const [phase, setPhase] = useState<Phase>('show')

    useEffect(() => {
        let seen = false

        try {
            seen = sessionStorage.getItem(STORAGE_KEY) === '1'
            sessionStorage.setItem(STORAGE_KEY, '1')
        } catch {
            seen = false
        }

        if (seen) {
            setPhase('gone')
            return
        }

        const fadeTimer = setTimeout(() => setPhase('fade'), SHOW_MS)
        const goneTimer = setTimeout(() => setPhase('gone'), SHOW_MS + FADE_MS)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(goneTimer)
        }
    }, [])

    useEffect(() => {
        if (phase === 'gone') return
        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previous
        }
    }, [phase])

    if (phase === 'gone') return null

    return (
        <div
            role="status"
            aria-label="Loading"
            className={cn(
                'fixed inset-0 z-9999 flex items-center justify-center bg-background transition-opacity duration-400',
                phase === 'fade' ? 'pointer-events-none opacity-0' : 'opacity-100',
            )}
        >
            <SplashIcon animated />
        </div>
    )
}

export default SplashScreen