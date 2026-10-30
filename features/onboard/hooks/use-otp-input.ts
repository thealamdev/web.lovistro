import {
    useCallback,
    useRef,
    useState,
    type ChangeEvent,
    type ClipboardEvent,
    type KeyboardEvent,
} from 'react'

type Options = {
    length?: number
    onChange?: () => void
}

export function useOtpInput({ length = 6, onChange }: Options = {}) {
    const [values, setValues] = useState<string[]>(() => Array(length).fill(''))
    const inputsRef = useRef<Array<HTMLInputElement | null>>([])

    const focusInput = useCallback(
        (index: number) => {
            const i = Math.min(Math.max(index, 0), length - 1)
            inputsRef.current[i]?.focus()
        },
        [length],
    )

    const fill = useCallback(
        (raw: string, start: number) => {
            const chars = raw.replace(/\D/g, '').slice(0, length - start).split('')
            if (chars.length === 0 || chars[0] === '') return
            onChange?.()
            setValues((prev) => {
                const next = [...prev]
                chars.forEach((c, k) => {
                    next[start + k] = c
                })
                return next
            })
            focusInput(start + chars.length)
        },
        [length, focusInput, onChange],
    )

    const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/\D/g, '')

        if (digits.length === 0) {
            onChange?.()
            setValues((prev) => {
                const next = [...prev]
                next[index] = ''
                return next
            })
            return
        }

        if (digits.length >= length) return fill(digits, 0)

        fill(digits.slice(-1), index)
    }

    const handleKeyDown = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
            e.preventDefault()
            onChange?.()
            setValues((prev) => {
                const next = [...prev]
                next[index - 1] = ''
                return next
            })
            focusInput(index - 1)
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            focusInput(index - 1)
        } else if (e.key === 'ArrowRight') {
            e.preventDefault()
            focusInput(index + 1)
        }
    }

    const handlePaste = (index: number) => (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        fill(e.clipboardData.getData('text'), index)
    }

    const pasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText()
            fill(text, 0)
        } catch {
            // clipboard permission denied: ignore
        }
    }

    const reset = useCallback(() => {
        setValues(Array(length).fill(''))
        focusInput(0)
    }, [length, focusInput])

    const code = values.join('')

    return {
        values,
        code,
        isComplete: code.length === length,
        inputsRef,
        handleChange,
        handleKeyDown,
        handlePaste,
        pasteFromClipboard,
        reset,
    }
}