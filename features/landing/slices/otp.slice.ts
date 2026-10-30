import { createSlice } from '@reduxjs/toolkit'

export const OTP_DURATION_MS = 3 * 60 * 1000

type OtpState = {
    expiresAt: number | null
}

const initialState: OtpState = {
    expiresAt: null,
}

const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        startOtpTimer: {
            reducer(state, action: { payload: number; type: string }) {
                state.expiresAt = action.payload
            },
            prepare: () => ({ payload: Date.now() + OTP_DURATION_MS }),
        },
        clearOtpTimer(state) {
            state.expiresAt = null
        },
    },
})

export const { startOtpTimer, clearOtpTimer } = otpSlice.actions
export default otpSlice.reducer