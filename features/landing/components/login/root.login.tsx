"use client";

import LoginForm from "./login-form";
import { type FormEvent } from "react";
import Navigate from "../common/Navigate";
import { useRouter } from "next/navigation";
import OrDevider from "../common/OrDevider";
import PageHeader from "../common/PageHeader";
import { ROUTES } from "@/src/generated/routes";
import OauthButtons from "../common/OauthButtons";
import { STEPS } from "../../constants/landing.constants";
import SignUpRedirectButton from "../common/SignUpRedirectButton";
import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";

export default function RootLoginComponent() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: submit email + password
        // after success redirect to onboard screen
        dispatch(setStep(STEPS.WELCOME))
        router.push(ROUTES.ONBOARD);
    };

    return (
        <div className="w-full py-5">

            <Navigate to={STEPS.WELCOME} />

            <PageHeader
                title="Sign in Using lovistro"
                description="Unlock a world of connections with Lovistro"
            />

            <LoginForm
                handleSubmit={handleSubmit}
            />

            <OrDevider />

            <OauthButtons />

            <SignUpRedirectButton />
        </div>
    );
}