"use client";

import { type FormEvent } from "react";
import { STEPS } from "../../constants/onboard.constants";
import SignUpRedirectButton from "../common/SignUpRedirectButton";
import OrDevider from "../common/OrDevider";
import OauthButtons from "../common/OauthButtons";
import PageHeader from "../common/PageHeader";
import Navigate from "../common/Navigate";
import LoginForm from "./login-form";

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