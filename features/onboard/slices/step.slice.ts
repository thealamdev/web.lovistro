import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Steps } from '../types/onboard.types';
import { STEPS } from '../constants/onboard.constants';
import { RootState } from '@/redux/store';

type StepState = {
    currentStep: Steps;
}

const initialState: StepState = {
    currentStep: STEPS.WELCOME,
};

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<Steps>) => {
            state.currentStep = action.payload;
        },
    },
});

export const { setStep } = stepSlice.actions;

export const selectCurrentStep = (state: RootState) => state.step.currentStep;

export default stepSlice.reducer;