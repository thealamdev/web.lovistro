import { configureStore } from '@reduxjs/toolkit'
import stepReducer from "@/features/onboard/slices/step.slice";

export const store = configureStore({
    reducer: {
        step: stepReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store