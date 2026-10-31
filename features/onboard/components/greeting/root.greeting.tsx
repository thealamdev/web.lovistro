'use client'

import { useAppDispatch } from '@/redux/hooks'
import SplashIcon from '@/components/icons/SplashIcon'
import ConfettiCanvas from '@/components/ui/confetti-canvas'
import { ONBOARD_STEPS } from '../../constants/onboard.constants';
import { setOnboardStep } from '../../slices/onboard-form-step.slice';

export default function RootGreetingComponent() {
    const dispatch = useAppDispatch();

    const onGetStarted = () => {
        dispatch(setOnboardStep(ONBOARD_STEPS.NAME));
    }

    return (
        <main className="relative flex min-h-dvh flex-col overflow-hidden bg-background px-5 pb-8 text-foreground">
            <ConfettiCanvas className="absolute inset-0" />

            {/* faded logo watermark: export your logo mark to /public/logo-mark.svg */}
            <div className="relative z-10 flex flex-[1.3] items-center justify-center pt-16">
                <SplashIcon />
            </div>

            <section className="relative z-10 text-center">
                <h1
                    className="animate-fade-up text-2xl font-bold tracking-tight"
                    style={{ animationDelay: '100ms' }}
                >
                    Welcome to Lovistro!
                </h1>
                <p
                    className="animate-fade-up mx-auto mt-2 max-w-xs text-base text-muted-foreground"
                    style={{ animationDelay: '250ms' }}
                >
                    Let&apos;s create your profile to help you find meaningful connections.
                </p>

                <button
                    type="button"
                    onClick={onGetStarted}
                    className="animate-fade-up mt-8 h-12 w-full rounded-md bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-[0.98]"
                    style={{ animationDelay: '400ms' }}
                >
                    Get Started
                </button>
            </section>

            <div className="relative z-10 flex flex-1 items-end">
                <p className="w-full text-center text-xs text-muted-foreground">
                    Your information is secure with us and will only be used to help you
                    find the best matches
                </p>
            </div>
        </main>
    )
}