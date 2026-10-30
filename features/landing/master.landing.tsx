"use client";

import { useAppSelector } from "@/redux/hooks";
import { renderStep } from "./utils/renderStep";
import AppLayout from "@/components/layouts/AppLayout";
import { selectCurrentStep } from "./slices/step.slice";
import SplashScreen from "@/components/common/SplashScreen";

export default function MasterLandingComponent() {
    const currentStep = useAppSelector(selectCurrentStep);

    return (
        <AppLayout>
            <SplashScreen />
            {renderStep(currentStep)}
        </AppLayout>
    )
}