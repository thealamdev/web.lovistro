'use client'

import { cn } from '@/lib/utils'
import { type FormEvent } from 'react'
import { useOtpInput } from '../../hooks/use-otp-input'
import { OtpStatus } from '../../types/otp.types'
import { useOtpTimer } from '@/features/onboard/hooks/use-otp-timer'

type PageProps = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    status?: OtpStatus
    isLoading?: boolean
    onResend?: () => void
    onInputChange?: () => void
}

const OTP_LENGTH = 6

export default function OtpVerifyForm({
    handleSubmit,
    status = 'idle',
    isLoading = false,
    onResend,
    onInputChange,
}: PageProps) {
    const { formatted, isExpired, restart } = useOtpTimer()
    const {
        values,
        code,
        isComplete,
        inputsRef,
        handleChange,
        handleKeyDown,
        handlePaste,
        pasteFromClipboard,
        reset,
    } = useOtpInput({ length: OTP_LENGTH, onChange: onInputChange })

    const handleResend = () => {
        reset()
        restart()
        onResend?.()
    }

    return (
        <form onSubmit={handleSubmit} className="w-full mt-6">
            <input type="hidden" name="otp" value={code} />

            <div
                className={cn(
                    'flex items-center justify-between gap-2',
                    status === 'error' && 'animate-shake',
                )}
            >
                {values.map((value, i) => (
                    <input
                        key={i}
                        ref={(el) => {
                            inputsRef.current[i] = el
                        }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        enterKeyHint={i === OTP_LENGTH - 1 ? 'done' : 'next'}
                        autoComplete={i === 0 ? 'one-time-code' : 'off'}
                        maxLength={i === 0 ? OTP_LENGTH : 1}
                        aria-label={`Digit ${i + 1}`}
                        aria-invalid={status === 'error'}
                        value={value}
                        readOnly={status === 'success'}
                        onChange={handleChange(i)}
                        onKeyDown={handleKeyDown(i)}
                        onPaste={handlePaste(i)}
                        onFocus={(e) => e.target.select()}
                        className={cn(
                            'h-12 min-w-0 flex-1 rounded-md border border-border bg-[#333533] text-center text-lg font-semibold text-foreground outline-none transition-colors',
                            'border-transparent focus:border-primary',
                            status === 'error' &&
                            'border-destructive bg-transparent text-destructive focus:border-destructive',
                            status === 'success' && 'border-primary',
                        )}
                    />
                ))}
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
                <span
                    className={cn(
                        'tabular-nums text-muted-foreground',
                        isExpired && 'text-destructive',
                    )}
                >
                    {formatted}
                </span>
                <button
                    type="button"
                    onClick={pasteFromClipboard}
                    disabled={status === 'success'}
                    className="font-medium text-foreground hover:text-primary disabled:opacity-50"
                >
                    Paste
                </button>
            </div>

            <div className="mt-16 flex flex-col items-center gap-4">
                <button
                    type="submit"
                    disabled={!isComplete || isExpired || isLoading || status === 'success'}
                    className="h-12 w-full rounded-md bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>

                <button
                    type="button"
                    onClick={handleResend}
                    disabled={!isExpired}
                    className="text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Resend Code
                </button>
            </div>
        </form>
    )
}