import { combineReducers, configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import otpReducer from '@/features/landing/slices/otp.slice';
import stepReducer from '@/features/landing/slices/step.slice';
import onboardFormReducer from '@/features/onboard/slices/onboard-form.slice';
import onboardFormStepReducer from '@/features/onboard/slices/onboard-form-step.slice';

const rootReducer = combineReducers({
    step: stepReducer,
    otp: otpReducer,

    onboardForm: onboardFormReducer,
    onboardFormStep: onboardFormStepReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'step',
        'otp',
        'onboardForm',
        'onboardFormStep',
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;