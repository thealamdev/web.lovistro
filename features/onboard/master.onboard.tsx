"use client";

import { useAppSelector } from "@/redux/hooks";
import { renderStep } from "./utils/renderStep";
import { selectCurrentStep } from "./slices/step.slice";
import SplashScreen from "@/components/common/SplashScreen";

export default function MasterOnboard() {
    const currentStep = useAppSelector(selectCurrentStep);

    return (
        <section className="container w-full max-w-md flex flex-col items-center justify-center">
            <SplashScreen />
            {renderStep(currentStep)}
        </section>
    )
}