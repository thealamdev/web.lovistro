"use client";

import SplashIcon from "@/components/icons/SplashIcon";
import { WELCOME_SLIDES } from "../../constants/welcome.constants";
import { StepProgress } from "./step-progress";
import { WelcomeSlide } from "./welcome-slide";
import { WelcomeActions } from "./welcome-actions";
import { useWelcomeCarousel } from "../../hooks/use-welcome-carousel";

export default function RootWelcomeComponent() {
    const { emblaRef, currentStep } = useWelcomeCarousel();

    return (
        <section className="relative w-full flex h-dvh flex-col overflow-hidden bg-background pb-6 pt-5">
            {/* stepper */}
            <StepProgress currentStep={currentStep} />

            {/* static background icon (stays while the text changes) */}
            <div className="pointer-events-none absolute top-24 left-30 flex justify-center">
                <SplashIcon width={349} height={349} />
            </div>

            {/* swipeable content */}
            <div className="relative z-10 mt-auto overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {WELCOME_SLIDES.map((slide) => (
                        <WelcomeSlide key={slide.id} slide={slide} />
                    ))}
                </div>
            </div>

            {/* actions */}
            <div className="relative z-10 mt-10">
                <WelcomeActions />
            </div>
        </section>
    )
}