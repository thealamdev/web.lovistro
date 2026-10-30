"use client";

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

type PageProps = {
    children: Readonly<ReactNode>
}

export default function ReduxProvider({
    children
}: PageProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
