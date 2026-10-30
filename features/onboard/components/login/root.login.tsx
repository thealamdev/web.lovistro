"use client";

import LoginForm from "./login-form";
import { type FormEvent } from "react";
import Navigate from "../common/Navigate";
import OrDevider from "../common/OrDevider";
import PageHeader from "../common/PageHeader";
import OauthButtons from "../common/OauthButtons";
import { STEPS } from "../../constants/onboard.constants";
import SignUpRedirectButton from "../common/SignUpRedirectButton";

export default function RootLoginComponent() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: submit email + password
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