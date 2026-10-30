"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldInput } from "@/components/ui/field-input";
import { useAppDispatch } from "@/redux/hooks";
import { setStep } from "../../slices/step.slice";
import { STEPS } from "../../constants/onboard.constants";
import SignInRedirectButton from "../common/SignInRedirectButton";
import OrDevider from "../common/OrDevider";
import OauthButtons from "../common/OauthButtons";
import AuthPageHeader from "../common/AuthPageHeader";

export default function RootRegisterComponent() {
    const [show, setShow] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: submit email + password
    };

    return (
        <div className="w-full py-5">
            <nav className="py-3">
                <button
                    type="button"
                    aria-label="Back"
                    className="cursor-pointer"
                    onClick={() => dispatch(setStep(STEPS.WELCOME))}
                >
                    <ArrowLeft size={24} className="text-foreground" />
                </button>
            </nav>

            <AuthPageHeader
                title="Sign up Using lovistro"
                description="Unlock a world of connections with Lovistro"
            />

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <FieldInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<Mail />}
                    autoComplete="email"
                />

                <FieldInput
                    label="Password"
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    icon={<Lock />}
                    autoComplete="new-password"
                    endIcon={
                        <button
                            type="button"
                            onClick={() => setShow((s) => !s)}
                            aria-label={show ? "Hide password" : "Show password"}
                            className="cursor-pointer"
                        >
                            {show ? <Eye /> : <EyeOff />}
                        </button>
                    }
                />

                <Button type="submit" className="mt-2 h-12 w-full rounded-lg text-base font-semibold">
                    Sign up
                </Button>
            </form>

            <OrDevider />

            <OauthButtons />

            <SignInRedirectButton />
        </div>
    );
}