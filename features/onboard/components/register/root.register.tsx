"use client";

import { type FormEvent } from "react";
import { STEPS } from "../../constants/onboard.constants";
import SignInRedirectButton from "../common/SignInRedirectButton";
import OrDevider from "../common/OrDevider";
import OauthButtons from "../common/OauthButtons";
import PageHeader from "../common/PageHeader";
import Navigate from "../common/Navigate";
import RegisterForm from "./register-form";

export default function RootRegisterComponent() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: submit email + password
    };

    return (
        <div className="w-full py-5">

            <Navigate to={STEPS.WELCOME} />

            <PageHeader
                title="Sign up Using lovistro"
                description="Unlock a world of connections with Lovistro"
            />

            <RegisterForm
                handleSubmit={handleSubmit}
            />

            <OrDevider />

            <OauthButtons />

            <SignInRedirectButton />
        </div>
    );
}