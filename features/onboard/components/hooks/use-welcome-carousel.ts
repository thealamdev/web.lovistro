"use client";

import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AUTOPLAY_DELAY } from "../../constants/welcome.constants";

export function useWelcomeCarousel() {
    const [currentStep, setCurrentStep] = useState(1);

    const plugins = useMemo(
        () => [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })],
        [],
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setCurrentStep(emblaApi.selectedScrollSnap() + 1);

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    return { emblaRef, currentStep };
}