'use client';

import AppLayout from '@/components/layouts/AppLayout';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { selectOnboardStep, setOnboardStep } from './slices/onboard-form-step.slice';
import { selectOnboardForm, updateOnboardForm } from './slices/onboard-form.slice';

import { renderOnboardStep } from './utils/renderOnboardStep';

export default function MasterOnboardComponent() {
    const dispatch = useAppDispatch();

    const currentStep = useAppSelector(selectOnboardStep);
    const form = useAppSelector(selectOnboardForm);

    const handleChange = <K extends keyof typeof form>(
        field: K,
        value: (typeof form)[K]
    ) => {
        dispatch(updateOnboardForm({ [field]: value }));
    };

    const handleContinue = (step: typeof currentStep) => {
        dispatch(setOnboardStep(step));
    };

    return (
        <AppLayout>
            {renderOnboardStep({
                step: currentStep,
                form,
                handleChange,
                onContinue: handleContinue,
            })}
        </AppLayout>
    );
}