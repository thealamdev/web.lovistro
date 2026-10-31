import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { ONBOARD_STEPS, OnboardSteps } from '../constants/onboard.constants';

type OnboardStepState = {
    currentStep: OnboardSteps;
};

const initialState: OnboardStepState = {
    currentStep: ONBOARD_STEPS.GREETING,
};

const onboardFormStepSlice = createSlice({
    name: 'onboardFormStep',
    initialState,
    reducers: {
        setOnboardStep: (
            state,
            action: PayloadAction<OnboardSteps>
        ) => {
            state.currentStep = action.payload;
        },

        resetOnboardStep: () => initialState,
    },
});

export const { setOnboardStep, resetOnboardStep } =
    onboardFormStepSlice.actions;

export const selectOnboardStep = (state: RootState) =>
    state.onboardFormStep.currentStep;

export default onboardFormStepSlice.reducer;