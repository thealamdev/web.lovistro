import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clearOtpTimer, OTP_DURATION_MS, startOtpTimer } from '../slices/otp.slice'

const pad = (n: number) => String(n).padStart(2, '0')

export function formatSeconds(total: number) {
    return `${pad(Math.floor(total / 60))}:${pad(total % 60)}`
}

export function useOtpTimer() {
    const dispatch = useAppDispatch()
    const expiresAt = useAppSelector((s) => s.otp.expiresAt)
    const [now, setNow] = useState(() => Date.now())

    useEffect(() => {
        if (expiresAt === null) dispatch(startOtpTimer())
    }, [expiresAt, dispatch])

    useEffect(() => {
        if (expiresAt === null) return
        setNow(Date.now())
        const id = setInterval(() => {
            const t = Date.now()
            setNow(t)
            if (t >= expiresAt) clearInterval(id)
        }, 250)
        return () => clearInterval(id)
    }, [expiresAt])

    const secondsLeft =
        expiresAt === null
            ? OTP_DURATION_MS / 1000
            : Math.max(0, Math.ceil((expiresAt - now) / 1000))

    const restart = useCallback(() => dispatch(startOtpTimer()), [dispatch])
    const clear = useCallback(() => dispatch(clearOtpTimer()), [dispatch])

    return {
        secondsLeft,
        formatted: formatSeconds(secondsLeft),
        isExpired: expiresAt !== null && secondsLeft === 0,
        restart,
        clear,
    }
}