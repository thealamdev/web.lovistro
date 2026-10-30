'use client'

import AppLayout from "@/components/layouts/AppLayout";
import RootGreetingComponent from "./components/greeting/root.greeting";

export default function MasterOnboardComponent() {
    const onGetStarted = () => {

    }
    return (
        <AppLayout>
            <RootGreetingComponent
                onGetStarted={() => onGetStarted()}
            />
        </AppLayout>
    )
}
