import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

import { INITIAL_ONBOARD_FORM } from '../constants/onboard-form.constants';
import { OnboardFormState } from '../types/onboard-form.types';

const initialState: OnboardFormState = INITIAL_ONBOARD_FORM;

const onboardFormSlice = createSlice({
    name: 'onboardForm',
    initialState,

    reducers: {
        updateOnboardForm: (
            state,
            action: PayloadAction<Partial<OnboardFormState>>
        ) => {
            Object.assign(state, action.payload);
        },

        setOnboardField: <K extends keyof OnboardFormState>(
            state: OnboardFormState,
            action: PayloadAction<{
                field: K;
                value: OnboardFormState[K];
            }>
        ) => {
            state[action.payload.field] = action.payload.value;
        },

        resetOnboardForm: () => INITIAL_ONBOARD_FORM,
    },
});

export const {
    updateOnboardForm,
    setOnboardField,
    resetOnboardForm,
} = onboardFormSlice.actions;

export const selectOnboardForm = (state: RootState) =>
    state.onboardForm;

export default onboardFormSlice.reducer;